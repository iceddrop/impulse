import {
  Text,
  View,
  Switch,
  Dimensions,
  ScrollView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { useTheme } from "../context/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CustomSwiper from "@/components/swiper/swiper";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from "react";

const DashboardScreen = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [showBalance, setShowBalance] = useState<any>(0);

  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  return (
    <ScrollView
      style={[
        darkMode ? tw`bg-gray-900` : tw`bg-white`,
        { height: screenHeight, width: screenWidth },
      ]}
    >
      <View
        style={[
          tw`flex-row items-center justify-between px-4 py-2 mt-10`,
          { width: screenWidth },
        ]}
      >
        <View style={tw``}>
          <Text
            style={[
              darkMode
                ? tw`text-white text-2xl font-extrabold`
                : tw`text-black text-2xl font-extrabold`,
              { fontFamily: "PoppinsRegular" },
            ]}
          >
            Hello Tomiwa
          </Text>
          <Text
            style={[
              darkMode ? tw`text-gray-400 text-md` : tw` text-black text-md`,
              { fontFamily: "PoppinsRegular" },
            ]}
          >
            Work like your rent is due{" "}
            <MaterialCommunityIcons
              name="arm-flex"
              size={24}
              color={darkMode ? "white" : "black"}
            />
          </Text>
        </View>
        <View
          style={
            darkMode
              ? tw`bg-gray-800 h-12 w-12 flex items-center justify-center rounded-full`
              : tw`bg-green-500 h-12 w-12 flex items-center justify-center rounded-full`
          }
        >
          <Ionicons name="person" size={24} color="white" />
        </View>
      </View>

      <View style={tw` mt-4`}>
        <CustomSwiper style={styles.container}>
          <View style={[tw`flex flex-col justify-between bg-green-500 h-60`]}>
            <View style={tw`flex flex-row justify-between px-2 py-3`}>
              <TouchableOpacity
                style={[
                  tw` py-3 rounded-3xl w-32 flex flex-row justify-center`,
                  { backgroundColor: "#FFD700" },
                ]}
              >
                <Fontisto
                  style={tw`pr-2`}
                  name="plus-a"
                  size={16}
                  color="black"
                />
                <Text style={[{ fontFamily: "PoppinsRegular" }]}>
                  Quick Save
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  tw` py-3 rounded-3xl w-32 flex flex-row items-center justify-center`,
                  { backgroundColor: "white" },
                ]}
              >
                <Text style={[tw`pr-1`, {fontFamily: "PoppinsRegular" }]}>
                  View Savings
                </Text>
                <FontAwesome name="long-arrow-right" size={16} color="black" />
              </TouchableOpacity>
            </View>
            <View style={tw`pl-3 pb-6`}>
              <Text
                style={[
                  darkMode ? tw`text-gray-800 text-sm` :
                  tw`text-white text-sm`,

                  { fontFamily: "PoppinsRegular" },
                ]}
              >
                My Savings
              </Text>
              <View style={tw`flex flex-row items-center`}>
                <Text style={darkMode ? tw`text-3xl font-bold` : tw`text-3xl text-white`}>${showBalance ? '****' : '0.00'}</Text>
                <MaterialCommunityIcons
                  name="eye"
                  size={30}
                  color={darkMode ? "black" : "white"}
                  style={tw`ml-2`}
                  onPress={() => setShowBalance(!showBalance)}
                />
              </View>
            </View>
          </View>
                  <View style={[tw`flex flex-col justify-between bg-green-500 h-60`]}>
            <View style={tw`flex flex-row justify-between px-2 py-3`}>
              <View
                style={[
                  tw` py-3 rounded-3xl w-40 flex flex-row justify-center bg-gray-900`,
                 
                ]}
              >
               
                <Text style={[tw`text-white`,{ fontFamily: "PoppinsRegular" }]}>
                  10% - 35% returns
                </Text>
              </View>

              <TouchableOpacity
                style={[
                  tw` py-3 rounded-3xl w-32 flex flex-row items-center justify-center`,
                  { backgroundColor: "white" },
                ]}
              >
                <Text style={[tw`pr-1`, {fontFamily: "PoppinsRegular" }]}>
                  View All
                </Text>
                <FontAwesome name="long-arrow-right" size={16} color="black" />
              </TouchableOpacity>
            </View>
            <View style={tw`pl-3 pb-6`}>
              <Text
                style={[
                  darkMode ? tw`text-gray-800 text-sm` :
                  tw`text-white text-sm`,

                  { fontFamily: "PoppinsRegular" },
                ]}
              >
                My Investments
              </Text>
              <View style={tw`flex flex-row items-center`}>
                <Text style={darkMode ? tw`text-3xl font-bold` : tw`text-3xl text-white`}>${showBalance ? '****' : '0.00'}</Text>
                <MaterialCommunityIcons
                  name="eye"
                  size={30}
                  color={darkMode ? "black" : "white"}
                  style={tw`ml-2`}
                  onPress={() => setShowBalance(!showBalance)}
                />
              </View>
            </View>
          </View>
        </CustomSwiper>
      </View>
    </ScrollView>
  );
};

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    height: 300, // Full screen height
    width: "100%",
  },
});
export default DashboardScreen;
