import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../../contexts/AppContext';
import {
  StatusBarComponent,
  SearchHeader,
  CategoryTabs,
  TabBar
} from '../../components/common';
import { 
  BannerSection, 
  RecommendedSection, 
  NearbyRestaurantsSection 
} from '../../components/home';
import { homeStyles } from '../../styles/homeStyles';

interface FoodItem {
  id: string;
  name: string;
  restaurant: string;
  rating: number;
  emoji: string;
  color: string;
}

interface RestaurantItem {
  id: string;
  name: string;
  category: string;
  distance: string;
  rating: number;
  reviews: number;
  emoji: string;
  color: string;
  isLive?: boolean;
}

const categories = ['한식', '중식', '일식', '양식', '기타'];

const recommendedFoods: FoodItem[] = [
  { id: '1', name: '김치찌개', restaurant: '맛있는 찌개', rating: 4.5, emoji: '🍲', color: '#ff6699' },
  { id: '2', name: '된장찌개', restaurant: '엄마 손맛', rating: 4.8, emoji: '🥣', color: '#99cc66' },
  { id: '3', name: '된장찌개', restaurant: '엄마 손맛', rating: 4.8, emoji: '🍜', color: '#6699cc' },
];

const nearbyRestaurants: RestaurantItem[] = [
  { id: '1', name: '명가 한정식', category: '한식', distance: '350m', rating: 4.5, reviews: 120, emoji: '🍱', color: '#e5b266', isLive: true },
  { id: '2', name: '오미라면', category: '일식', distance: '420m', rating: 4.8, reviews: 85, emoji: '🍜', color: '#9980cc' },
  { id: '3', name: '맛있는 분식', category: '분식', distance: '180m', rating: 4.2, reviews: 155, emoji: '🥟', color: '#ffcc99' },
];

export default function HomeScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('한식');

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  const handleMapPress = () => {
    router.push('/map');
  };

  const handleRestaurantPress = (restaurant: RestaurantItem) => {
    router.push(`/restaurant/${restaurant.id}`);
  };

  const handleSearchPress = () => {
    console.log('검색 헤더 검색');
  };

  return (
    <SafeAreaView style={homeStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <StatusBarComponent />
      <SearchHeader onSearchPress={handleSearchPress} />

      <ScrollView style={homeStyles.scrollView} showsVerticalScrollIndicator={false}>
        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryPress={handleCategoryPress}
        />

        {/* 추천 섹션 */}
        <RecommendedSection
          foods={recommendedFoods}
          onMapPress={handleMapPress}
        />
        
        {/* 광고 배너 */}
        <BannerSection />

        {/* 주변 맛집 섹션 */}
        <NearbyRestaurantsSection
          restaurants={nearbyRestaurants}
          onMapPress={handleMapPress}
          onRestaurantPress={handleRestaurantPress}
        />
      </ScrollView>

      <TabBar selectedTab="홈" />
    </SafeAreaView>
  );
}
