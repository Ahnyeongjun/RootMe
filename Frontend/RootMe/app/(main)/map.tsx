import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBarComponent, SearchHeader, CategoryTabs } from '../../components/common';

const { width, height } = Dimensions.get('window');

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

  const handleBackPress = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <StatusBarComponent />
      <SearchHeader onClosePress={handleBackPress} />

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
    </SafeAreaView>
  );
}

// 지도 영역 컴포넌트
interface MapAreaProps {
  markers: MarkerData[];
}

const MapArea: React.FC<MapAreaProps> = ({ markers }) => (
  <View style={styles.mapContainer}>
    <View style={styles.mapArea}>
      {/* 새로고침 버튼 */}
      <TouchableOpacity style={styles.refreshButton}>
        <Text style={styles.refreshText}>🔄 이 지역 검색하기</Text>
      </TouchableOpacity>

      {/* 마커들 */}
      {markers.map((marker) => (
        <View
          key={marker.id}
          style={[
            styles.marker,
            {
              left: marker.x,
              top: marker.y,
            },
            marker.type === 'user' ? styles.userMarker : styles.restaurantMarker,
            marker.color && { backgroundColor: marker.color },
          ]}
        >
          {marker.type === 'user' ? (
            <View style={styles.userDot} />
          ) : (
            <Text style={styles.markerIcon}>🍽</Text>
          )}
        </View>
      ))}
    </View>
  </View>
);

// 하단 시트 컴포넌트
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

// 필터 섹션 컴포넌트
interface FilterSectionProps {
  filters: string[];
  selectedFilter: string;
  onFilterPress: (filter: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  filters,
  selectedFilter,
  onFilterPress,
}) => (
  <View style={styles.filterSection}>
    <View style={styles.filterHeader}>
      <Text style={styles.filterTitle}>필터</Text>
      <View style={styles.countBadge}>
        <Text style={styles.countText}>총 3개 음식점</Text>
      </View>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScrollView}>
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          style={[
            styles.filterButton,
            selectedFilter === filter ? styles.selectedFilterButton : styles.unselectedFilterButton,
          ]}
          onPress={() => onFilterPress(filter)}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedFilter === filter ? styles.selectedFilterText : styles.unselectedFilterText,
            ]}
          >
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

// 레스토랑 리스트 컴포넌트
interface RestaurantListProps {
  restaurants: RestaurantItem[];
  onRestaurantPress: (restaurantId: string) => void;
}

const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurants,
  onRestaurantPress,
}) => (
  <ScrollView style={styles.restaurantList} showsVerticalScrollIndicator={false}>
    {restaurants.map((restaurant, index) => (
      <View key={restaurant.id}>
        <TouchableOpacity
          style={styles.restaurantItem}
          onPress={() => onRestaurantPress(restaurant.id)}
        >
          <View style={[styles.restaurantImage, { backgroundColor: restaurant.color }]}>
            <Text style={styles.restaurantEmoji}>{restaurant.emoji}</Text>
          </View>
          <View style={styles.restaurantInfo}>
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <View style={styles.restaurantDetails}>
              <Text style={styles.distance}>{restaurant.distance}</Text>
              <Text style={styles.walkTime}>• {restaurant.walkTime}</Text>
              {restaurant.isLive && (
                <>
                  <View style={styles.liveDot} />
                  <Text style={styles.liveText}>실시간</Text>
                </>
              )}
            </View>
          </View>
        </TouchableOpacity>
        {index < restaurants.length - 1 && <View style={styles.separator} />}
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#e8faff',
  },
  mapArea: {
    flex: 1,
    position: 'relative',
  },
  refreshButton: {
    position: 'absolute',
    top: 20,
    left: '50%',
    marginLeft: -80,
    backgroundColor: '#4080e3',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    zIndex: 10,
  },
  refreshText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  marker: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userMarker: {
    width: 30,
    height: 30,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#3380e3',
  },
  userDot: {
    width: 16,
    height: 16,
    backgroundColor: '#3380e3',
    borderRadius: 8,
  },
  restaurantMarker: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  markerIcon: {
    fontSize: 12,
    color: '#ffffff',
  },
  bottomSheet: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 10,
    maxHeight: height * 0.5,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#e6e6e6',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 10,
  },
  filterSection: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
  },
  countBadge: {
    backgroundColor: 'rgba(229, 229, 229, 0.1)',
    borderRadius: 9,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  countText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#808080',
  },
  filterScrollView: {
    flexDirection: 'row',
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 12,
    marginRight: 10,
    height: 36,
    justifyContent: 'center',
  },
  selectedFilterButton: {
    backgroundColor: '#3380e3',
  },
  unselectedFilterButton: {
    backgroundColor: '#f2f2f2',
  },
  filterButtonText: {
    fontSize: 12,
    textAlign: 'center',
  },
  selectedFilterText: {
    fontWeight: '600',
    color: '#ffffff',
  },
  unselectedFilterText: {
    fontWeight: '500',
    color: '#666666',
  },
  restaurantList: {
    paddingHorizontal: 15,
  },
  restaurantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  restaurantImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  restaurantEmoji: {
    fontSize: 20,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  restaurantDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    fontSize: 12,
    fontWeight: '500',
    color: '#3380e3',
  },
  walkTime: {
    fontSize: 12,
    fontWeight: '500',
    color: '#754aa3',
    marginLeft: 4,
  },
  liveDot: {
    width: 6,
    height: 6,
    backgroundColor: '#ff334d',
    borderRadius: 3,
    marginLeft: 8,
  },
  liveText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ff334d',
    marginLeft: 4,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(229, 229, 229, 0.1)',
    marginLeft: 65,
  },
});