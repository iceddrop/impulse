import { ThemeProvider } from "../context/ThemeContext";
import { Stack } from "expo-router";
import { AuthProvider } from "@/context/AuthContext";
export default function RootLayout() {
  return (
    <AuthProvider>
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}/>
    </ThemeProvider>
    </AuthProvider>
  );
}