import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { loginStyles } from '../../styles/loginStyles';

// StatusBar Component
export const StatusBarDisplay: React.FC = () => (
  <View style={loginStyles.statusBar}>
    <Text style={loginStyles.time}>8:48</Text>
    <Text style={loginStyles.status}>●●● LTE 60%</Text>
  </View>
);

// Hero Section Component
export const HeroSection: React.FC = () => (
  <View style={loginStyles.heroSection}>
    {/* 로고 */}
    <View style={loginStyles.logoContainer}>
      <View style={loginStyles.logo}>
        <Text style={loginStyles.logoIcon}>🍽️</Text>
      </View>
    </View>

    {/* 앱 이름 */}
    <Text style={loginStyles.appName}>RootMe</Text>

    {/* 태그라인 */}
    <Text style={loginStyles.tagline}>AI가 추천하는 맛집 탐색</Text>
  </View>
);

// Login Section Component
interface LoginSectionProps {
  onKakaoLogin: () => void;
  onGuestMode: () => void;
}

export const LoginSection: React.FC<LoginSectionProps> = ({ onKakaoLogin, onGuestMode }) => (
  <View style={loginStyles.loginSection}>
    {/* 제목 */}
    <Text style={loginStyles.loginTitle}>로그인하고 시작하기</Text>

    {/* 설명 */}
    <Text style={loginStyles.loginDescription}>
      간편한 소셜 로그인으로 맞춤 맛집을 찾아보세요
    </Text>

    {/* 카카오 로그인 버튼 */}
    <TouchableOpacity style={loginStyles.kakaoButton} onPress={onKakaoLogin}>
      <Text style={loginStyles.kakaoButtonText}>💬 카카오톡으로 로그인</Text>
    </TouchableOpacity>

    {/* 추가 버튼들 */}
    <View style={loginStyles.additionalButtons}>
      <TouchableOpacity style={loginStyles.guestButton} onPress={onGuestMode}>
        <Text style={loginStyles.guestButtonText}>둘러보기</Text>
      </TouchableOpacity>
    </View>

    {/* 약관 텍스트 */}
    <View style={loginStyles.termsContainer}>
      <Text style={loginStyles.termsText}>
        로그인 시{' '}
        <Text style={loginStyles.termsLink}>서비스 약관</Text>
        {' '}및{' '}
        <Text style={loginStyles.termsLink}>개인정보 처리방침</Text>
        에 동의합니다
      </Text>
    </View>
  </View>
);
