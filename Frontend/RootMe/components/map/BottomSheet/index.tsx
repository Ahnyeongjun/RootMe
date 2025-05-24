import React from 'react';
import { View } from 'react-native';
import FilterSection from '../FilterSection';
import RestaurantList from '../RestaurantList';
import { styles } from './styles';

// Bottom Sheet Component
interface RestaurantItem {
  id: string;
  name: string;
  distance: string;
  walkTime: string;
  emoji: string;
  color: string;
  isLive?: boolean;
}

interface BottomSheetProps {
  filters: string[];
  selectedFilter: string;
  onFilterPress: (filter: string) => void;
  restaurants: RestaurantItem[];
  onRestaurantPress: (restaurantId: string) => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  filters,
  selectedFilter,
  onFilterPress,
  restaurants,
  onRestaurantPress,
}) => (
  <View style={styles.bottomSheet}>
    {/* 핸들 */}
    <View style={styles.handle} />

    {/* 필터 섹션 */}
    <FilterSection
      filters={filters}
      selectedFilter={selectedFilter}
      onFilterPress={onFilterPress}
    />

    {/* 음식점 리스트 */}
    <RestaurantList
      restaurants={restaurants}
      onRestaurantPress={onRestaurantPress}
    />
  </View>
);

export default BottomSheet;
