import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  heroSection: {
    backgroundColor: '#33b2e5',
    paddingVertical: 60,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: 50,
    color: '#33b2e5',
  },
  appName: {
    fontSize: 40,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 20,
  },
  tagline: {
    fontSize: 18,
    fontWeight: '400',
    color: '#ffffff',
    opacity: 0.9,
  },
});
