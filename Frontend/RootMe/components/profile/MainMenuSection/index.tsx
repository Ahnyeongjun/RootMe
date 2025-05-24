import React from 'react';
import { View } from 'react-native';
import MenuCard from '../MenuCard';
import { styles } from './styles';

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

export default MainMenuSection;
