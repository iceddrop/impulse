import Entypo from "@expo/vector-icons/Entypo";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import {
  Dimensions,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";

const LoginScreen = () => {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });
  return (
    <View style={[tw`px-4 bg-gray-900`, { height: screenHeight }]}>
      <View
        style={tw`bg-gray-100 h-8 w-8 flex mt-10 items-center justify-center rounded-full`}
      >
        <Entypo
          onPress={() => router.push("/")}
          name="chevron-left"
          size={24}
          color="gray"
        />
      </View>
      <Text
        style={[tw`text-2xl pt-4 text-white`, { fontFamily: "PoppinsRegular" }]}
      >
        Login with your number
      </Text>
      <Text style={[tw`text-gray-400 pt-2`, { fontFamily: "PoppinsRegular" }]}>
        Enter the number and pin used to sign up on Impulse
      </Text>

      <Text style={[tw`text-white pt-2`, { fontFamily: "PoppinsRegular" }]}>
        Phone number
      </Text>
      <TextInput
        placeholder="090000000"
        placeholderTextColor="white"
        style={[
          tw` h-12 rounded-md px-4 mb-4 text-white bg-gray-800 mt-3 mb-2`,
        ]}
      />
      <Text style={[tw`text-white pt-2`, { fontFamily: "PoppinsRegular" }]}>
        Pin
      </Text>
      <TextInput
        placeholder="******"
        placeholderTextColor="white"
        style={[tw` h-12 rounded-md px-4 mb-4 text-white bg-gray-800 my-2`]}
      />
      <TouchableOpacity
        onPress={() => router.push("/Dashboard")}
        style={tw`bg-green-500 mt-4 h-12 rounded-md items-center justify-center`}
      >
        <Text style={[tw`text-white text-lg`, { fontFamily: "PoppinsRegular" }]}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const { height: screenHeight } = Dimensions.get("window");

export default LoginScreen;
