import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 10,
    maxHeight: height * 0.5,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#e6e6e6',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
