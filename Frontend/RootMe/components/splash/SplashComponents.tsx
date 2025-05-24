import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { splashStyles } from '../../styles/splashStyles';

export const SplashContent: React.FC = () => {
  return (
    <View style={splashStyles.container}>
      <View style={splashStyles.logoContainer}>
        <Text style={splashStyles.logo}>🍽️</Text>
        <Text style={splashStyles.appName}>RootMe</Text>
        <Text style={splashStyles.tagline}>AI가 추천하는 맛집 탐색</Text>
      </View>
      <ActivityIndicator size="large" color="#fff" style={splashStyles.loader} />
    </View>
  );
};
