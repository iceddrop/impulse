import { useTheme } from "@/context/ThemeContext";
import { Dimensions, Switch, View } from "react-native";
import { Text } from "react-native";
import tw from "tailwind-react-native-classnames";

const ProfileScreen = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <View style={[tw`flex-1 items-center justify-center`, darkMode ? tw`bg-gray-900` : tw`bg-white`]}>  
      <Text style={[darkMode ? tw`text-white` : tw`text-black`]}>Change the color theme</Text>
      <Switch value={darkMode} onValueChange={toggleTheme} style={tw`mt-4`} />
    </View>
  );
};

const {height: screenHeight, width: screenWidth} = Dimensions.get("window");

export default ProfileScreen;
