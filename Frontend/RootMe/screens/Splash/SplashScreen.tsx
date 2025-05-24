import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useApp } from '../../contexts/AppContext';
import { SplashContent } from '../../components/splash';

export default function SplashScreen() {
  const router = useRouter();
  const { isLoading, isAuthenticated, checkAuthStatus } = useApp();

  useEffect(() => {
    const initializeApp = async () => {
      await checkAuthStatus();
      setTimeout(() => {
        router.replace(isAuthenticated ? '/(main)/home' : '/(auth)/login');
      }, 1000);
    };
    initializeApp();
  }, []);

  return <SplashContent />;
}
