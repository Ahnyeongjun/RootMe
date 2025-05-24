import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FoodCard, RestaurantListItem } from '../common';
import { homeStyles } from '../../styles/homeStyles';

// Banner Section Component
export const BannerSection: React.FC = () => (
  <View style={homeStyles.bannerContainer}>
    <View style={homeStyles.banner}>
      <Text style={homeStyles.bannerTitle}>AI가 추천하는 주변 맛집 🤖</Text>
      <Text style={homeStyles.bannerSubtitle}>실시간 맛집 인증 알림으로 더 신선한 정보를!</Text>
    </View>
  </View>
);

// Recommended Section Component
interface FoodItem {
  id: string;
  name: string;
  restaurant: string;
  rating: number;
  emoji: string;
  color: string;
}

interface RecommendedSectionProps {
  foods: FoodItem[];
  onMapPress: () => void;
}

export const RecommendedSection: React.FC<RecommendedSectionProps> = ({ foods, onMapPress }) => (
  <View style={homeStyles.sectionContainer}>
    <View style={homeStyles.sectionHeader}>
      <Text style={homeStyles.sectionTitle}>오늘의 추천</Text>
      <TouchableOpacity>
        <Text style={homeStyles.moreText}>더보기</Text>
      </TouchableOpacity>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={homeStyles.foodScrollView}>
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </ScrollView>
  </View>
);

// Nearby Restaurants Section Component
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

interface NearbyRestaurantsSectionProps {
  restaurants: RestaurantItem[];
  onMapPress: () => void;
  onRestaurantPress: (restaurant: RestaurantItem) => void;
}

export const NearbyRestaurantsSection: React.FC<NearbyRestaurantsSectionProps> = ({
  restaurants,
  onMapPress,
  onRestaurantPress
}) => (
  <View style={homeStyles.sectionContainer}>
    <View style={homeStyles.sectionHeader}>
      <Text style={homeStyles.sectionTitle}>주변 맛집</Text>
      <TouchableOpacity onPress={onMapPress}>
        <Text style={homeStyles.moreText}>지도로 보기</Text>
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
