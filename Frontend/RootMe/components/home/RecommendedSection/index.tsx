import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FoodCard } from '../../../components/common';
import { styles } from './styles';

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

export default RecommendedSection;
