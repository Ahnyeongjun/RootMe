import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
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
  scrollView: {
    flex: 1,
  },
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
  menuSection: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
  },
  menuGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuCard: {
    alignItems: 'center',
    flex: 1,
    padding: 15,
  },
  menuIcon: {
    fontSize: 28,
    color: '#33b2e5',
    marginBottom: 8,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
  },
  statsSection: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statVisits: {
    fontSize: 16,
    fontWeight: '600',
    color: '#33b2e5',
  },
  statFavorites: {
    fontSize: 16,
    fontWeight: '600',
    color: '#33b2e5',
  },
  statReviews: {
    fontSize: 16,
    fontWeight: '600',
    color: '#33b2e5',
  },
  statSeparator: {
    fontSize: 16,
    fontWeight: '500',
    color: '#808080',
    marginHorizontal: 8,
  },
  settingsSection: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  settingText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  settingArrow: {
    fontSize: 16,
    fontWeight: '400',
    color: '#b3b3b3',
  },
  withdrawSection: {
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 30,
  },
  withdrawText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
    textDecorationLine: 'underline',
  },
});
