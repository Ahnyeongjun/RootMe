import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  profileSection: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    backgroundColor: '#b2cce5',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  profileIcon: {
    fontSize: 30,
    color: '#ffffff',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 8,
  },
  profileActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewIcon: {
    fontSize: 16,
    color: '#33b2e5',
    marginRight: 4,
  },
  reviewText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#808080',
  },
  editArrow: {
    fontSize: 20,
    fontWeight: '400',
    color: '#b3b3b3',
  },
});
