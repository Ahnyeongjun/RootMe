import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  backButton: {
    padding: 5,
  },
  backIcon: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
    textAlign: 'center',
  },
  logoutButton: {
    padding: 5,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ff334d',
  },
});
