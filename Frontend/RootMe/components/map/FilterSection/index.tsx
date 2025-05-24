import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';

// Filter Section Component
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

export default FilterSection;
