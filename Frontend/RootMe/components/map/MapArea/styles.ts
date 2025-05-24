import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    backgroundColor: '#e8faff',
  },
  mapArea: {
    flex: 1,
    position: 'relative',
  },
  refreshButton: {
    position: 'absolute',
    top: 20,
    left: '50%',
    marginLeft: -80,
    backgroundColor: '#4080e3',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    zIndex: 10,
  },
  refreshText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  marker: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userMarker: {
    width: 30,
    height: 30,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#3380e3',
  },
  userDot: {
    width: 16,
    height: 16,
    backgroundColor: '#3380e3',
    borderRadius: 8,
  },
  restaurantMarker: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  markerIcon: {
    fontSize: 12,
    color: '#ffffff',
  },
});
