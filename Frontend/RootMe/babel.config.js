module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // React Native Reanimated plugin (if using animations)
      'react-native-reanimated/plugin',

      // Module resolver for path mapping
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './',
            '@screens': './screens',
            '@/components': './components',
            '@/types': './types',
            '@/utils': './utils',
            '@/constants': './constants',
            '@/contexts': './contexts',
            '@/hooks': './hooks',
          },
        },
      ],
    ],
  };
};