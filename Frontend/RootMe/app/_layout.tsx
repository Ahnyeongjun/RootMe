import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AppProvider } from '../contexts/AppContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: '스플래시',
            }}
          />
          <Stack.Screen
            name="(auth)"
            options={{
              title: '인증',
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name="(main)"
            options={{
              title: '메인',
            }}
          />
        </Stack>
      </AppProvider>
    </SafeAreaProvider>
  );
}