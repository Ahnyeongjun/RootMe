import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const StatsSection: React.FC = () => (
  <View style={styles.statsSection}>
    <Text style={styles.statsTitle}>내 활동</Text>
    <View style={styles.statsContainer}>
      <Text style={styles.statVisits}>방문 47곳</Text>
      <Text style={styles.statSeparator}>•</Text>
      <Text style={styles.statFavorites}>찜 23곳</Text>
      <Text style={styles.statSeparator}>•</Text>
      <Text style={styles.statReviews}>리뷰 12개</Text>
    </View>
  </View>
);

export default StatsSection;
