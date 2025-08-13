import { useTheme } from "@/context/ThemeContext";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import { Pressable, ScrollView, Switch, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { useTabStore } from "@/store/store";
import { useAuth } from "@/context/AuthContext";
import { backendApi } from "@/api/axiosInstance";
import AntDesign from '@expo/vector-icons/AntDesign';
import { CreateAccountPayload } from "@/types/type";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
const ProfileScreen = () => {
  const { darkMode, toggleTheme } = useTheme();
  const router = useRouter();
  const { activeTab, setActiveTab } = useTabStore();
  const { user, logout } = useAuth();

  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const createImpulseAccount = async () => {
    const payload: CreateAccountPayload = {
      first_name: "Oluwatomiwa",
      last_name: "Ibikunle",
      email: "jojogoeyid@gmail.com",
      phone: "09015978924",
      country: "NG",
      preferred_bank: "wema-bank"
    };
    try {
      const response = await backendApi.post("/paystack/assign-dva", payload);
      console.log("Account created:", response.data);
    } catch (error: any) {
      console.error("Error creating account:", error.response?.data || error.message);
    }
  }

  return (
    <ScrollView style={[tw`flex-1 `, darkMode ? tw`bg-gray-800 pt-12 px-3 pb-12` : tw`bg-gray-100 pt-12 px-3 pb-12`]}>
      <View style={tw`flex flex-row justify-between items-center `}>
        <View>
          <Text style={[darkMode ? tw`text-xl text-white` : tw`text-xl text-black`, { fontFamily: "PoppinsBold" }]}>My Account,</Text>
          <Text style={[darkMode ? tw` text-gray-100` : tw`text-gray-400`, { fontFamily: "PoppinsReguar" }]}>{user?.first_name} {user?.last_name}</Text>
        </View>
        <View
          style={
            darkMode
              ? tw`bg-gray-900 h-12 w-12 flex items-center justify-center rounded-full`
              : tw`bg-green-500 h-12 w-12 flex items-center justify-center rounded-full`
          }
        >
          <Ionicons name="person" size={24} color="white" />
        </View>
      </View>
      <View style={tw`flex flex-row items-center justify-between mt-6 `}>
        <View style={darkMode ? tw`flex flex-row items-center justify-between bg-gray-900 rounded-md px-3 py-3` : tw`flex flex-row items-center justify-between bg-white rounded-md px-2 py-3`}>
          <View style={tw``}>
            <TouchableOpacity onPress={() => createImpulseAccount()}>
              <Text style={[darkMode ? tw`text-white` : tw`text-black`, { fontFamily: "PoppinsBold" }]}>Create account</Text>
              <Text style={[darkMode ? tw` text-gray-100` : tw`text-gray-400`, { fontFamily: "PoppinsReguar" }]}>Start now <MaterialCommunityIcons name="party-popper" size={20} color="#FFD700" /></Text>
            </TouchableOpacity>
          </View>
          <View
            style={tw`bg-gray-100 h-6 w-6 flex  items-center justify-center rounded-full ml-6`}
          >
            <Entypo
              name="chevron-right"
              size={22}
              color="gray"
            />
          </View>
        </View>
        <View style={darkMode ? tw`flex flex-row items-center justify-between bg-gray-900 rounded-md px-3 py-3` : tw`flex flex-row items-center justify-between bg-white rounded-md px-2 py-3`}>
          <View style={tw``}>
            <Text style={[darkMode ? tw`text-white` : tw`text-black`, { fontFamily: "PoppinsBold" }]}>0</Text>
            <Text style={[darkMode ? tw` text-gray-100` : tw`text-gray-400`, { fontFamily: "PoppinsReguar" }]}>Piggy Points </Text>
          </View>
          <View
            style={tw`bg-gray-100 h-6 w-6 flex  items-center justify-center rounded-full ml-6`}
          >
            <Entypo
              name="chevron-right"
              size={22}
              color="gray"
            />
          </View>
        </View>
      </View>
      <View style={darkMode ? tw`bg-gray-900 mt-6 rounded-md ` : tw`bg-white mt-6 rounded-md`}>
        <View style={darkMode ? tw`flex flex-row border-b border-gray-800 items-center justify-between p-4` : tw`flex flex-row border-b border-gray-100 items-center justify-between p-4`}>
          <View style={tw`flex flex-row items-center`}>
            <View
              style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
            >
              <FontAwesome name="percent" size={20} color="gray" />
            </View>
            <Text style={[darkMode ? tw`text-white ml-2` : tw`text-black ml-2`]}>Today's Rates</Text>
          </View>
          <Entypo
            name="chevron-right"
            size={22}
            color="gray"
          />
        </View>
        {/* <View style={darkMode ? tw`flex flex-row border-b border-gray-800 items-center justify-between p-4` : tw`flex flex-row border-b border-gray-100 items-center justify-between p-4`}>
          <View style={tw`flex flex-row items-center`}>
            <View
              style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
            >
              <MaterialIcons name="dark-mode" size={20} color="gray" />
            </View>
            <Text style={[darkMode ? tw`text-white ml-2` : tw`text-black ml-2`]}>Enable Dark Mode</Text>
          </View>
          <Switch value={darkMode} onValueChange={toggleTheme} style={tw`mt-4`} />
        </View> */}
        <Pressable onPress={() => { router.push("/ProfileSetting"); setActiveTab("Profile") }} style={darkMode ? tw`flex flex-row border-b border-gray-800 items-center justify-between p-4` : tw`flex flex-row border-b border-gray-100 items-center justify-between p-4`}>
          <View style={tw`flex flex-row items-center`}>
            <View
              style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
            >
              <Ionicons name="person" size={20} color="gray" />
            </View>
            <Text style={[
              darkMode ? tw`text-white ml-2` : tw`text-black ml-2`,
              { fontFamily: "PoppinsRegular" }
            ]}>Profile Setting</Text>
          </View>
          <Entypo
            name="chevron-right"
            size={22}
            color="gray"
          />
        </Pressable>
        {/* <View style={darkMode ? tw`flex flex-row border-b border-gray-800 items-center justify-between p-4` : tw`flex flex-row border-b border-gray-100 items-center justify-between p-4`}>
          <View style={tw`flex flex-row items-center`}>
            <View
              style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
            >
              <Entypo name="check" size={20} color="gray" />
            </View>
            <Text style={[darkMode ? tw`text-white ml-2` : tw`text-black ml-2`]}>Verify NIN</Text>
          </View>
          <Entypo
            name="chevron-right"
            size={22}
            color="gray"
          />
        </View> */}
        {/* <View style={darkMode ? tw`flex flex-row border-b border-gray-800 items-center justify-between p-4` : tw`flex flex-row border-b border-gray-100 items-center justify-between p-4`}>
          <View style={tw`flex flex-row items-center`}>
            <View
              style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
            >
              <MaterialIcons name="generating-tokens" size={20} color="gray" />
            </View>
            <Text style={[darkMode ? tw`text-white ml-2` : tw`text-black ml-2`]}>Generate Reference Letter</Text>
          </View>
          <Entypo
            name="chevron-right"
            size={22}
            color="gray"
          />
        </View> */}
        <View style={tw`flex flex-row items-center justify-between p-4`}>
          <View style={tw`flex flex-row items-center`}>
            <View
              style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
            >
              <MaterialIcons name="security" size={20} color="gray" />
            </View>
            <Text style={[darkMode ? tw`text-white ml-2` : tw`text-black ml-2`]}>Security</Text>
          </View>
          <Entypo
            name="chevron-right"
            size={22}
            color="gray"
          />
        </View>
      </View>
      <View style={darkMode ? tw`bg-gray-900 mt-6 rounded-md ` : tw`bg-white mt-6 rounded-md`}>

        <View style={darkMode ? tw`flex flex-row border-b border-gray-800 items-center justify-between p-4` : tw`flex flex-row border-b border-gray-100 items-center justify-between p-4`}>
          <View style={tw`flex flex-row items-center`}>
            <View
              style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
            >
              {
                darkMode ?
                 <Entypo name="moon" size={24} color="gray" />
                  :
                  <FontAwesome name="sun-o" size={24} color="gray" />
              }
            </View>
            <Text style={[darkMode ? tw`text-white ml-2` : tw`text-black ml-2`]}>Enable Dark Mode</Text>
          </View>
          <Switch value={darkMode} onValueChange={toggleTheme} style={tw``} />
        </View>
        <View style={darkMode ? tw`flex flex-row border-b border-gray-800 items-center justify-between p-4` : tw`flex flex-row border-b border-gray-100 items-center justify-between p-4`}>
          <View style={tw`flex flex-row items-center`}>
            <View
              style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
            >
              <Entypo name="credit-card" size={20} color="gray" />
            </View>
            <Text style={[darkMode ? tw`text-white ml-2` : tw`text-black ml-2`]}>My Debits Cards and Linked banks</Text>
          </View>
          <Entypo
            name="chevron-right"
            size={22}
            color="gray"
          />
        </View>

        <View style={darkMode ? tw`flex flex-row border-b border-gray-800 items-center justify-between p-4` : tw`flex flex-row border-b border-gray-100 items-center justify-between p-4`}>
          <View style={tw`flex flex-row items-center`}>
            <View
              style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
            >
              <FontAwesome5 name="gift" size={20} color="gray" />
            </View>
            <Text style={[darkMode ? tw`text-white ml-2` : tw`text-black ml-2`]}>Refer and Earn</Text>
          </View>
          <Entypo
            name="chevron-right"
            size={22}
            color="gray"
          />
        </View>
      </View>

      <View style={darkMode ? tw`bg-gray-900 mt-6 rounded-md ` : tw`bg-white mt-6 rounded-md`}>
        <View style={darkMode ? tw`flex flex-row border-b border-gray-800 items-center justify-between p-4` : tw`flex flex-row border-b border-gray-100 items-center justify-between p-4`}>
          <View style={tw`flex flex-row items-center`}>
            <View
              style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
            >
              <SimpleLineIcons name="speech" size={20} color="gray" />
            </View>
            <Text style={[darkMode ? tw`text-white ml-2` : tw`text-black ml-2`]}>Contact Us</Text>
          </View>
          <Entypo
            name="chevron-right"
            size={22}
            color="gray"
          />
        </View>
        <View style={darkMode ? tw`flex flex-row border-b border-gray-800 items-center justify-between p-4` : tw`flex flex-row border-b border-gray-100 items-center justify-between p-4`}>
          <View style={tw`flex flex-row items-center`}>
            <View
              style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
            >
              <AntDesign name="questioncircleo" size={20} color="gray" />
            </View>
            <Text style={[darkMode ? tw`text-white ml-2` : tw`text-black ml-2`]}>Self Help</Text>
          </View>
          <Entypo
            name="chevron-right"
            size={22}
            color="gray"
          />
        </View>
        <View style={darkMode ? tw`flex flex-row border-b border-gray-800 items-center justify-between p-4` : tw`flex flex-row border-b border-gray-100 items-center justify-between p-4`}>
          <View style={tw`flex flex-row items-center`}>
            <View
              style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
            >
              <MaterialIcons name="security-update" size={20} color="gray" />
            </View>
            <Text style={[darkMode ? tw`text-white ml-2` : tw`text-black ml-2`]}>Check for Updates</Text>
          </View>
          <Entypo
            name="chevron-right"
            size={22}
            color="gray"
          />
        </View>
        <Pressable onPress={() => logout()} style={tw`flex flex-row items-center justify-between px-4 pb-4 pt-4`}>
          <View style={tw`flex flex-row items-center`}>
            <View
              style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
            >
              <AntDesign name="logout" size={20} color="gray" />
            </View>
                 <Text style={[
              darkMode ? tw`text-red-600 ml-2` : tw`text-red-600 ml-2`,
              { fontFamily: "PoppinsRegular" }
            ]}>Log Out</Text>
          </View>
          <Entypo
            name="chevron-right"
            size={22}
            color="gray"
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};


export default ProfileScreen;
