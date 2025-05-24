import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

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

export default ProfileSection;
