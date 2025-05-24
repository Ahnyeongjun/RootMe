import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../../contexts/AppContext';
import {
  StatusBarComponent,
  SearchHeader,
  CategoryTabs,
  FoodCard,
  RestaurantListItem,
  TabBar
} from '../../components/common';

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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <StatusBarComponent />
      <SearchHeader onSearchPress={handleSearchPress} />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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

// 배너 섹션 컴포넌트
const BannerSection: React.FC = () => (
  <View style={styles.bannerContainer}>
    <View style={styles.banner}>
      <Text style={styles.bannerTitle}>AI가 추천하는 주변 맛집 🤖</Text>
      <Text style={styles.bannerSubtitle}>실시간 맛집 인증 알림으로 더 신선한 정보를!</Text>
    </View>
  </View>
);

// 추천 섹션 컴포넌트
interface RecommendedSectionProps {
  foods: FoodItem[];
  onMapPress: () => void;
}

const RecommendedSection: React.FC<RecommendedSectionProps> = ({ foods, onMapPress }) => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>오늘의 추천</Text>
      <TouchableOpacity>
        <Text style={styles.moreText}>더보기</Text>
      </TouchableOpacity>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.foodScrollView}>
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </ScrollView>
  </View>
);

// 주변 맛집 섹션 컴포넌트
interface NearbyRestaurantsSectionProps {
  restaurants: RestaurantItem[];
  onMapPress: () => void;
  onRestaurantPress: (restaurant: RestaurantItem) => void;
}

const NearbyRestaurantsSection: React.FC<NearbyRestaurantsSectionProps> = ({
  restaurants,
  onMapPress,
  onRestaurantPress
}) => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>주변 맛집</Text>
      <TouchableOpacity onPress={onMapPress}>
        <Text style={styles.moreText}>지도로 보기</Text>
      </TouchableOpacity>
    </View>

    {restaurants.map((restaurant) => (
      <RestaurantListItem
        key={restaurant.id}
        restaurant={restaurant}
        onPress={onRestaurantPress}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  bannerContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  banner: {
    backgroundColor: '#33b2e5',
    borderRadius: 16,
    padding: 20,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  bannerSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#197fe5',
  },
  moreText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#197fe5',
  },
  foodScrollView: {
    marginBottom: 10,
  },
});