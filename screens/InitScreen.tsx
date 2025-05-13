import {
  Image,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import CustomSwiper from "@/components/swiper/swiper";
import { SafeAreaView } from "react-native-safe-area-context";
export default function InitScreen() {
  return (
    <View style={{ height: screenHeight }}>
      <CustomSwiper style={styles.container}>
        <View style={[styles.slide, { backgroundColor: "tomato" }]}>
          <View style={tw`flex items-center justify-center`}>
            <Image
              source={require("../assets/images/impulse.png")}
              style={tw`flex justify-center w-28 h-28`}
            />
          </View>
          <View style={tw`flex items-center justify-center`}>
            <Image
              source={require("../assets/images/save.png")}
              style={tw` w-full h-96`}
            />
          </View>
          <Text style={tw`text-black font-bold px-4 text-center text-2xl pt-2`}>
            Save money and control your impulsive spendings
          </Text>
          <View style={tw`pt-6 px-6`}>
            <TouchableOpacity
              style={tw`bg-white py-3 rounded-md w-44`}
              onPress={() => alert("Button Pressed")}
            >
              <Text style={tw`text-center text-lg`}>Create an account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-black py-3 rounded-md mt-4`}
              onPress={() => alert("Button Pressed")}
            >
              <Text style={tw`text-center text-white text-lg`}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.slide, { backgroundColor: "skyblue" }]}>
          <View style={tw`flex items-center justify-center`}>
            <Image
              source={require("../assets/images/impulse.png")}
              style={tw`flex justify-center w-28 h-28`}
            />
          </View>
          <View style={tw`items-center justify-center`}>
            <Image
              source={require("../assets/images/transact.png")}
              style={tw` w-full h-96`}
            />
          </View>
          <Text style={tw`text-black font-bold px-4 text-center text-2xl pt-2`}>
            Transfer and recieve funds on your impulse account
          </Text>
          <View style={tw`pt-6 px-6`}>
            <TouchableOpacity
              style={tw`bg-white py-3 rounded-md`}
              onPress={() => alert("Button Pressed")}
            >
              <Text style={tw`text-center text-lg w-44`}>Create an account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-black py-3 rounded-md mt-4`}
              onPress={() => alert("Button Pressed")}
            >
              <Text style={tw`text-center text-white text-lg`}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.slide, { backgroundColor: "limegreen" }]}>
          <View style={tw`flex items-center justify-center`}>
            <Image
              source={require("../assets/images/impulse.png")}
              style={tw`flex justify-center w-28 h-28`}
            />
          </View>
          <View style={tw`flex items-center justify-center`}>
            <Image
              source={require("../assets/images/investment.png")}
              style={tw` w-full h-96`}
            />
          </View>
          <Text style={tw`text-black font-bold px-4 text-center text-2xl pt-2`}>
            Watch your savings grow
          </Text>
          <View style={tw`pt-6 px-6`}>
            <TouchableOpacity
              style={tw`bg-white py-3 rounded-md`}
              onPress={() => alert("Button Pressed")}
            >
              <Text style={tw`text-center text-lg w-44`}>Create an account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-black py-3 rounded-md mt-4`}
              onPress={() => alert("Button Pressed")}
            >
              <Text style={tw`text-center text-white text-lg`}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomSwiper>
      {/* <SwiperFlatList autoplayDelay={6} autoplayLoop index={2} showPagination>
                <View style={[tw`flex bg-green-300`, { width,flex: 1 }]}>
                    <View style={tw`flex items-center justify-center`}>
                        <Image
                            source={require('../assets/images/impulse.png')}
                            style={tw`flex justify-center w-28 h-28`}
                        />
                    </View>
                    <View style={tw`flex items-center justify-center`}>
                        <Image
                            source={require('../assets/images/save.png')}
                            style={tw` w-full h-96`}
                        />
                    </View>
                    <Text style={tw`text-black font-bold px-4 text-center text-2xl pt-2`}>Save money and control your impulsive spendings</Text>
                    <View style={tw`pt-6 px-6`}>
                        <TouchableOpacity style={tw`bg-white py-3 rounded-md`} onPress={() => alert('Button Pressed')}>
                            <Text style={tw`text-center text-lg`}>Create an account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`bg-black py-3 rounded-md mt-4`} onPress={() => alert('Button Pressed')}>
                            <Text style={tw`text-center text-white text-lg`}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[tw` bg-green-300 w-full`, { width,flex: 1 }]}>
                    <View style={tw`flex items-center justify-center`}>
                        <Image
                            source={require('../assets/images/impulse.png')}
                            style={tw`flex justify-center w-28 h-28`}
                        />
                    </View>
                    <View style={tw`items-center justify-center`}>
                        <Image
                            source={require('../assets/images/transact.png')}
                            style={tw` w-full h-96`}
                        />
                    </View>
                    <Text style={tw`text-black font-bold px-4 text-center text-2xl pt-2`}>Transfer and recieve funds on your impulse account</Text>
                    <View style={tw`pt-6 px-6`}>
                        <TouchableOpacity style={tw`bg-white py-3 rounded-md`} onPress={() => alert('Button Pressed')}>
                            <Text style={tw`text-center text-lg`}>Create an account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`bg-black py-3 rounded-md mt-4`} onPress={() => alert('Button Pressed')}>
                            <Text style={tw`text-center text-white text-lg`}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[tw`bg-green-300 w-full`, { width,flex: 1 }]}>
                    <View style={tw`flex items-center justify-center`}>
                        <Image
                            source={require('../assets/images/impulse.png')}
                            style={tw`flex justify-center w-28 h-28`}
                        />
                    </View>
                    <View style={tw`flex items-center justify-center`}>
                        <Image
                            source={require('../assets/images/investment.png')}
                            style={tw` w-full h-96`}
                        />
                    </View>
                    <Text style={tw`text-black font-bold px-4 text-center text-2xl pt-2`}>Watch your savings grow</Text>
                    <View style={tw`pt-6 px-6`}>
                        <TouchableOpacity style={tw`bg-white py-3 rounded-md`} onPress={() => alert('Button Pressed')}>
                            <Text style={tw`text-center text-lg`}>Create an account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`bg-black py-3 rounded-md mt-4`} onPress={() => alert('Button Pressed')}>
                            <Text style={tw`text-center text-white text-lg`}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SwiperFlatList> */}
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
