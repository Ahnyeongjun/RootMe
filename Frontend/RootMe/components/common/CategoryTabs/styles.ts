import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  categoryTab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 18,
    marginRight: 8,
    height: 36,
    justifyContent: 'center',
    minWidth: 64, // 최소 너비 추가
  },
  selectedCategoryTab: {
    backgroundColor: 'rgba(51, 178, 229, 0.1)',
  },
  unselectedCategoryTab: {
    backgroundColor: '#f2f2f2',
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
  },
  selectedCategoryText: {
    fontWeight: '700',
    color: '#197fe5',
  },
  unselectedCategoryText: {
    fontWeight: '500',
    color: '#808080',
  },
});
