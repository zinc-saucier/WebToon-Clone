import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "My", headerShown: false }}
      />
       <Stack.Screen
        name="comics"
        options={{ title: "COMICS", headerShown: false }}
      />
    </Stack>
  );
}
