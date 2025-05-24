import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
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
