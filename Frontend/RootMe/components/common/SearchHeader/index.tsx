import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface SearchHeaderProps {
  placeholder?: string;
  onSearchPress?: () => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({
  placeholder = "음식점",
  onSearchPress
}) => (
  <View style={styles.container}>
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#666666"
      />
    </View>
    <TouchableOpacity style={styles.searchButton} onPress={onSearchPress}>
      <Text style={styles.searchText}>검색</Text>
    </TouchableOpacity>
  </View>
);

export default SearchHeader;
