import { StyleSheet, Dimensions } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  bannerContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  banner: {
    backgroundColor: '#33b2e5',
    borderRadius: 16,
    padding: 20,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  bannerSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#197fe5',
  },
  moreText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#197fe5',
  },
  foodScrollView: {
    marginBottom: 10,
  },
});
