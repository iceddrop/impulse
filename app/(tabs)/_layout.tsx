import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
       screenOptions={{
    headerShown: false,
    tabBarLabel: () => null, // force-hide label
  }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "index" }}
      />
      <Tabs.Screen
        name="Login"
        options={{ title: "Login" }}
      />
    </Tabs>
  );
}