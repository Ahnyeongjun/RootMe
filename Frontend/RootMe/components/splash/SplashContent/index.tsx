import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';

const SplashContent: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🍽️</Text>
        <Text style={styles.appName}>RootMe</Text>
        <Text style={styles.tagline}>AI가 추천하는 맛집 탐색</Text>
      </View>
      <ActivityIndicator size="large" color="#fff" style={styles.loader} />
    </View>
  );
};

export default SplashContent;
