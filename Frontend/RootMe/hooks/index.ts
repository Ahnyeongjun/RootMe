import { useState, useEffect, useRef, useCallback } from 'react';
import { Keyboard, Platform } from 'react-native';
import * as Location from 'expo-location';
import { debounce, throttle } from '../utils';

// 키보드 상태 훅
export const useKeyboard = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (e) => {
        setKeyboardVisible(true);
        setKeyboardHeight(e.endCoordinates.height);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidHideListener?.remove();
      keyboardDidShowListener?.remove();
    };
  }, []);

  const dismissKeyboard = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return {
    isKeyboardVisible,
    keyboardHeight,
    dismissKeyboard,
  };
};

// 위치 정보 훅
export const useLocation = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCurrentLocation = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // 권한 요청
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('위치 권한이 거부되었습니다.');
        return;
      }

      // 현재 위치 가져오기
      const locationResult = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      const coords = {
        latitude: locationResult.coords.latitude,
        longitude: locationResult.coords.longitude,
      };

      setLocation(coords);
      return coords;
    } catch (err) {
      setError('위치 정보를 가져올 수 없습니다.');
      console.error('Location error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  return {
    location,
    loading,
    error,
    refetch: getCurrentLocation,
  };
};

// 디바운스된 검색 훅
export const useDebounceSearch = (initialValue: string = '', delay: number = 300) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(initialValue);

  const debouncedUpdate = useCallback(
    debounce((value: string) => {
      setDebouncedSearchTerm(value);
    }, delay),
    [delay]
  );

  useEffect(() => {
    debouncedUpdate(searchTerm);
    return () => {
      debouncedUpdate.cancel?.();
    };
  }, [searchTerm, debouncedUpdate]);

  return {
    searchTerm,
    debouncedSearchTerm,
    setSearchTerm,
  };
};

// 스크롤 위치 추적 훅
export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(
    throttle((event: any) => {
      const currentScrollY = event.nativeEvent.contentOffset.y;
      
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      
      setScrollY(currentScrollY);
      lastScrollY.current = currentScrollY;
    }, 16), // 60fps
    []
  );

  return {
    scrollY,
    scrollDirection,
    onScroll: handleScroll,
  };
};

// 이전 값 추적 훅
export const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T>();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
};

// 마운트 상태 훅
export const useIsMounted = () => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return useCallback(() => isMountedRef.current, []);
};

// 토글 훅
export const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return {
    value,
    toggle,
    setTrue,
    setFalse,
    setValue,
  };
};

// 카운터 훅
export const useCounter = (initialValue: number = 0, step: number = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(prev => prev + step);
  }, [step]);

  const decrement = useCallback(() => {
    setCount(prev => prev - step);
  }, [step]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  const setValue = useCallback((value: number) => {
    setCount(value);
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
};

// 타이머 훅
export const useTimer = (initialTime: number = 0) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
  }, [isRunning]);

  const pause = useCallback(() => {
    if (isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  }, [isRunning]);

  const reset = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
    setTime(initialTime);
  }, [initialTime]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    time,
    isRunning,
    start,
    pause,
    reset,
  };
};

// 로컬 스토리지 훅
export const useAsyncStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadValue = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const AsyncStorage = require('@react-native-async-storage/async-storage').default;
      const storedValue = await AsyncStorage.getItem(key);
      
      if (storedValue !== null) {
        const parsedValue = JSON.parse(storedValue);
        setValue(parsedValue);
      } else {
        setValue(initialValue);
      }
    } catch (err) {
      setError('저장된 값을 불러올 수 없습니다.');
      setValue(initialValue);
    } finally {
      setLoading(false);
    }
  }, [key, initialValue]);

  const storeValue = useCallback(async (newValue: T) => {
    try {
      setError(null);
      const AsyncStorage = require('@react-native-async-storage/async-storage').default;
      await AsyncStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    } catch (err) {
      setError('값을 저장할 수 없습니다.');
    }
  }, [key]);

  const removeValue = useCallback(async () => {
    try {
      setError(null);
      const AsyncStorage = require('@react-native-async-storage/async-storage').default;
      await AsyncStorage.removeItem(key);
      setValue(initialValue);
    } catch (err) {
      setError('값을 삭제할 수 없습니다.');
    }
  }, [key, initialValue]);

  useEffect(() => {
    loadValue();
  }, [loadValue]);

  return {
    value,
    setValue: storeValue,
    removeValue,
    loading,
    error,
    refetch: loadValue,
  };
};

// 네트워크 상태 훅
export const useNetworkStatus = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // React Native의 NetInfo를 사용하여 네트워크 상태 모니터링
    // 실제 구현 시 @react-native-netinfo/netinfo 패키지 필요
    const checkConnection = () => {
      // 간단한 fetch로 연결 상태 확인
      fetch('https://www.google.com', { method: 'HEAD' })
        .then(() => setIsConnected(true))
        .catch(() => setIsConnected(false));
    };

    checkConnection();
    const interval = setInterval(checkConnection, 30000); // 30초마다 확인

    return () => clearInterval(interval);
  }, []);

  return { isConnected };
};

// 권한 요청 훅
export const usePermissions = () => {
  const [locationPermission, setLocationPermission] = useState<'granted' | 'denied' | 'undetermined'>('undetermined');

  const requestLocationPermission = useCallback(async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setLocationPermission(status);
      return status === 'granted';
    } catch (error) {
      setLocationPermission('denied');
      return false;
    }
  }, []);

  const checkLocationPermission = useCallback(async () => {
    try {
      const { status } = await Location.getForegroundPermissionsAsync();
      setLocationPermission(status);
      return status === 'granted';
    } catch (error) {
      setLocationPermission('denied');
      return false;
    }
  }, []);

  useEffect(() => {
    checkLocationPermission();
  }, [checkLocationPermission]);

  return {
    locationPermission,
    requestLocationPermission,
    checkLocationPermission,
  };
};

// 폼 유효성 검사 훅
export const useFormValidation = <T extends Record<string, any>>(
  initialValues: T,
  validationRules: Record<keyof T, (value: any) => string | null>
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  const setValue = useCallback((field: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [field]: value }));
    
    // 실시간 유효성 검사
    if (touched[field]) {
      const error = validationRules[field]?.(value);
      setErrors(prev => ({ ...prev, [field]: error || undefined }));
    }
  }, [validationRules, touched]);

  const setFieldTouched = useCallback((field: keyof T) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    // 터치 시 유효성 검사
    const error = validationRules[field]?.(values[field]);
    setErrors(prev => ({ ...prev, [field]: error || undefined }));
  }, [validationRules, values]);

  const validateAll = useCallback(() => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    Object.keys(values).forEach(key => {
      const field = key as keyof T;
      const error = validationRules[field]?.(values[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    
    return isValid;
  }, [values, validationRules]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    setValue,
    setFieldTouched,
    validateAll,
    reset,
    isValid: Object.keys(errors).length === 0,
  };
};