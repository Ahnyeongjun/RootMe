import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface WithdrawSectionProps {
  onWithdraw: () => void;
}

const WithdrawSection: React.FC<WithdrawSectionProps> = ({ onWithdraw }) => (
  <View style={styles.withdrawSection}>
    <TouchableOpacity onPress={onWithdraw}>
      <Text style={styles.withdrawText}>회원 탈퇴</Text>
    </TouchableOpacity>
  </View>
);

export default WithdrawSection;
