import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

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

export default MenuCard;
