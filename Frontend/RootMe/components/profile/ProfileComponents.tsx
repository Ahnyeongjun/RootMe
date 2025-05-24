import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { profileStyles } from '../../styles/profileStyles';

// 프로필 헤더 컴포넌트
interface ProfileHeaderProps {
  onBackPress: () => void;
  onLogout: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ onBackPress, onLogout }) => (
  <View style={profileStyles.header}>
    <TouchableOpacity onPress={onBackPress} style={profileStyles.backButton}>
      <Text style={profileStyles.backIcon}>←</Text>
    </TouchableOpacity>
    <Text style={profileStyles.headerTitle}>마이페이지</Text>
    <TouchableOpacity onPress={onLogout} style={profileStyles.logoutButton}>
      <Text style={profileStyles.logoutText}>로그아웃</Text>
    </TouchableOpacity>
  </View>
);

// 프로필 섹션 컴포넌트
interface ProfileSectionProps {
  onProfileEdit: () => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ onProfileEdit }) => (
  <View style={profileStyles.profileSection}>
    <View style={profileStyles.profileContainer}>
      <View style={profileStyles.profileImage}>
        <Text style={profileStyles.profileIcon}>👤</Text>
      </View>
      <View style={profileStyles.profileInfo}>
        <Text style={profileStyles.profileName}>who</Text>
        <View style={profileStyles.profileActions}>
          <Text style={profileStyles.reviewIcon}>💬</Text>
          <Text style={profileStyles.reviewText}>리뷰관리</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onProfileEdit}>
        <Text style={profileStyles.editArrow}></Text>
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

export const MainMenuSection: React.FC<MainMenuSectionProps> = ({
  onFavorites,
  onReviewManagement,
  onNotificationSettings,
}) => (
  <View style={profileStyles.menuSection}>
    <View style={profileStyles.menuGrid}>
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

export const MenuCard: React.FC<MenuCardProps> = ({ icon, title, onPress }) => (
  <TouchableOpacity style={profileStyles.menuCard} onPress={onPress}>
    <Text style={profileStyles.menuIcon}>{icon}</Text>
    <Text style={profileStyles.menuTitle}>{title}</Text>
  </TouchableOpacity>
);

// 통계 섹션 컴포넌트
export const StatsSection: React.FC = () => (
  <View style={profileStyles.statsSection}>
    <Text style={profileStyles.statsTitle}>내 활동</Text>
    <View style={profileStyles.statsContainer}>
      <Text style={profileStyles.statVisits}>방문 47곳</Text>
      <Text style={profileStyles.statSeparator}>•</Text>
      <Text style={profileStyles.statFavorites}>찜 23곳</Text>
      <Text style={profileStyles.statSeparator}>•</Text>
      <Text style={profileStyles.statReviews}>리뷰 12개</Text>
    </View>
  </View>
);

// 설정 섹션 컴포넌트
interface SettingsSectionProps {
  onPrivacySettings: () => void;
  onInquiry: () => void;
  onTerms: () => void;
}

export const SettingsSection: React.FC<SettingsSectionProps> = ({
  onPrivacySettings,
  onInquiry,
  onTerms,
}) => (
  <View style={profileStyles.settingsSection}>
    <SettingItem title="개인정보 설정" onPress={onPrivacySettings} />
    <SettingItem title="문의" onPress={onInquiry} />
    <SettingItem title="서비스 약관" onPress={onTerms} />
  </View>
);

// 설정 아이템 컴포넌트
interface SettingItemProps {
  title: string;
  onPress: () => void;
}

export const SettingItem: React.FC<SettingItemProps> = ({ title, onPress }) => (
  <TouchableOpacity style={profileStyles.settingItem} onPress={onPress}>
    <Text style={profileStyles.settingText}>{title}</Text>
    <Text style={profileStyles.settingArrow}></Text>
  </TouchableOpacity>
);

// 회원 탈퇴 섹션 컴포넌트
interface WithdrawSectionProps {
  onWithdraw: () => void;
}

export const WithdrawSection: React.FC<WithdrawSectionProps> = ({ onWithdraw }) => (
  <View style={profileStyles.withdrawSection}>
    <TouchableOpacity onPress={onWithdraw}>
      <Text style={profileStyles.withdrawText}>회원 탈퇴</Text>
    </TouchableOpacity>
  </View>
);
