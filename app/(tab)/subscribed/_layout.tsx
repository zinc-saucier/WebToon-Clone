import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "My" }} />
      <Stack.Screen name="comics" options={{ title: "COMICS" }} />
    </Stack>
  );
}
