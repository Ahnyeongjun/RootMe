import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Spacing, CommonStyles } from '@constants/styles';

export const splashStyles = StyleSheet.create({
  container: {
    ...CommonStyles.flexCenter,
    backgroundColor: Colors.primary,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: Spacing.xxxlarge,
  },
  logo: {
    fontSize: 80,
    marginBottom: Spacing.large,
  },
  appName: {
    fontSize: FontSizes.xxxlarge,
    fontWeight: '700',
    color: Colors.textWhite,
    marginBottom: Spacing.regular,
  },
  tagline: {
    fontSize: FontSizes.large,
    fontWeight: '400',
    color: Colors.textWhite,
    opacity: 0.9,
  },
  loader: {
    marginTop: Spacing.large,
  },
});
