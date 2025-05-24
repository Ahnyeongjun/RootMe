import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  filterSection: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
  },
  countBadge: {
    backgroundColor: 'rgba(229, 229, 229, 0.1)',
    borderRadius: 9,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  countText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#808080',
  },
  filterScrollView: {
    flexDirection: 'row',
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 12,
    marginRight: 10,
    height: 36,
    justifyContent: 'center',
  },
  selectedFilterButton: {
    backgroundColor: '#3380e3',
  },
  unselectedFilterButton: {
    backgroundColor: '#f2f2f2',
  },
  filterButtonText: {
    fontSize: 12,
    textAlign: 'center',
  },
  selectedFilterText: {
    fontWeight: '600',
    color: '#ffffff',
  },
  unselectedFilterText: {
    fontWeight: '500',
    color: '#666666',
  },
});
