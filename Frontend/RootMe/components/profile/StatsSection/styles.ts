import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
});
