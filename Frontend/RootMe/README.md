# RootMe - AI 맛집 추천 앱

AI가 추천하는 실시간 맛집 탐색 앱입니다. React Native + TypeScript + Expo Router로 구현되었습니다.

## 📱 주요 기능

- **AI 맛집 추천**: 개인화된 맛집 추천 시스템
- **실시간 정보**: 영업 상태 및 실시간 리뷰
- **지도 기반 탐색**: 주변 맛집을 지도에서 쉽게 찾기
- **카테고리별 검색**: 한식, 중식, 일식, 양식 등 다양한 카테고리
- **사용자 리뷰**: 실시간 리뷰 및 평점 시스템
- **소셜 로그인**: 카카오톡 간편 로그인

## 🛠 기술 스택

- **Framework**: React Native + Expo
- **Language**: TypeScript
- **Navigation**: Expo Router (파일 기반 라우팅)
- **State Management**: React Context API + useReducer
- **Storage**: AsyncStorage
- **Location**: Expo Location
- **Styling**: StyleSheet (Native)

## 📁 프로젝트 구조

```
RootMe/
├── app/                         # 라우팅 (Expo Router)
│   ├── index.tsx               # 스플래시/인증 체크
│   ├── _layout.tsx             # 루트 레이아웃
│   ├── (auth)/                 # 인증 그룹
│   │   ├── _layout.tsx        # 인증 레이아웃
│   │   └── login.tsx          # 로그인 화면
│   └── (main)/                # 메인 앱 그룹
│       ├── _layout.tsx        # 메인 레이아웃
│       ├── home.tsx           # 홈 화면
│       ├── map.tsx            # 지도 화면
│       ├── profile.tsx        # 프로필 화면
│       └── restaurant/
│           └── [id].tsx       # 음식점 상세 화면
├── components/                 # 재사용 컴포넌트
│   └── common/
│       └── index.tsx          # 공통 컴포넌트들
├── contexts/                   # React Context
│   └── AppContext.tsx         # 앱 전역 상태
├── types/                      # TypeScript 타입 정의
│   └── index.ts
├── utils/                      # 유틸리티 함수
│   └── index.ts
├── constants/                  # 상수 및 스타일
│   └── styles.ts
├── hooks/                      # 커스텀 훅
│   └── index.ts
├── app.json                    # Expo 설정
├── package.json               # 의존성
├── tsconfig.json              # TypeScript 설정
└── babel.config.js            # Babel 설정
```

## 🚀 시작하기

### 사전 요구사항

- Node.js (v16 이상)
- npm 또는 yarn
- Expo CLI
- iOS Simulator 또는 Android Emulator

### 설치 및 실행

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **개발 서버 시작**
   ```bash
   npm start
   ```

3. **플랫폼별 실행**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web
   ```

## 📱 화면 구성

### 1. 스플래시 & 인증
- **스플래시 화면**: 앱 로고 및 로딩
- **로그인 화면**: 카카오톡 소셜 로그인

### 2. 메인 앱
- **홈 화면**: 오늘의 추천, 주변 맛집, 카테고리 탭
- **지도 화면**: 실시간 지도 기반 맛집 탐색
- **음식점 상세**: 메뉴, 정보, 실시간 리뷰
- **프로필 화면**: 사용자 정보, 찜 목록, 설정

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: #33b2e5 (메인 블루)
- **Secondary**: #407fe3 (서브 블루)
- **Success**: #33b24f (성공 녹색)
- **Warning**: #ffab1a (경고 오렌지)
- **Error**: #ff334d (에러 빨강)

### 타이포그래피
- **큰 제목**: 32px, Bold
- **섹션 제목**: 18px, Bold
- **본문**: 16px, Medium
- **보조 텍스트**: 14px, Regular
- **작은 텍스트**: 12px, Regular

## 🔧 주요 기능 구현

### 인증 시스템
```typescript
// AppContext에서 전역 상태 관리
const { login, logout, isAuthenticated } = useApp();

// 로그인
await login(userData, token);

// 로그아웃
await logout();
```

### 위치 기반 서비스
```typescript
// 커스텀 훅으로 위치 정보 관리
const { location, loading, error } = useLocation();
```

### 상태 관리
```typescript
// React Context + useReducer 패턴
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  // ...
};
```

## 📦 주요 의존성

```json
{
  "expo": "~50.0.0",
  "react": "18.2.0",
  "react-native": "0.73.0",
  "expo-router": "~3.4.0",
  "expo-location": "~16.5.5",
  "@react-native-async-storage/async-storage": "1.21.0",
  "typescript": "^5.1.3"
}
```

## 🧪 개발 도구

- **TypeScript**: 타입 안전성
- **ESLint**: 코드 품질 관리
- **Prettier**: 코드 포맷팅
- **Expo Dev Tools**: 개발 및 디버깅

## 🏗 아키텍처 패턴

### 1. 파일 기반 라우팅 (Expo Router)
```
app/
├── (auth)/           # 인증 관련 화면 그룹
├── (main)/           # 메인 앱 화면 그룹
└── index.tsx         # 진입점
```

### 2. 컴포넌트 구조
```typescript
// 재사용 가능한 컴포넌트 설계
export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  selectedCategory,
  onCategoryPress,
}) => {
  // 컴포넌트 로직
};
```

### 3. 상태 관리 패턴
```typescript
// Context + Reducer 패턴으로 전역 상태 관리
interface AppState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  favorites: string[];
  // ...
}
```

## 🎯 주요 특징

### ✨ 사용자 경험 (UX)
- **직관적인 네비게이션**: 탭 기반 구조
- **실시간 피드백**: 로딩, 에러 상태 표시
- **반응형 디자인**: 다양한 화면 크기 지원
- **애니메이션**: 부드러운 화면 전환

### 🔐 보안 & 성능
- **TypeScript**: 컴파일 타임 에러 방지
- **메모리 최적화**: useCallback, useMemo 활용
- **토큰 기반 인증**: 안전한 사용자 인증
- **에러 바운더리**: 앱 크래시 방지

### 📱 크로스 플랫폼
- **iOS/Android**: 네이티브 성능
- **Web**: PWA 지원 가능
- **일관된 UI**: 플랫폼별 최적화

## 🚦 개발 가이드라인

### 코딩 컨벤션
```typescript
// 컴포넌트명: PascalCase
export const RestaurantCard: React.FC = () => {};

// 함수명: camelCase
const handleRestaurantPress = () => {};

// 상수: UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com';

// 타입: PascalCase + 접미사
interface RestaurantItem {
  id: string;
  name: string;
}
```

### 폴더 구조 규칙
- `app/`: 라우팅 파일만
- `components/`: 재사용 가능한 UI 컴포넌트
- `contexts/`: React Context 파일
- `hooks/`: 커스텀 훅
- `utils/`: 순수 함수들
- `types/`: TypeScript 타입 정의
- `constants/`: 상수 및 설정

## 🔮 향후 계획

### Phase 1 (현재)
- ✅ 기본 UI/UX 구현
- ✅ 인증 시스템
- ✅ 지도 기반 탐색
- ✅ 프로필 관리

### Phase 2 (예정)
- 🔄 백엔드 API 연동
- 🔄 실제 지도 서비스 (Google Maps/Apple Maps)
- 🔄 푸시 알림
- 🔄 소셜 로그인 확장 (Google, Apple)

### Phase 3 (계획)
- 📋 AI 추천 알고리즘
- 📋 실시간 채팅
- 📋 리뷰 이미지 업로드
- 📋 오프라인 모드

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 문의

- **Email**: support@rootme.app
- **GitHub**: [RootMe Repository](https://github.com/rootme/frontend)
- **Documentation**: [개발 문서](https://docs.rootme.app)

---

Made with ❤️ by RootMe Team