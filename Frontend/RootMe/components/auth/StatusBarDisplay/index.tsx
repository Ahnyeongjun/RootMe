import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const StatusBarDisplay: React.FC = () => (
  <View style={styles.statusBar}>
    <Text style={styles.time}>8:48</Text>
    <Text style={styles.status}>●●● LTE 60%</Text>
  </View>
);

export default StatusBarDisplay;
