import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryPress: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  selectedCategory,
  onCategoryPress,
}) => (
  <View style={styles.container}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.categoryTab,
            selectedCategory === category
              ? styles.selectedCategoryTab
              : styles.unselectedCategoryTab,
          ]}
          onPress={() => onCategoryPress(category)}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === category
                ? styles.selectedCategoryText
                : styles.unselectedCategoryText,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

export default CategoryTabs;
