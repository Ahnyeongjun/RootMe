import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const HeroSection: React.FC = () => (
  <View style={styles.heroSection}>
    {/* 로고 */}
    <View style={styles.logoContainer}>
      <View style={styles.logo}>
        <Text style={styles.logoIcon}>🍽️</Text>
      </View>
    </View>

    {/* 앱 이름 */}
    <Text style={styles.appName}>RootMe</Text>

    {/* 태그라인 */}
    <Text style={styles.tagline}>AI가 추천하는 맛집 탐색</Text>
  </View>
);

export default HeroSection;
