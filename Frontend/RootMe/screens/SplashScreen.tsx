import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '@contexts/AppContext';
import { styles } from './SplashScreen.styles';

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
}
