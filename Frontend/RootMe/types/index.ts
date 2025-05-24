// 음식 아이템 타입
export interface FoodItem {
  id: string;
  name: string;
  restaurant: string;
  rating: number;
  emoji: string;
  color: string;
}

// 레스토랑 아이템 타입
export interface RestaurantItem {
  id: string;
  name: string;
  category: string;
  distance: string;
  rating: number;
  reviews: number;
  emoji: string;
  color: string;
  isLive?: boolean;
  walkTime?: string;
}

// 메뉴 아이템 타입
export interface MenuItem {
  id: string;
  name: string;
  price: string;
  emoji: string;
  color: string;
  description?: string;
}

// 지도 마커 타입
export interface MarkerData {
  id: string;
  x: number;
  y: number;
  type: 'user' | 'restaurant';
  color?: string;
  restaurant?: RestaurantItem;
}

// 사용자 프로필 타입
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  visitCount: number;
  favoriteCount: number;
  reviewCount: number;
}

// 리뷰 타입
export interface Review {
  id: string;
  userId: string;
  restaurantId: string;
  rating: number;
  content: string;
  images?: string[];
  createdAt: Date;
  likes: number;
  isLive?: boolean;
}

// 카테고리 타입
export type CategoryType = '한식' | '중식' | '일식' | '양식' | '기타';

// 필터 타입
export type FilterType = '거리순' | '평점순' | '리뷰순' | '가격순';

// 탭 타입
export type TabType = '홈' | '지도' | '공유' | '채팅' | '마이';

// 음식점 상세 탭 타입
export type RestaurantTabType = '메뉴' | '실시간 리뷰';

// API 응답 타입
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// 검색 파라미터 타입
export interface SearchParams {
  query?: string;
  category?: CategoryType;
  filter?: FilterType;
  location?: {
    latitude: number;
    longitude: number;
  };
  radius?: number;
}

// 알림 설정 타입
export interface NotificationSettings {
  newRestaurants: boolean;
  liveUpdates: boolean;
  favorites: boolean;
  reviews: boolean;
}

// 앱 설정 타입
export interface AppSettings {
  notifications: NotificationSettings;
  language: 'ko' | 'en';
  theme: 'light' | 'dark';
}

// 업데이트된 네비게이션 파라미터 타입
export type RootStackParamList = {
  index: undefined;
  '(auth)': undefined;
  '(main)': undefined;
};

export type AuthStackParamList = {
  login: undefined;
};

export type MainStackParamList = {
  home: undefined;
  map: {
    category?: CategoryType;
    searchQuery?: string;
  };
  profile: undefined;
  'restaurant/[id]': {
    id: string;
    restaurant?: RestaurantItem;
  };
};

// 컴포넌트 Props 타입들
export interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryPress: (category: string) => void;
}

export interface FoodCardProps {
  food: FoodItem;
  onPress?: (food: FoodItem) => void;
}

export interface RestaurantListItemProps {
  restaurant: RestaurantItem;
  onPress?: (restaurant: RestaurantItem) => void;
}

export interface FilterButtonsProps {
  filters: string[];
  selectedFilter: string;
  onFilterPress: (filter: string) => void;
}

export interface TabBarProps {
  selectedTab: string;
  onTabPress: (tab: string) => void;
}

export interface SearchHeaderProps {
  placeholder?: string;
  onClosePress?: () => void;
}

// 폼 데이터 타입
export interface LoginFormData {
  provider: 'kakao' | 'google' | 'apple';
  token: string;
}

export interface ReviewFormData {
  restaurantId: string;
  rating: number;
  content: string;
  images?: string[];
}

// 에러 타입
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

// 상태 관리 타입 (Context 또는 상태관리 라이브러리용)
export interface AppState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  currentLocation: {
    latitude: number;
    longitude: number;
  } | null;
  favorites: string[];
  recentSearches: string[];
  settings: AppSettings;
}

export interface AppActions {
  login: (userData: UserProfile) => void;
  logout: () => void;
  updateLocation: (location: { latitude: number; longitude: number }) => void;
  addFavorite: (restaurantId: string) => void;
  removeFavorite: (restaurantId: string) => void;
  addRecentSearch: (query: string) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
}

// 업데이트된 앱 레이아웃 관련 타입들
export interface LayoutRoute {
  name: string;
  title: string;
  component?: React.ComponentType<any>;
  options?: any;
}

export interface TabRoute extends LayoutRoute {
  icon?: string;
  badge?: number;
}

// 인증 관련 타입들
export interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: UserProfile | null;
  token: string | null;
}

export interface AuthActions {
  checkAuthStatus: () => Promise<void>;
  login: (provider: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
}