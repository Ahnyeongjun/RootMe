import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  time: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
  },
  status: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
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
  loginSection: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 40,
    minHeight: height * 0.5,
  },
  loginTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 20,
    lineHeight: 40,
  },
  loginDescription: {
    fontSize: 16,
    fontWeight: '400',
    color: '#808080',
    marginBottom: 60,
    lineHeight: 24,
  },
  kakaoButton: {
    backgroundColor: '#ffeb00',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  kakaoButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  additionalButtons: {
    alignItems: 'center',
    marginBottom: 40,
  },
  guestButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  guestButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#808080',
    textDecorationLine: 'underline',
  },
  termsContainer: {
    alignItems: 'center',
  },
  termsText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
    lineHeight: 18,
  },
  termsLink: {
    color: '#33b2e5',
    textDecorationLine: 'underline',
  },
});
