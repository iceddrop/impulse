import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { useTheme } from "../context/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CustomSwiper from "@/components/swiper/swiper";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import CustomSlider from "@/components/slider/slider";
import Entypo from "@expo/vector-icons/Entypo";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const DashboardScreen = () => {
  const { darkMode } = useTheme();
  const [showBalance, setShowBalance] = useState(false);

  const sampleData = [
    {
      plan: "ImpulseBank",
      goal: "SETUP",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      plan: "TightLock",
      goal: "HIDEMONEY",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      plan: "Target Savings",
      goal: "NEWGOAL",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ];

  const sampleDataTwo = [
    {
      plan: "ImpulseBank",
      goal: "SETUP",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      plan: "TightLock",
      goal: "HIDEMONEY",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      plan: "Target Savings",
      goal: "NEWGOAL",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      plan: "Target Savings",
      goal: "NEWGOAL",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      plan: "Target Savings",
      goal: "NEWGOAL",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      plan: "Target Savings",
      goal: "NEWGOAL",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      plan: "Target Savings",
      goal: "NEWGOAL",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ];

  const sampleDataThree = [
    {
      title: "Just registered",
      amount: "₦ 1,000",
      time: "2 days ago",
    },
    {
      title: "Just registered",
      amount: "₦ 1,000",
      time: "2 days ago",
    },
    {
      title: "Just registered",
      amount: "₦ 1,000",
      time: "2 days ago",
    },
    {
      title: "Just registered",
      amount: "₦ 1,000",
      time: "2 days ago",
    },
    {
      title: "Just registered",
      amount: "₦ 1,000",
      time: "2 days ago",
    },
    {
      title: "Just registered",
      amount: "₦ 1,000",
      time: "2 days ago",
    },
  ];

  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  // Header and all custom sections before the list
  const renderHeader = () => (
    <>
      <View
        style={[
          tw`flex-1 flex-row items-center justify-between px-4 py-2 mt-10`,
        ]}
      >
        <View>
          <Text
            style={[
              darkMode
                ? tw`text-white text-2xl font-extrabold`
                : tw`text-black text-2xl font-extrabold`,
              { fontFamily: "PoppinsBold" },
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
              ? tw`bg-gray-700 h-12 w-12 flex items-center justify-center rounded-full`
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
                <Text style={[tw`pr-1`, { fontFamily: "PoppinsRegular" }]}>
                  View Savings
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={16}
                  color="black"
                />
              </TouchableOpacity>
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
          <View style={[tw`flex flex-col justify-between bg-green-500 h-60`]}>
            <View style={tw`flex flex-row justify-between px-2 py-3`}>
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

              <TouchableOpacity
                style={[
                  tw` py-3 rounded-3xl w-32 flex flex-row items-center justify-center`,
                  { backgroundColor: "white" },
                ]}
              >
                <Text style={[tw`pr-1`, { fontFamily: "PoppinsRegular" }]}>
                  View All
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={16}
                  color="black"
                />
              </TouchableOpacity>
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
                My Investments
              </Text>
              <View style={tw`flex flex-row items-center`}>
                <Text
                  style={
                    darkMode
                      ? tw`text-3xl font-bold`
                      : tw`text-3xl text-white`
                  }
                >
                  ${showBalance ? "****" : "0.00"}
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
        </CustomSwiper>
      </View>
      <View>
        <View style={tw`flex flex-row justify-between px-4`}>
          <Text
            style={[
              darkMode ? tw`text-white ` : tw`text-black `,
              { fontFamily: "PoppinsRegular" },
            ]}
          >
            My Savings Plans
          </Text>
          <View style={tw`flex flex-row items-center `}>
            <Text
              style={[tw`text-green-800 `, { fontFamily: "PoppinsRegular" }]}
            >
              View All{" "}
            </Text>
            <Entypo
              name="chevron-right"
              size={22}
              style={tw`text-green-800`}
            />
          </View>
        </View>
        <View style={[tw`mt-2`, { flex: 1, justifyContent: "center" }]}>
          <CustomSlider
            data={sampleData}
            renderItem={({ item }) => (
              <View
                style={[tw`p-2 flex flex-col justify-between`, styles.card]}
              >
                <View style={tw`flex flex-row justify-end`}>
                  <View style={tw`bg-green-800 px-4 py-1 rounded-3xl`}>
                    <Text style={tw`text-white`}>{item.goal}</Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={[
                      tw`text-base font-extrabold text-green-800`,
                      { fontFamily: "PoppinsBold" },
                    ]}
                  >
                    {item.plan}
                  </Text>
                  <Text
                    style={[
                      darkMode ? tw`text-xs py-1 text-white` : tw`text-black`,
                      { fontFamily: "PoppinsRegular" },
                    ]}
                  >
                    {item.desc}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
      <View>
        <View style={tw`flex flex-row justify-between px-4 pt-10`}>
          <Text
            style={[
              darkMode ? tw`text-white ` : tw`text-black `,
              { fontFamily: "PoppinsRegular" },
            ]}
          >
            Vetted Investment Oppurtunities
          </Text>
          <View style={tw`flex flex-row items-center `}>
            <Text
              style={[tw`text-green-800 `, { fontFamily: "PoppinsRegular" }]}
            >
              View All{" "}
            </Text>
            <Entypo
              name="chevron-right"
              size={22}
              style={tw`text-green-800`}
            />
          </View>
        </View>
        <View style={[tw`mt-2`, { flex: 1, justifyContent: "center" }]}>
          <CustomSlider
            data={sampleDataTwo}
            renderItem={({ item }) => (
              <View>
                <View
                  style={[
                    tw`p-2 flex flex-col justify-between bg-green-500 h-44 rounded-2xl`,
                  ]}
                >
                  <View style={tw`flex flex-row justify-end`}>
                    <View style={tw`bg-white px-4 py-1 rounded-3xl`}>
                      <Text style={tw`text-black text-xs`}>
                        $5K - INVEST NOW
                      </Text>
                    </View>
                  </View>
                  <View style={tw`mx-8 my-12`}>
                    <View
                      style={[
                        tw`flex  items-center justify-center border-solid border-4 rounded-xl border-white p-1`,
                        { width: "100%", height: "100%" },
                      ]}
                    >
                      <Text style={tw`text-lg text-white font-extrabold`}>
                        18.5%
                      </Text>
                      <Text style={tw`text-xs text-gray-100`}>per annum</Text>
                    </View>
                  </View>
                </View>

                <View style={tw`py-2`}>
                  <Text
                    style={[
                      darkMode
                        ? tw`text-xs text-gray-100`
                        : tw`text-xs text-gray-400`,
                      { fontFamily: "PoppinsRegular" },
                    ]}
                  >
                    INVESTORS:699
                  </Text>
                  <Text
                    style={[
                      darkMode
                        ? tw`text-base text-white`
                        : tw`text-base text-gray-800`,
                      { fontFamily: "PoppinsRegular" },
                    ]}
                  >
                    COPERATE DEBT...
                  </Text>
                  <Text
                    style={[
                      darkMode
                        ? tw`text-xs text-gray-100`
                        : tw`text-xs text-gray-400`,
                      { fontFamily: "PoppinsRegular" },
                    ]}
                  >
                    <Text
                      style={[tw`text-bold`, { fontFamily: "PoppinsBold" }]}
                    >
                      9.1%
                    </Text>{" "}
                    - returns in 6 mths
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
      <Text style={[darkMode ? tw`text-gray-200 text-lg mt-10 px-4 bg-gray-700 py-2 mx-2 rounded-t-lg` : tw`text-gray-600 text-lg mt-10 px-4 bg-white py-2 mx-2 rounded-t-lg`, {fontFamily: "PoppinsRegular"}]}>Recent Activities</Text>
    </>
  );

  return (
      <View style={{ flex: 1, backgroundColor: darkMode ? "#1F2937" : "whitesmoke" }}>
      <FlatList 
        data={sampleDataThree}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={darkMode ? tw`flex  bg-gray-700 flex-row justify-between items-center px-4 py-2 mx-2` : tw`flex  bg-white flex-row justify-between items-center px-4 py-2 mx-2`}>
            <View style={tw`flex flex-row items-center`}>
              <View style={tw`flex items-center justify-center`}>
                <Image
                  source={require("../assets/images/logo.png")}
                  style={tw`flex justify-center w-16 h-16`}
                />
              </View>
              <View style={tw`ml-2`}>
                <Text style={[darkMode ? tw`text-white` : tw`text-black`, {fontFamily: "PoppinsRegular"}]}>{item.title}</Text>
                <Text style={[darkMode ? tw`text-gray-400` : tw`text-gray-400`, {fontFamily: "PoppinsRegular"}]}>{item.time}</Text>
              </View>
            </View>
            <Text style={darkMode ?  [tw`text-green-600 font-bold px-2 py-1 rounded-lg `, styles.amountDark] : [tw`text-green-600 font-bold px-2 py-1 rounded-lg `, styles.amountWhite]}>
              {item.amount}
            </Text>
          </View>
        )}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{ paddingBottom: 150 }}
      />
      {/* Sticky Button */}
      <View
        style={[
          tw`bg-green-500 h-16 w-16 flex items-center justify-center rounded-full`,
          {
            position: "absolute",
            right:20,
            bottom: 30,
            zIndex: 10,
          },
        ]}
      >
        <Fontisto
          style={tw`text-extrabold`}
          name="plus-a"
          size={20}
          color="white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "100%",
  },
  card: {
    backgroundColor: "rgba(22, 101, 52, 0.1)",
    borderRadius: 16,
    height: 170,
    elevation: 3,
    borderColor: "rgba(22, 101, 52, 1)",
    borderWidth: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  amountWhite: {
    backgroundColor: "rgba(22, 101, 52, 0.1)",
  },
  amountDark: {
    backgroundColor: "rgba(22, 101, 52, 0.4)",
  }
});

export default DashboardScreen;