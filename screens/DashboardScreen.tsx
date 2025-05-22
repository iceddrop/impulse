import { Text, View, Switch, Dimensions } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useTheme } from "../context/ThemeContext";

const DashboardScreen = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <View style={[darkMode ? tw`bg-gray-900` : tw`bg-white`, { height: screenHeight }]}>  
      <View style={tw`flex-row items-center justify-between px-4 py-2 mt-10`}>
        <Text style={darkMode ? tw`text-white text-lg` : tw`text-black text-lg`}>
          Hello User
        </Text>
        <Switch value={darkMode} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const {height: screenHeight} = Dimensions.get("window");

export default DashboardScreen;