import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: 'Home' }}
      />
      <Stack.Screen
        name="test/index"
        options={{ headerTitle: 'Test' }}
      />
    </Stack>
  );
}
