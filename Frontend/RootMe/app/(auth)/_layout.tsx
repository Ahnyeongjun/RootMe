import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: '로그인',
        }}
      />
    </Stack>
  );
}