import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface SettingItemProps {
  title: string;
  onPress: () => void;
}

const SettingItem: React.FC<SettingItemProps> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.settingItem} onPress={onPress}>
    <Text style={styles.settingText}>{title}</Text>
    <Text style={styles.settingArrow}></Text>
  </TouchableOpacity>
);

export default SettingItem;
