// 거리 계산 관련 유틸리티
export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371; // 지구의 반지름 (km)
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // 거리 (km)
  return distance;
};

const deg2rad = (deg: number): number => {
  return deg * (Math.PI / 180);
};

// 거리를 읽기 쉬운 형태로 포맷팅
export const formatDistance = (distanceInKm: number): string => {
  if (distanceInKm < 1) {
    return `${Math.round(distanceInKm * 1000)}m`;
  } else {
    return `${distanceInKm.toFixed(1)}km`;
  }
};

// 도보 시간 계산 (평균 속도 4km/h)
export const calculateWalkTime = (distanceInKm: number): string => {
  const walkingSpeedKmh = 4;
  const timeInHours = distanceInKm / walkingSpeedKmh;
  const timeInMinutes = Math.round(timeInHours * 60);
  
  if (timeInMinutes < 1) {
    return '1분 미만';
  } else if (timeInMinutes < 60) {
    return `${timeInMinutes}분`;
  } else {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    return minutes > 0 ? `${hours}시간 ${minutes}분` : `${hours}시간`;
  }
};

// 시간 포맷팅 관련 유틸리티
export const formatTime = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// 상대적 시간 표시 (예: "방금 전", "3분 전", "1시간 전")
export const getRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 1) {
    return '방금 전';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  } else if (diffInDays < 7) {
    return `${diffInDays}일 전`;
  } else {
    return formatDate(date);
  }
};

// 평점을 별 문자열로 변환
export const formatRating = (rating: number): string => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return '★'.repeat(fullStars) + 
         (hasHalfStar ? '☆' : '') + 
         '☆'.repeat(emptyStars);
};

// 숫자를 한국어 형식으로 포맷팅 (예: 1000 → 1천, 1000000 → 100만)
export const formatNumber = (num: number): string => {
  if (num >= 100000000) {
    return `${Math.floor(num / 100000000)}억`;
  } else if (num >= 10000) {
    return `${Math.floor(num / 10000)}만`;
  } else if (num >= 1000) {
    return `${Math.floor(num / 1000)}천`;
  } else {
    return num.toString();
  }
};

// 가격 포맷팅
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ko-KR').format(price) + '원';
};

// 전화번호 포맷팅
export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  } else if (cleaned.length === 11) {
    return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  }
  
  return phoneNumber;
};

// 검색어 하이라이트
export const highlightSearchTerm = (text: string, searchTerm: string): string => {
  if (!searchTerm) return text;
  
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
};

// 디바운스 함수
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// 쓰로틀 함수
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// 배열 셔플
export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// 객체 딥 클론
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as unknown as T;
  
  const clonedObj = {} as T;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
};

// 이메일 유효성 검사
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 한국 전화번호 유효성 검사
export const isValidKoreanPhoneNumber = (phoneNumber: string): boolean => {
  const phoneRegex = /^(010|011|016|017|018|019)-?\d{3,4}-?\d{4}$/;
  return phoneRegex.test(phoneNumber.replace(/\s/g, ''));
};

// URL 유효성 검사
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// 색상 관련 유틸리티
export const hexToRgba = (hex: string, alpha: number = 1): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// 랜덤 색상 생성
export const generateRandomColor = (): string => {
  const colors = [
    '#ff6699', '#99cc66', '#6699cc', '#e5b266', 
    '#9980cc', '#ffcc99', '#ff991a', '#ff6b8c',
    '#33b2e5', '#e84fd9', '#33b24f', '#ffab1a'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// 플랫폼 감지
export const isIOS = (): boolean => {
  return require('react-native').Platform.OS === 'ios';
};

export const isAndroid = (): boolean => {
  return require('react-native').Platform.OS === 'android';
};

// 에러 로깅
export const logError = (error: Error, context?: string): void => {
  console.error(`Error${context ? ` in ${context}` : ''}:`, error);
  
  // 실제 앱에서는 Crashlytics 등의 서비스로 전송
  // crashlytics().recordError(error);
};

// 성공/에러 응답 처리
export const handleApiResponse = <T>(
  response: { success: boolean; data?: T; error?: string; message?: string }
): T => {
  if (response.success && response.data) {
    return response.data;
  } else {
    throw new Error(response.error || response.message || 'API 요청 실패');
  }
};

// 로컬 스토리지 헬퍼
export const storage = {
  async get(key: string): Promise<any> {
    try {
      const value = await require('@react-native-async-storage/async-storage').default.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      logError(error as Error, `storage.get(${key})`);
      return null;
    }
  },

  async set(key: string, value: any): Promise<void> {
    try {
      await require('@react-native-async-storage/async-storage').default.setItem(key, JSON.stringify(value));
    } catch (error) {
      logError(error as Error, `storage.set(${key})`);
    }
  },

  async remove(key: string): Promise<void> {
    try {
      await require('@react-native-async-storage/async-storage').default.removeItem(key);
    } catch (error) {
      logError(error as Error, `storage.remove(${key})`);
    }
  },

  async clear(): Promise<void> {
    try {
      await require('@react-native-async-storage/async-storage').default.clear();
    } catch (error) {
      logError(error as Error, 'storage.clear()');
    }
  },
};