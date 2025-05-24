import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RestaurantListItem } from '../../../components/common';
import { styles } from './styles';

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

export default NearbyRestaurantsSection;
