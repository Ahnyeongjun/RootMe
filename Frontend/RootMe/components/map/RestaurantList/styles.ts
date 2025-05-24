import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  restaurantList: {
    paddingHorizontal: 15,
  },
  restaurantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  restaurantImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  restaurantEmoji: {
    fontSize: 20,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  restaurantDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    fontSize: 12,
    fontWeight: '500',
    color: '#3380e3',
  },
  walkTime: {
    fontSize: 12,
    fontWeight: '500',
    color: '#754aa3',
    marginLeft: 4,
  },
  liveDot: {
    width: 6,
    height: 6,
    backgroundColor: '#ff334d',
    borderRadius: 3,
    marginLeft: 8,
  },
  liveText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ff334d',
    marginLeft: 4,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(229, 229, 229, 0.1)',
    marginLeft: 65,
  },
});
