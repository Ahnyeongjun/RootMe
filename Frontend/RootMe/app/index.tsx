import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../contexts/AppContext';
import { Colors, FontSizes, Spacing } from '../constants/styles';

export default function IndexScreen() {
  const router = useRouter();
  const { isLoading, isAuthenticated, checkAuthStatus } = useApp();

  useEffect(() => {
    const initializeApp = async () => {
      await checkAuthStatus();
      
      // 1초 후 적절한 화면으로 이동 (스플래시 효과)
      setTimeout(() => {
        if (isAuthenticated) {
          router.replace('/(main)/home');
        } else {
          router.replace('/(auth)/login');
        }
      }, 1000);
    };

    initializeApp();
  }, [isAuthenticated, checkAuthStatus, router]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>🍽️</Text>
          <Text style={styles.appName}>RootMe</Text>
          <Text style={styles.tagline}>AI가 추천하는 맛집 탐색</Text>
        </View>
        <ActivityIndicator size="large" color={Colors.textWhite} style={styles.loader} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🍽️</Text>
        <Text style={styles.appName}>RootMe</Text>
        <Text style={styles.tagline}>AI가 추천하는 맛집 탐색</Text>
      </View>
      <ActivityIndicator size="large" color={Colors.textWhite} style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: Spacing.xxxlarge,
  },
  logo: {
    fontSize: 80,
    marginBottom: Spacing.large,
  },
  appName: {
    fontSize: FontSizes.xxxlarge,
    fontWeight: '700',
    color: Colors.textWhite,
    marginBottom: Spacing.regular,
  },
  tagline: {
    fontSize: FontSizes.large,
    fontWeight: '400',
    color: Colors.textWhite,
    opacity: 0.9,
  },
  loader: {
    marginTop: Spacing.large,
  },
});