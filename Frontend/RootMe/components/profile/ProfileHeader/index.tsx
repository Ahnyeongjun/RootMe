import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

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

export default ProfileHeader;
