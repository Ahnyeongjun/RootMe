import { Stack } from 'expo-router';

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Stack.Screen
        name="home"
        options={{
          title: '홈',
        }}
      />
      <Stack.Screen
        name="map"
        options={{
          title: '지도',
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: '프로필',
        }}
      />
      <Stack.Screen
        name="share"
        options={{
          title: '공유',
        }}
      />
      <Stack.Screen
        name="records"
        options={{
          title: '기록',
        }}
      />
      <Stack.Screen
        name="restaurant/[id]"
        options={{
          title: '음식점 정보',
        }}
      />
    </Stack>
  );
}