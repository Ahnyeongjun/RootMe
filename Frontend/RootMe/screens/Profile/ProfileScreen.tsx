import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../../contexts/AppContext';
import { StatusBarComponent, TabBar } from '../../components/common';
import {
  ProfileHeader,
  ProfileSection,
  MainMenuSection,
  StatsSection,
  SettingsSection,
  WithdrawSection,
} from '../../components/profile';
import { profileStyles } from '../../styles/profileStyles';

export default function ProfileScreen() {
  const router = useRouter();
  const { logout, user } = useApp();

  const handleBackPress = () => {
    router.back();
  };

  const handleLogout = () => {
    Alert.alert(
      '로그아웃',
      '정말로 로그아웃하시겠습니까?',
      [
        { text: '취소', style: 'cancel' },
        {
          text: '로그아웃',
          style: 'destructive',
          onPress: async () => {
            try {
              await logout();
              router.replace('/(auth)/login');
            } catch (error) {
              console.error('로그아웃 실패:', error);
            }
          }
        },
      ]
    );
  };

  const handleFavorites = () => {
    console.log('찜 목록 열기');
  };

  const handleReviewManagement = () => {
    console.log('기록 관리 열기');
  };

  const handleNotificationSettings = () => {
    console.log('알림 설정 열기');
  };

  const handlePrivacySettings = () => {
    console.log('개인정보 설정 열기');
  };

  const handleInquiry = () => {
    console.log('문의하기');
  };

  const handleTerms = () => {
    console.log('서비스 약관 보기');
  };

  const handleWithdraw = () => {
    Alert.alert(
      '회원 탈퇴',
      '정말로 탈퇴하시겠습니까?',
      [
        { text: '취소', style: 'cancel' },
        { text: '탈퇴', style: 'destructive', onPress: () => console.log('회원 탈퇴') },
      ]
    );
  };

  const handleProfileEdit = () => {
    console.log('프로필 수정');
  };

  return (
    <SafeAreaView style={profileStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <StatusBarComponent />

      {/* 헤더 */}
      <ProfileHeader onBackPress={handleBackPress} onLogout={handleLogout} />

      <ScrollView style={profileStyles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 프로필 영역 */}
        <ProfileSection onProfileEdit={handleProfileEdit} />

        {/* 메인 메뉴 */}
        <MainMenuSection
          onFavorites={handleFavorites}
          onReviewManagement={handleReviewManagement}
          onNotificationSettings={handleNotificationSettings}
        />

        {/* 통계 카드 */}
        <StatsSection />

        {/* 설정 목록 */}
        <SettingsSection
          onPrivacySettings={handlePrivacySettings}
          onInquiry={handleInquiry}
          onTerms={handleTerms}
        />

        {/* 회원 탈퇴 */}
        <WithdrawSection onWithdraw={handleWithdraw} />
      </ScrollView>
      <TabBar selectedTab="마이" />

    </SafeAreaView>
  );
}
