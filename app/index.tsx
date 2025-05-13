import {
  Image,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import InitScreen from "@/screens/InitScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function index() {
  return (
    <SafeAreaProvider>
      <InitScreen />
    </SafeAreaProvider>
  );
}
