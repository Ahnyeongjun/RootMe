import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { mapStyles } from '../../styles/mapStyles';

// Map Area Component
interface MarkerData {
  id: string;
  x: number;
  y: number;
  type: 'user' | 'restaurant';
  color?: string;
}

interface MapAreaProps {
  markers: MarkerData[];
}

export const MapArea: React.FC<MapAreaProps> = ({ markers }) => (
  <View style={mapStyles.mapContainer}>
    <View style={mapStyles.mapArea}>
      {/* 새로고침 버튼 */}
      <TouchableOpacity style={mapStyles.refreshButton}>
        <Text style={mapStyles.refreshText}>🔄 이 지역 검색하기</Text>
      </TouchableOpacity>

      {/* 마커들 */}
      {markers.map((marker) => (
        <View
          key={marker.id}
          style={[
            mapStyles.marker,
            {
              left: marker.x,
              top: marker.y,
            },
            marker.type === 'user' ? mapStyles.userMarker : mapStyles.restaurantMarker,
            marker.color && { backgroundColor: marker.color },
          ]}
        >
          {marker.type === 'user' ? (
            <View style={mapStyles.userDot} />
          ) : (
            <Text style={mapStyles.markerIcon}>🍽</Text>
          )}
        </View>
      ))}
    </View>
  </View>
);

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

export const BottomSheet: React.FC<BottomSheetProps> = ({
  filters,
  selectedFilter,
  onFilterPress,
  restaurants,
  onRestaurantPress,
}) => (
  <View style={mapStyles.bottomSheet}>
    {/* 핸들 */}
    <View style={mapStyles.handle} />

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

// Filter Section Component
interface FilterSectionProps {
  filters: string[];
  selectedFilter: string;
  onFilterPress: (filter: string) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  filters,
  selectedFilter,
  onFilterPress,
}) => (
  <View style={mapStyles.filterSection}>
    <View style={mapStyles.filterHeader}>
      <Text style={mapStyles.filterTitle}>필터</Text>
      <View style={mapStyles.countBadge}>
        <Text style={mapStyles.countText}>총 3개 음식점</Text>
      </View>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={mapStyles.filterScrollView}>
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          style={[
            mapStyles.filterButton,
            selectedFilter === filter ? mapStyles.selectedFilterButton : mapStyles.unselectedFilterButton,
          ]}
          onPress={() => onFilterPress(filter)}
        >
          <Text
            style={[
              mapStyles.filterButtonText,
              selectedFilter === filter ? mapStyles.selectedFilterText : mapStyles.unselectedFilterText,
            ]}
          >
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

// Restaurant List Component
interface RestaurantListProps {
  restaurants: RestaurantItem[];
  onRestaurantPress: (restaurantId: string) => void;
}

export const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurants,
  onRestaurantPress,
}) => (
  <ScrollView style={mapStyles.restaurantList} showsVerticalScrollIndicator={false}>
    {restaurants.map((restaurant, index) => (
      <View key={restaurant.id}>
        <TouchableOpacity
          style={mapStyles.restaurantItem}
          onPress={() => onRestaurantPress(restaurant.id)}
        >
          <View style={[mapStyles.restaurantImage, { backgroundColor: restaurant.color }]}>
            <Text style={mapStyles.restaurantEmoji}>{restaurant.emoji}</Text>
          </View>
          <View style={mapStyles.restaurantInfo}>
            <Text style={mapStyles.restaurantName}>{restaurant.name}</Text>
            <View style={mapStyles.restaurantDetails}>
              <Text style={mapStyles.distance}>{restaurant.distance}</Text>
              <Text style={mapStyles.walkTime}>• {restaurant.walkTime}</Text>
              {restaurant.isLive && (
                <>
                  <View style={mapStyles.liveDot} />
                  <Text style={mapStyles.liveText}>실시간</Text>
                </>
              )}
            </View>
          </View>
        </TouchableOpacity>
        {index < restaurants.length - 1 && <View style={mapStyles.separator} />}
      </View>
    ))}
  </ScrollView>
);
