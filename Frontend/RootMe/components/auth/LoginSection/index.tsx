import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface LoginSectionProps {
  onKakaoLogin: () => void;
  onGuestMode: () => void;
}

const LoginSection: React.FC<LoginSectionProps> = ({ onKakaoLogin, onGuestMode }) => (
  <View style={styles.loginSection}>
    {/* 제목 */}
    <Text style={styles.loginTitle}>로그인하고 시작하기</Text>

    {/* 설명 */}
    <Text style={styles.loginDescription}>
      간편한 소셜 로그인으로 맞춤 맛집을 찾아보세요
    </Text>

    {/* 카카오 로그인 버튼 */}
    <TouchableOpacity style={styles.kakaoButton} onPress={onKakaoLogin}>
      <Text style={styles.kakaoButtonText}>💬 카카오톡으로 로그인</Text>
    </TouchableOpacity>

    {/* 추가 버튼들 */}
    <View style={styles.additionalButtons}>
      <TouchableOpacity style={styles.guestButton} onPress={onGuestMode}>
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
);

export default LoginSection;
