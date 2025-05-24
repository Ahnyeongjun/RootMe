import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// 디바이스 크기
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

// 색상 팔레트
export const Colors = {
  // 메인 컬러
  primary: '#33b2e5',
  primaryDark: '#1a80b2',
  primaryLight: '#197fe5',

  // 서브 컬러
  secondary: '#407fe3',
  secondaryLight: '#4080e3',

  // 상태 컬러
  success: '#33b24f',
  warning: '#ffab1a',
  error: '#ff334d',
  info: '#3380e3',

  // 텍스트 컬러
  textPrimary: '#333333',
  textSecondary: '#666666',
  textTertiary: '#999999',
  textDisabled: '#cccccc',
  textWhite: '#ffffff',
  textBlack: '#000000',

  // 배경 컬러
  background: '#ffffff',
  backgroundSecondary: '#f7f7fa',
  backgroundTertiary: '#f2f2f2',

  // 컴포넌트 컬러
  border: '#e6e6e6',
  borderLight: '#f2f2f2',
  shadow: '#000000',

  // 투명도
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',

  // 카테고리별 컬러
  food: {
    korean: '#ff6699',
    chinese: '#99cc66',
    japanese: '#6699cc',
    western: '#e5b266',
    other: '#9980cc',
  },

  // 평점 컬러
  rating: '#ffb21a',

  // 실시간 컬러
  live: '#ff334d',

  // 소셜 로그인 컬러
  kakao: '#ffeb00',
  google: '#4285f4',
  apple: '#000000',
} as const;

// 폰트 크기
export const FontSizes = {
  tiny: 10,
  small: 12,
  regular: 14,
  medium: 16,
  large: 18,
  xlarge: 20,
  xxlarge: 24,
  xxxlarge: 32,
  huge: 40,
} as const;

// 폰트 웨이트
export const FontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
} as const;

// 스페이싱
export const Spacing = {
  tiny: 4,
  small: 8,
  regular: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 32,
  xxxlarge: 40,
  huge: 48,
} as const;

// 보더 반지름
export const BorderRadius = {
  small: 4,
  regular: 8,
  medium: 12,
  large: 16,
  xlarge: 20,
  xxlarge: 24,
  round: 50,
} as const;

// 그림자
export const Shadows = {
  small: {
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  large: {
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
} as const;

// 레이아웃
export const Layout = {
  headerHeight: 60,
  tabBarHeight: 70,
  statusBarHeight: 44,
  screenPadding: 20,
  cardPadding: 16,

  // 컴포넌트 크기
  buttonHeight: 48,
  inputHeight: 40,
  searchBarHeight: 40,
  categoryTabHeight: 36,

  // 아이콘 크기
  iconSmall: 16,
  iconMedium: 24,
  iconLarge: 32,
  iconXLarge: 48,
} as const;

// 애니메이션 지속시간
export const AnimationDuration = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

// 투명도 값
export const Opacity = {
  disabled: 0.4,
  overlay: 0.6,
  pressed: 0.8,
} as const;

// 공통 스타일 헬퍼
export const CommonStyles = {
  // 레이아웃
  flex1: { flex: 1 },
  flexCenter: {
    flex: 1,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  },
  flexRow: {
    flexDirection: 'row' as const,
  },
  flexRowCenter: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  },
  flexRowBetween: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
  },

  // 텍스트 스타일
  textCenter: {
    textAlign: 'center' as const,
  },
  textBold: {
    fontWeight: FontWeights.bold,
  },
  textSemiBold: {
    fontWeight: FontWeights.semiBold,
  },

  // 여백
  noMargin: { margin: 0 },
  noPadding: { padding: 0 },
  screenPadding: {
    paddingHorizontal: Layout.screenPadding,
  },

  // 보더
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  // 카드 스타일
  card: {
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.medium,
    padding: Layout.cardPadding,
    ...Shadows.medium,
  },

  // 버튼 스타일
  button: {
    height: Layout.buttonHeight,
    borderRadius: BorderRadius.medium,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  },

  // 입력 필드 스타일
  input: {
    height: Layout.inputHeight,
    borderRadius: BorderRadius.regular,
    paddingHorizontal: Spacing.medium,
    backgroundColor: Colors.backgroundSecondary,
    fontSize: FontSizes.medium,
    color: Colors.textPrimary,
  },
} as const;


// 반응형 유틸리티
export const Responsive = {
  isSmallScreen: width < 375,
  isMediumScreen: width >= 375 && width < 414,
  isLargeScreen: width >= 414,

  // 반응형 값 계산
  scale: (size: number) => {
    const baseWidth = 375; // iPhone X 기준
    return (width / baseWidth) * size;
  },

  // 반응형 폰트 크기
  fontSize: (size: number) => {
    return Math.min(Responsive.scale(size), size * 1.2);
  },
} as const;


export interface ColorTheme {
  [key: string]: string | { [key: string]: string };
}

export interface Theme {
  colors: ColorTheme;
  fontSizes: typeof FontSizes;
  fontWeights: typeof FontWeights;
  spacing: typeof Spacing;
  borderRadius: typeof BorderRadius;
  shadows: typeof Shadows;
  layout: typeof Layout;
}


// 다크 테마 색상
export const DarkColors: ColorTheme = {
  ...Colors,
  background: '#1a1a1a',
  textPrimary: '#ffffff',
};

// 테마 객체
export const defaultTheme: Theme = {
  colors: Colors,
  fontSizes: FontSizes,
  fontWeights: FontWeights,
  spacing: Spacing,
  borderRadius: BorderRadius,
  shadows: Shadows,
  layout: Layout,
};

export const darkTheme: Theme = {
  ...defaultTheme,
  colors: DarkColors,
};
