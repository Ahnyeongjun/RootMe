import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';

// Restaurant List Component
interface RestaurantItem {
  id: string;
  name: string;
  distance: string;
  walkTime: string;
  emoji: string;
  color: string;
  isLive?: boolean;
}

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

export default RestaurantList;
