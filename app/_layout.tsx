import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="(Tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="trips/[id]" options={{ headerShown: false }} />
  </Stack>;
}
