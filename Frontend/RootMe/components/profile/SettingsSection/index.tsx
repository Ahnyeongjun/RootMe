import React from 'react';
import { View } from 'react-native';
import SettingItem from '../SettingItem';
import { styles } from './styles';

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

export default SettingsSection;
