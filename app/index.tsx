import InitScreen from "@/screens/InitScreen";
import { Stack } from "expo-router";
export default function index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <InitScreen />
    </>
  );
}
