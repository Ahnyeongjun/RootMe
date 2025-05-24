import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter, useSegments } from 'expo-router';
import { TabBar } from '../../components/common';

interface MainLayoutWithTabsProps {
  children: React.ReactNode;
}

export const MainLayoutWithTabs: React.FC<MainLayoutWithTabsProps> = ({ children }) => {
  const router = useRouter();
  const segments = useSegments();
  
  // 현재 활성 탭 결정
  const getCurrentTab = () => {
    const currentRoute = segments[segments.length - 1];
    
    switch (currentRoute) {
      case 'home':
        return '홈';
      case 'map':
        return '지도';
      case 'share':
        return '공유';
      case 'records':
        return '기록';
      case 'profile':
        return '마이';
      default:
        // 음식점 상세 등 다른 화면에서는 홈으로 표시
        if (segments.includes('restaurant')) return '홈';
        return '홈';
    }
  };

  const handleTabPress = (tab: string) => {
    switch (tab) {
      case '홈':
        router.push('/(main)/home');
        break;
      case '지도':
        router.push('/(main)/map');
        break;
      case '공유':
        router.push('/(main)/share');
        break;
      case '기록':
        router.push('/(main)/records');
        break;
      case '마이':
        router.push('/(main)/profile');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <TabBar 
        selectedTab={getCurrentTab()} 
        onTabPress={handleTabPress} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
  },
});