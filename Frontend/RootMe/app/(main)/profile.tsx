import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../../contexts/AppContext';
import { StatusBarComponent, TabBar } from '../../components/common';

interface MenuItemProps {
  icon: string;
  title: string;
  onPress: () => void;
}

interface SettingItemProps {
  title: string;
  onPress: () => void;
}

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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <StatusBarComponent />

      {/* 헤더 */}
      <ProfileHeader onBackPress={handleBackPress} onLogout={handleLogout} />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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

// 프로필 헤더 컴포넌트
interface ProfileHeaderProps {
  onBackPress: () => void;
  onLogout: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ onBackPress, onLogout }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
      <Text style={styles.backIcon}>←</Text>
    </TouchableOpacity>
    <Text style={styles.headerTitle}>마이페이지</Text>
    <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
      <Text style={styles.logoutText}>로그아웃</Text>
    </TouchableOpacity>
  </View>
);

// 프로필 섹션 컴포넌트
interface ProfileSectionProps {
  onProfileEdit: () => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ onProfileEdit }) => (
  <View style={styles.profileSection}>
    <View style={styles.profileContainer}>
      <View style={styles.profileImage}>
        <Text style={styles.profileIcon}>👤</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>who</Text>
        <View style={styles.profileActions}>
          <Text style={styles.reviewIcon}>💬</Text>
          <Text style={styles.reviewText}>리뷰관리</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onProfileEdit}>
        <Text style={styles.editArrow}></Text>
      </TouchableOpacity>
    </View>
  </View>
);

// 메인 메뉴 섹션 컴포넌트
interface MainMenuSectionProps {
  onFavorites: () => void;
  onReviewManagement: () => void;
  onNotificationSettings: () => void;
}

const MainMenuSection: React.FC<MainMenuSectionProps> = ({
  onFavorites,
  onReviewManagement,
  onNotificationSettings,
}) => (
  <View style={styles.menuSection}>
    <View style={styles.menuGrid}>
      <MenuCard icon="♡" title="찜 목록" onPress={onFavorites} />
      <MenuCard icon="⭐" title="기록 관리" onPress={onReviewManagement} />
      <MenuCard icon="🔔" title="알림 설정" onPress={onNotificationSettings} />
    </View>
  </View>
);

// 메뉴 카드 컴포넌트
interface MenuCardProps {
  icon: string;
  title: string;
  onPress: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.menuCard} onPress={onPress}>
    <Text style={styles.menuIcon}>{icon}</Text>
    <Text style={styles.menuTitle}>{title}</Text>
  </TouchableOpacity>
);

// 통계 섹션 컴포넌트
const StatsSection: React.FC = () => (
  <View style={styles.statsSection}>
    <Text style={styles.statsTitle}>내 활동</Text>
    <View style={styles.statsContainer}>
      <Text style={styles.statVisits}>방문 47곳</Text>
      <Text style={styles.statSeparator}>•</Text>
      <Text style={styles.statFavorites}>찜 23곳</Text>
      <Text style={styles.statSeparator}>•</Text>
      <Text style={styles.statReviews}>리뷰 12개</Text>
    </View>
  </View>
);

// 설정 섹션 컴포넌트
interface SettingsSectionProps {
  onPrivacySettings: () => void;
  onInquiry: () => void;
  onTerms: () => void;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({
  onPrivacySettings,
  onInquiry,
  onTerms,
}) => (
  <View style={styles.settingsSection}>
    <SettingItem title="개인정보 설정" onPress={onPrivacySettings} />
    <SettingItem title="문의" onPress={onInquiry} />
    <SettingItem title="서비스 약관" onPress={onTerms} />
  </View>
);

// 설정 아이템 컴포넌트
const SettingItem: React.FC<SettingItemProps> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.settingItem} onPress={onPress}>
    <Text style={styles.settingText}>{title}</Text>
    <Text style={styles.settingArrow}></Text>
  </TouchableOpacity>
);

// 회원 탈퇴 섹션 컴포넌트
interface WithdrawSectionProps {
  onWithdraw: () => void;
}

const WithdrawSection: React.FC<WithdrawSectionProps> = ({ onWithdraw }) => (
  <View style={styles.withdrawSection}>
    <TouchableOpacity onPress={onWithdraw}>
      <Text style={styles.withdrawText}>회원 탈퇴</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  backButton: {
    padding: 5,
  },
  backIcon: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
    textAlign: 'center',
  },
  logoutButton: {
    padding: 5,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ff334d',
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    backgroundColor: '#b2cce5',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  profileIcon: {
    fontSize: 30,
    color: '#ffffff',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 8,
  },
  profileActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewIcon: {
    fontSize: 16,
    color: '#33b2e5',
    marginRight: 4,
  },
  reviewText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#808080',
  },
  editArrow: {
    fontSize: 20,
    fontWeight: '400',
    color: '#b3b3b3',
  },
  menuSection: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
  },
  menuGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuCard: {
    alignItems: 'center',
    flex: 1,
    padding: 15,
  },
  menuIcon: {
    fontSize: 28,
    color: '#33b2e5',
    marginBottom: 8,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
  },
  statsSection: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statVisits: {
    fontSize: 16,
    fontWeight: '600',
    color: '#33b2e5',
  },
  statFavorites: {
    fontSize: 16,
    fontWeight: '600',
    color: '#33b2e5',
  },
  statReviews: {
    fontSize: 16,
    fontWeight: '600',
    color: '#33b2e5',
  },
  statSeparator: {
    fontSize: 16,
    fontWeight: '500',
    color: '#808080',
    marginHorizontal: 8,
  },
  settingsSection: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  settingText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  settingArrow: {
    fontSize: 16,
    fontWeight: '400',
    color: '#b3b3b3',
  },
  withdrawSection: {
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 30,
  },
  withdrawText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
    textDecorationLine: 'underline',
  },
});