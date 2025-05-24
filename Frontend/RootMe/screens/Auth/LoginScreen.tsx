import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../../contexts/AppContext';
import { StatusBarDisplay, HeroSection, LoginSection } from '../../components/auth/LoginComponents';
import { loginStyles } from '../../styles/loginStyles';

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useApp();

  const handleKakaoLogin = async () => {
    try {
      // 실제 앱에서는 카카오 로그인 SDK 연결
      console.log('카카오 로그인 시도');
      
      // 임시 사용자 데이터 (실제로는 서버에서 받음)
      const userData = {
        id: '1',
        name: 'who',
        email: 'user@example.com',
        visitCount: 47,
        favoriteCount: 23,
        reviewCount: 12,
      };
      
      // AppContext login 함수 사용
      await login(userData, 'temp_token_123');
      
      // 로그인 성공 후 메인 화면으로 이동
      router.replace('/(main)/home');
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const handleGuestMode = () => {
    // 게스트 모드로 앱 이용
    router.replace('/(main)/home');
  };

  return (
    <SafeAreaView style={loginStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* 상태바 */}
      <StatusBarDisplay />

      {/* 히어로 섹션 */}
      <HeroSection />

      {/* 로그인 섹션 */}
      <LoginSection 
        onKakaoLogin={handleKakaoLogin}
        onGuestMode={handleGuestMode}
      />
    </SafeAreaView>
  );
}
