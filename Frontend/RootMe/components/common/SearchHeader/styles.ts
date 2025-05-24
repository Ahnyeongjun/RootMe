import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#f7f7fa',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 40,
    justifyContent: 'center',
    marginRight: 10,
  },
  searchInput: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666666',
  },
  searchButton: {
    backgroundColor: '#3380e3',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 40,
    justifyContent: 'center',
  },
  searchText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
});
