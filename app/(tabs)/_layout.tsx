import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from "../../context/ThemeContext";

export default function TabLayout() {
  const { darkMode } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: darkMode ? "#166534" : "#166534",
        tabBarInactiveTintColor: darkMode ? "#aaa" : "#888",
        tabBarStyle: {
          backgroundColor: darkMode ? "#1F2937" : "whitesmoke",
          height: 70,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="Dashboard"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Savings"
        options={{
          title: "Savings",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="savings" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}