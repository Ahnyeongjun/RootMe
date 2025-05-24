import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

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

const FoodCard: React.FC<FoodCardProps> = ({ food, onPress }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onPress?.(food)}
  >
    <View style={[styles.image, { backgroundColor: food.color }]}>
      <Text style={styles.emoji}>{food.emoji}</Text>
    </View>
    <Text style={styles.name}>{food.name}</Text>
    <Text style={styles.restaurant}>{food.restaurant}</Text>
    <Text style={styles.rating}>★★★★☆ {food.rating}</Text>
  </TouchableOpacity>
);

export default FoodCard;
