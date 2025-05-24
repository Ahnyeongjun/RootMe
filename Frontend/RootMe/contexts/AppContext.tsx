import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile, AppSettings, NotificationSettings } from '../types';

// 상태 타입 정의
interface AppState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  currentLocation: {
    latitude: number;
    longitude: number;
  } | null;
  favorites: string[];
  recentSearches: string[];
  settings: AppSettings;
}

// 액션 타입 정의
type AppAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: UserProfile | null }
  | { type: 'SET_AUTHENTICATED'; payload: boolean }
  | { type: 'SET_LOCATION'; payload: { latitude: number; longitude: number } | null }
  | { type: 'ADD_FAVORITE'; payload: string }
  | { type: 'REMOVE_FAVORITE'; payload: string }
  | { type: 'SET_FAVORITES'; payload: string[] }
  | { type: 'ADD_RECENT_SEARCH'; payload: string }
  | { type: 'SET_RECENT_SEARCHES'; payload: string[] }
  | { type: 'UPDATE_SETTINGS'; payload: Partial<AppSettings> }
  | { type: 'RESET_STATE' };

// 초기 상태
const initialState: AppState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  currentLocation: null,
  favorites: [],
  recentSearches: [],
  settings: {
    notifications: {
      newRestaurants: true,
      liveUpdates: true,
      favorites: true,
      reviews: true,
    },
    language: 'ko',
    theme: 'light',
  },
};

// 리듀서
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_USER':
      return { ...state, user: action.payload };
    
    case 'SET_AUTHENTICATED':
      return { ...state, isAuthenticated: action.payload };
    
    case 'SET_LOCATION':
      return { ...state, currentLocation: action.payload };
    
    case 'ADD_FAVORITE':
      if (state.favorites.includes(action.payload)) {
        return state;
      }
      return { 
        ...state, 
        favorites: [...state.favorites, action.payload] 
      };
    
    case 'REMOVE_FAVORITE':
      return { 
        ...state, 
        favorites: state.favorites.filter(id => id !== action.payload) 
      };
    
    case 'SET_FAVORITES':
      return { ...state, favorites: action.payload };
    
    case 'ADD_RECENT_SEARCH':
      const newSearches = [
        action.payload,
        ...state.recentSearches.filter(search => search !== action.payload)
      ].slice(0, 10); // 최대 10개까지만 저장
      return { ...state, recentSearches: newSearches };
    
    case 'SET_RECENT_SEARCHES':
      return { ...state, recentSearches: action.payload };
    
    case 'UPDATE_SETTINGS':
      return { 
        ...state, 
        settings: { ...state.settings, ...action.payload } 
      };
    
    case 'RESET_STATE':
      return { ...initialState, isLoading: false };
    
    default:
      return state;
  }
}

// 컨텍스트 타입
interface AppContextType extends AppState {
  login: (userData: UserProfile, token: string) => Promise<void>;
  logout: () => Promise<void>;
  updateLocation: (location: { latitude: number; longitude: number }) => void;
  addFavorite: (restaurantId: string) => Promise<void>;
  removeFavorite: (restaurantId: string) => Promise<void>;
  addRecentSearch: (query: string) => Promise<void>;
  updateSettings: (settings: Partial<AppSettings>) => Promise<void>;
  checkAuthStatus: () => Promise<void>;
}

// 컨텍스트 생성
const AppContext = createContext<AppContextType | undefined>(undefined);

// 프로바이더 컴포넌트
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // 초기 로딩 시 저장된 데이터 불러오기
  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });

      // 저장된 데이터들 불러오기
      const [
        userToken,
        userDataString,
        favoritesString,
        recentSearchesString,
        settingsString,
      ] = await Promise.all([
        AsyncStorage.getItem('userToken'),
        AsyncStorage.getItem('userData'),
        AsyncStorage.getItem('favorites'),
        AsyncStorage.getItem('recentSearches'),
        AsyncStorage.getItem('settings'),
      ]);

      // 인증 상태 설정
      if (userToken && userDataString) {
        const userData = JSON.parse(userDataString);
        dispatch({ type: 'SET_USER', payload: userData });
        dispatch({ type: 'SET_AUTHENTICATED', payload: true });
      }

      // 찜 목록 설정
      if (favoritesString) {
        const favorites = JSON.parse(favoritesString);
        dispatch({ type: 'SET_FAVORITES', payload: favorites });
      }

      // 최근 검색어 설정
      if (recentSearchesString) {
        const recentSearches = JSON.parse(recentSearchesString);
        dispatch({ type: 'SET_RECENT_SEARCHES', payload: recentSearches });
      }

      // 설정 정보 설정
      if (settingsString) {
        const settings = JSON.parse(settingsString);
        dispatch({ type: 'UPDATE_SETTINGS', payload: settings });
      }
    } catch (error) {
      console.error('초기 데이터 로드 실패:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const login = async (userData: UserProfile, token: string) => {
    try {
      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      
      dispatch({ type: 'SET_USER', payload: userData });
      dispatch({ type: 'SET_AUTHENTICATED', payload: true });
    } catch (error) {
      console.error('로그인 저장 실패:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.multiRemove(['userToken', 'userData']);
      dispatch({ type: 'RESET_STATE' });
    } catch (error) {
      console.error('로그아웃 실패:', error);
      throw error;
    }
  };

  const updateLocation = (location: { latitude: number; longitude: number }) => {
    dispatch({ type: 'SET_LOCATION', payload: location });
  };

  const addFavorite = async (restaurantId: string) => {
    try {
      dispatch({ type: 'ADD_FAVORITE', payload: restaurantId });
      
      const updatedFavorites = [...state.favorites, restaurantId];
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('찜 추가 실패:', error);
    }
  };

  const removeFavorite = async (restaurantId: string) => {
    try {
      dispatch({ type: 'REMOVE_FAVORITE', payload: restaurantId });
      
      const updatedFavorites = state.favorites.filter(id => id !== restaurantId);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('찜 제거 실패:', error);
    }
  };

  const addRecentSearch = async (query: string) => {
    try {
      dispatch({ type: 'ADD_RECENT_SEARCH', payload: query });
      
      const newSearches = [
        query,
        ...state.recentSearches.filter(search => search !== query)
      ].slice(0, 10);
      
      await AsyncStorage.setItem('recentSearches', JSON.stringify(newSearches));
    } catch (error) {
      console.error('최근 검색어 추가 실패:', error);
    }
  };

  const updateSettings = async (newSettings: Partial<AppSettings>) => {
    try {
      const updatedSettings = { ...state.settings, ...newSettings };
      dispatch({ type: 'UPDATE_SETTINGS', payload: newSettings });
      
      await AsyncStorage.setItem('settings', JSON.stringify(updatedSettings));
    } catch (error) {
      console.error('설정 업데이트 실패:', error);
    }
  };

  const checkAuthStatus = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const userDataString = await AsyncStorage.getItem('userData');
      
      if (userToken && userDataString) {
        const userData = JSON.parse(userDataString);
        dispatch({ type: 'SET_USER', payload: userData });
        dispatch({ type: 'SET_AUTHENTICATED', payload: true });
      } else {
        dispatch({ type: 'SET_AUTHENTICATED', payload: false });
      }
    } catch (error) {
      console.error('인증 상태 확인 실패:', error);
      dispatch({ type: 'SET_AUTHENTICATED', payload: false });
    }
  };

  const contextValue: AppContextType = {
    ...state,
    login,
    logout,
    updateLocation,
    addFavorite,
    removeFavorite,
    addRecentSearch,
    updateSettings,
    checkAuthStatus,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// 커스텀 훅
export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;