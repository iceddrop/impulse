import {
  Image,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import tw from "tailwind-react-native-classnames";
import CustomSwiper from "@/components/swiper/swiper";
import { useFonts } from "expo-font";
export default function InitScreen() {
    const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

    const router = useRouter();
  return (
    <View style={{ height: screenHeight }}>
      <CustomSwiper style={styles.container}>
        <View style={[styles.slide, tw`bg-green-300`]}>
          <View style={tw`flex items-center justify-center`}>
            <Image
              source={require("../assets/images/impulse.png")}
              style={tw`flex justify-center w-28 h-28`}
            />
          </View>
          <View style={tw`flex items-center justify-center`}>
            <Image
              source={require("../assets/images/save.png")}
              style={tw`h-96 w-96`}
            />
          </View>
          <Text style={[tw`text-black font-bold px-4 text-center text-2xl pt-2`, {fontFamily: "PoppinsBold"}]}>
            Save money and control your impulsive spendings
          </Text>
          <View style={tw`pt-6 px-6`}>
            <TouchableOpacity
              style={tw`bg-white py-3 rounded-md w-48`}
              onPress={() => router.push("/Signup")}
            >
              <Text style={[tw`text-center text-lg w-full`, {fontFamily: "PoppinsRegular"}]}>Create an account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-black py-3 rounded-md mt-4`}
              onPress={() => router.push("/Login")}
            >
              <Text style={[tw`text-center text-white text-lg`, {fontFamily: "PoppinsRegular"}]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.slide, tw`bg-green-300`]}>
          <View style={tw`flex items-center justify-center`}>
            <Image
              source={require("../assets/images/impulse.png")}
              style={tw`flex justify-center w-28 h-28`}
            />
          </View>
          <View style={tw`items-center justify-center`}>
            <Image
              source={require("../assets/images/transact.png")}
              style={tw`w-96 h-96`}
            />
          </View>
          <Text style={[tw`text-black font-bold px-4 text-center text-2xl pt-2`, {fontFamily: "PoppinsBold"}]}>
            Transfer and recieve funds on your impulse account
          </Text>
          <View style={tw`pt-6 px-6`}>
             <TouchableOpacity
              style={tw`bg-white py-3 rounded-md w-48`}
              onPress={() => router.push("/Signup")}
            >
              <Text style={[tw`text-center text-lg w-full`, {fontFamily: "PoppinsRegular"}]}>Create an account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-black py-3 rounded-md mt-4`}
              onPress={() => router.push("/Login")}
            >
              <Text style={[tw`text-center text-white text-lg`, {fontFamily: "PoppinsRegular"}]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.slide, tw`bg-green-300`]}>
          <View style={tw`flex items-center justify-center`}>
            <Image
              source={require("../assets/images/impulse.png")}
              style={tw`flex justify-center w-28 h-28`}
            />
          </View>
          <View style={tw`flex items-center justify-center`}>
            <Image
              source={require("../assets/images/investment.png")}
              style={tw` w-96 h-96`}
            />
          </View>
          <Text style={[tw`text-black font-bold px-4 text-center text-2xl pt-2`, {fontFamily: "PoppinsBold"}]}>
            Watch your funds grow
          </Text>
          <View style={tw`pt-6 px-6`}>
             <TouchableOpacity
              style={tw`bg-white py-3 rounded-md w-48`}
              onPress={() => router.push("/Signup")}
            >
              <Text style={[tw`text-center text-lg w-full`, {fontFamily: "PoppinsRegular"}]}>Create an account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-black py-3 rounded-md mt-4`}
               onPress={() => router.push("/Login")}
            >
              <Text style={[tw`text-center text-white text-lg`, {fontFamily: "PoppinsRegular"}]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomSwiper>
    </View>
  );
}

const { height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: screenHeight, // Full screen height
    width: "100%",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight,
  },
  text: {
    fontSize: 24,
    color: "#fff",
  },
});
