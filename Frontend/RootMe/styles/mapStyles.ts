import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
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
  bottomSheet: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 10,
    maxHeight: height * 0.5,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#e6e6e6',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 10,
  },
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
