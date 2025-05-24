import { useRouter } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

// 상태바 컴포넌트
export const StatusBarComponent: React.FC = () => (
  <View style={statusBarStyles.container}>
  </View>
);

const statusBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  time: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
  },
  status: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
});

// 검색 헤더 컴포넌트
interface SearchHeaderProps {
  placeholder?: string;
  onSearchPress?: () => void;
}

export const SearchHeader: React.FC<SearchHeaderProps> = ({
  placeholder = "음식점",
  onSearchPress
}) => (
  <View style={searchHeaderStyles.container}>
    <View style={searchHeaderStyles.searchBar}>
      <TextInput
        style={searchHeaderStyles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#666666"
      />
    </View>
    <TouchableOpacity style={searchHeaderStyles.searchButton} onPress={onSearchPress}>
      <Text style={searchHeaderStyles.searchText}>검색</Text>
    </TouchableOpacity>
  </View>
);

const searchHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#f7f7fa',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 40,
    justifyContent: 'center',
    marginRight: 10,
  },
  searchInput: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666666',
  },
  searchButton: {
    backgroundColor: '#3380e3',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 40,
    justifyContent: 'center',
  },
  searchText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
});

// 카테고리 탭 컴포넌트 (너비 수정됨)
interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryPress: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  selectedCategory,
  onCategoryPress,
}) => (
  <View style={categoryStyles.container}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            categoryStyles.categoryTab,
            selectedCategory === category
              ? categoryStyles.selectedCategoryTab
              : categoryStyles.unselectedCategoryTab,
          ]}
          onPress={() => onCategoryPress(category)}
        >
          <Text
            style={[
              categoryStyles.categoryText,
              selectedCategory === category
                ? categoryStyles.selectedCategoryText
                : categoryStyles.unselectedCategoryText,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const categoryStyles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  categoryTab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 18,
    marginRight: 8,
    height: 36,
    justifyContent: 'center',
    minWidth: 64, // 최소 너비 추가
  },
  selectedCategoryTab: {
    backgroundColor: 'rgba(51, 178, 229, 0.1)',
  },
  unselectedCategoryTab: {
    backgroundColor: '#f2f2f2',
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
  },
  selectedCategoryText: {
    fontWeight: '700',
    color: '#197fe5',
  },
  unselectedCategoryText: {
    fontWeight: '500',
    color: '#808080',
  },
});

// 음식 카드 컴포넌트
interface FoodItem {
  id: string;
  name: string;
  restaurant: string;
  rating: number;
  emoji: string;
  color: string;
}

interface FoodCardProps {
  food: FoodItem;
  onPress?: (food: FoodItem) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ food, onPress }) => (
  <TouchableOpacity
    style={foodCardStyles.container}
    onPress={() => onPress?.(food)}
  >
    <View style={[foodCardStyles.image, { backgroundColor: food.color }]}>
      <Text style={foodCardStyles.emoji}>{food.emoji}</Text>
    </View>
    <Text style={foodCardStyles.name}>{food.name}</Text>
    <Text style={foodCardStyles.restaurant}>{food.restaurant}</Text>
    <Text style={foodCardStyles.rating}>★★★★☆ {food.rating}</Text>
  </TouchableOpacity>
);

const foodCardStyles = StyleSheet.create({
  container: {
    width: 150,
    marginRight: 15,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  emoji: {
    fontSize: 24,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  restaurant: {
    fontSize: 12,
    fontWeight: '400',
    color: '#999999',
    marginBottom: 4,
  },
  rating: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffb21a',
  },
});

// 레스토랑 리스트 아이템 컴포넌트
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

interface RestaurantListItemProps {
  restaurant: RestaurantItem;
  onPress?: (restaurant: RestaurantItem) => void;
}

export const RestaurantListItem: React.FC<RestaurantListItemProps> = ({
  restaurant,
  onPress
}) => (
  <TouchableOpacity
    style={restaurantStyles.container}
    onPress={() => onPress?.(restaurant)}
  >
    <View style={[restaurantStyles.image, { backgroundColor: restaurant.color }]}>
      <Text style={restaurantStyles.emoji}>{restaurant.emoji}</Text>
    </View>
    <View style={restaurantStyles.info}>
      <View style={restaurantStyles.header}>
        <Text style={restaurantStyles.name}>{restaurant.name}</Text>
        {restaurant.isLive && (
          <Text style={restaurantStyles.liveText}>• 실시간</Text>
        )}
      </View>
      <Text style={restaurantStyles.categoryDistance}>
        {restaurant.category} · {restaurant.distance}
      </Text>
      <Text style={restaurantStyles.rating}>
        ★★★★☆ {restaurant.rating} · 리뷰 {restaurant.reviews}개
      </Text>
    </View>
  </TouchableOpacity>
);

const restaurantStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(229, 229, 229, 0.1)',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  emoji: {
    fontSize: 28,
  },
  info: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  liveText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ff334d',
    marginLeft: 8,
  },
  categoryDistance: {
    fontSize: 12,
    fontWeight: '500',
    color: '#999999',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffb21a',
  },
});

// 하단 탭 바 컴포넌트
interface TabBarProps {
  selectedTab: string;
}

export const TabBar: React.FC<TabBarProps> = ({ selectedTab }) => {
  const router = useRouter();
  const handleTabPress = (tab: string) => {
    switch (tab) {
      case '홈':
        router.push('/home');
        break;
      case '지도':
        router.push('/map');
        break;
      case '마이':
        router.push('/profile');
        break;
      default:
        break;
    }
  };
  const tabs = [
    { key: '홈', label: '홈' },
    { key: '지도', label: '지도' },
    { key: '공유', label: '공유' },
    { key: '기록', label: '기록' },
    { key: '마이', label: '마이' },
  ];

  return (
    <View style={tabBarStyles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={tabBarStyles.tab}
          onPress={() => handleTabPress(tab.key)}
        >
          <View
            style={[
              tabBarStyles.tabIcon,
              selectedTab === tab.key && tabBarStyles.activeTabIcon
            ]}
          />
          <Text
            style={[
              tabBarStyles.tabText,
              selectedTab === tab.key && tabBarStyles.activeTabText
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const tabBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
    paddingVertical: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#808080',
    marginBottom: 5,
  },
  activeTabIcon: {
    backgroundColor: '#197fe5',
  },
  tabText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#808080',
  },
  activeTabText: {
    fontWeight: '700',
    color: '#33b2e5',
  },
});

// MainLayoutWithTabs export
export { MainLayoutWithTabs } from './MainLayoutWithTabs';