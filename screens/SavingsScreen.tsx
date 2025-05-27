import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import tw from "tailwind-react-native-classnames";
import { useFonts } from "expo-font";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const SavingsScreen = () => {

  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const { darkMode } = useTheme();

  const [showBalance, setShowBalance] = useState(false);
  return (
    <ScrollView style={[tw`pt-12 px-4`, {backgroundColor: darkMode ? "#1F2937" : "whitesmoke"}]}>
      <View style={tw`flex flex-row items-center justify-end w-full`}>
        <View style={tw`flex flex-row items-center justify-between w-2/3`}>
          <Text style={[darkMode ? tw` text-xl text-white` : tw`text-xl text-black`, { fontFamily: "PoppinsBold" }]}>My Savings</Text>
          <AntDesign name="infocirlceo" size={20} color="gray" />
        </View>
      </View>
      <View style={[tw`flex rounded-2xl flex-col justify-between bg-green-500 h-60 mt-6`]}>
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

          <View
            style={[
              tw` py-3 rounded-3xl w-40 flex flex-row justify-center bg-gray-900`,
            ]}
          >
            <Text
              style={[tw`text-white`, { fontFamily: "PoppinsRegular" }]}
            >
              10% - 35% returns
            </Text>
          </View>
        </View>
        <View style={tw`pl-3 pb-6`}>
          <Text
            style={[
              darkMode
                ? tw`text-gray-800 text-sm`
                : tw`text-white text-sm`,
              { fontFamily: "PoppinsRegular" },
            ]}
          >
            My Savings
          </Text>
          <View style={tw`flex flex-row items-center`}>
            <Text
              style={[
                darkMode
                  ? tw`text-3xl font-bold`
                  : tw`text-3xl text-white`,
                { fontFamily: "PoppinsBold" },
              ]}
            >
              {showBalance ? "****" : " ₦ 1,000,000"}
            </Text>
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
      <View style={tw`mt-6`}>
        <Text style={[tw`text-gray-400 py-2`,{fontFamily: "PoppinsRegular"}]}>Strict Savings Plans</Text>
        <View style={tw`flex-wrap flex-row justify-between mt-2`}>
          <View
            style={[tw`p-2 flex flex-col justify-between`, styles.card]}
          >
            <View style={tw`flex flex-row justify-end`}>
              <View style={tw`bg-green-800 px-4 py-1 rounded-3xl`}>
                <Text style={tw`text-white`}>SETUP</Text>
              </View>
            </View>
            <View>
              <Text
                style={[
                  tw`text-base font-extrabold text-green-800`,
                  { fontFamily: "PoppinsBold" },
                ]}
              >
                ImpulseBank
              </Text>
              <Text
                style={[
                  darkMode ? tw`text-xs py-1 text-white` : tw`text-black`,
                  { fontFamily: "PoppinsRegular" },
                ]}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, impedit!
              </Text>
            </View>
          </View>
          <View
            style={[tw`p-2 flex flex-col justify-between`, styles.card]}
          >
            <View style={tw`flex flex-row justify-end`}>
              <View style={tw`bg-green-800 px-4 py-1 rounded-3xl`}>
                <Text style={tw`text-white`}>SETUP</Text>
              </View>
            </View>
            <View>
              <Text
                style={[
                  tw`text-base font-extrabold text-green-800`,
                  { fontFamily: "PoppinsBold" },
                ]}
              >
                ImpulseBank
              </Text>
              <Text
                style={[
                  darkMode ? tw`text-xs py-1 text-white` : tw`text-black`,
                  { fontFamily: "PoppinsRegular" },
                ]}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, impedit!
              </Text>
            </View>
          </View>
          <View
            style={[tw`p-2 flex flex-col justify-between`, styles.card]}
          >
            <View style={tw`flex flex-row justify-end`}>
              <View style={tw`bg-green-800 px-4 py-1 rounded-3xl`}>
                <Text style={tw`text-white`}>SETUP</Text>
              </View>
            </View>
            <View>
              <Text
                style={[
                  tw`text-base font-extrabold text-green-800`,
                  { fontFamily: "PoppinsBold" },
                ]}
              >
                ImpulseBank
              </Text>
              <Text
                style={[
                  darkMode ? tw`text-xs py-1 text-white` : tw`text-black`,
                  { fontFamily: "PoppinsRegular" },
                ]}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, impedit!
              </Text>
            </View>
          </View>
          <View
            style={[tw`p-2 flex flex-col justify-between`, styles.card]}
          >
            <View style={tw`flex flex-row justify-end`}>
              <View style={tw`bg-green-800 px-4 py-1 rounded-3xl`}>
                <Text style={tw`text-white`}>SETUP</Text>
              </View>
            </View>
            <View>
              <Text
                style={[
                  tw`text-base font-extrabold text-green-800`,
                  { fontFamily: "PoppinsBold" },
                ]}
              >
                ImpulseBank
              </Text>
              <Text
                style={[
                  darkMode ? tw`text-xs py-1 text-white` : tw`text-black`,
                  { fontFamily: "PoppinsRegular" },
                ]}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, impedit!
              </Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(22, 101, 52, 0.1)",
    borderRadius: 16,
    height: 170,
    width: "48%",
    marginBottom: 14,
    elevation: 3,
    borderColor: "rgba(22, 101, 52, 1)",
    borderWidth: 1,
  }
});

export default SavingsScreen;