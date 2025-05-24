import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../../contexts/AppContext';

const { width, height } = Dimensions.get('window');

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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* 상태바 */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>8:48</Text>
        <Text style={styles.status}>●●● LTE 60%</Text>
      </View>

      {/* 히어로 섹션 */}
      <View style={styles.heroSection}>
        {/* 로고 */}
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoIcon}>🍽️</Text>
          </View>
        </View>

        {/* 앱 이름 */}
        <Text style={styles.appName}>RootMe</Text>

        {/* 태그라인 */}
        <Text style={styles.tagline}>AI가 추천하는 맛집 탐색</Text>
      </View>

      {/* 로그인 섹션 */}
      <View style={styles.loginSection}>
        {/* 제목 */}
        <Text style={styles.loginTitle}>로그인하고 시작하기</Text>

        {/* 설명 */}
        <Text style={styles.loginDescription}>
          간편한 소셜 로그인으로 맞춤 맛집을 찾아보세요
        </Text>

        {/* 카카오 로그인 버튼 */}
        <TouchableOpacity style={styles.kakaoButton} onPress={handleKakaoLogin}>
          <Text style={styles.kakaoButtonText}>💬 카카오톡으로 로그인</Text>
        </TouchableOpacity>

        {/* 추가 버튼들 */}
        <View style={styles.additionalButtons}>
          <TouchableOpacity style={styles.guestButton} onPress={handleGuestMode}>
            <Text style={styles.guestButtonText}>둘러보기</Text>
          </TouchableOpacity>
        </View>

        {/* 약관 텍스트 */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            로그인 시{' '}
            <Text style={styles.termsLink}>서비스 약관</Text>
            {' '}및{' '}
            <Text style={styles.termsLink}>개인정보 처리방침</Text>
            에 동의합니다
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  time: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
  },
  status: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
  heroSection: {
    backgroundColor: '#33b2e5',
    paddingVertical: 60,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: 50,
    color: '#33b2e5',
  },
  appName: {
    fontSize: 40,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 20,
  },
  tagline: {
    fontSize: 18,
    fontWeight: '400',
    color: '#ffffff',
    opacity: 0.9,
  },
  loginSection: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 40,
    minHeight: height * 0.5,
  },
  loginTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 20,
    lineHeight: 40,
  },
  loginDescription: {
    fontSize: 16,
    fontWeight: '400',
    color: '#808080',
    marginBottom: 60,
    lineHeight: 24,
  },
  kakaoButton: {
    backgroundColor: '#ffeb00',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  kakaoButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  additionalButtons: {
    alignItems: 'center',
    marginBottom: 40,
  },
  guestButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  guestButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#808080',
    textDecorationLine: 'underline',
  },
  termsContainer: {
    alignItems: 'center',
  },
  termsText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
    lineHeight: 18,
  },
  termsLink: {
    color: '#33b2e5',
    textDecorationLine: 'underline',
  },
});