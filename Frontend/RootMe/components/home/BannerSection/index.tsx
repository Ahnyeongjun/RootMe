import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const BannerSection: React.FC = () => (
  <View style={styles.bannerContainer}>
    <View style={styles.banner}>
      <Text style={styles.bannerTitle}>AI가 추천하는 주변 맛집 🤖</Text>
      <Text style={styles.bannerSubtitle}>실시간 맛집 인증 알림으로 더 신선한 정보를!</Text>
    </View>
  </View>
);

export default BannerSection;
