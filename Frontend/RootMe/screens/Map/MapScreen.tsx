import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBarComponent, SearchHeader, CategoryTabs, TabBar } from '../../components/common';
import { MapArea, BottomSheet } from '../../components/map';
import { mapStyles } from '../../styles/mapStyles';

interface RestaurantItem {
  id: string;
  name: string;
  distance: string;
  walkTime: string;
  emoji: string;
  color: string;
  isLive?: boolean;
}

interface MarkerData {
  id: string;
  x: number;
  y: number;
  type: 'user' | 'restaurant';
  color?: string;
}

const categories = ['한식', '중식', '일식', '양식', '기타'];
const filters = ['거리순', '평점순', '리뷰순', '가격순'];

const restaurants: RestaurantItem[] = [
  { id: '1', name: '호우섬', distance: '250m', walkTime: '3분', emoji: '🥘', color: '#ff991a', isLive: true },
  { id: '2', name: '화니', distance: '180m', walkTime: '2분', emoji: '🍖', color: '#ff6b8c' },
  { id: '3', name: '경북궁잣포제주', distance: '320m', walkTime: '4분', emoji: '🍜', color: '#ffcc8c', isLive: true },
];

const markers: MarkerData[] = [
  { id: 'user', x: 187, y: 175, type: 'user' },
  { id: 'marker1', x: 120, y: 135, type: 'restaurant', color: '#ff6b8c' },
  { id: 'marker2', x: 280, y: 95, type: 'restaurant', color: '#ff6b8c' },
];

export default function MapScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('한식');
  const [selectedFilter, setSelectedFilter] = useState('거리순');

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  const handleFilterPress = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleRestaurantPress = (restaurantId: string) => {
    router.push(`/restaurant/${restaurantId}`);
  };

  const handleSearchPress = () => {
    console.log('검색 헤더 검색');
  };

  return (
    <SafeAreaView style={mapStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <StatusBarComponent />
      <SearchHeader onSearchPress={handleSearchPress} />

      <CategoryTabs
        categories={categories.slice(0, 2)}
        selectedCategory={selectedCategory}
        onCategoryPress={handleCategoryPress}
      />

      {/* 지도 영역 */}
      <MapArea markers={markers} />

      {/* 하단 리스트 영역 */}
      <BottomSheet
        filters={filters}
        selectedFilter={selectedFilter}
        onFilterPress={handleFilterPress}
        restaurants={restaurants}
        onRestaurantPress={handleRestaurantPress}
      />
      <TabBar selectedTab="지도" />
    </SafeAreaView>
  );
}
