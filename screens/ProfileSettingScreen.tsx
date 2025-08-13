import CustomTab from "@/components/tab/CustomTab";
import { useTabStore } from "@/store/store";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, ScrollView, Switch, Text, TouchableOpacity, View } from "react-native"
import tw from "tailwind-react-native-classnames";
import { useTheme } from "../context/ThemeContext";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";

const ProfileSettingScreen = () => {
    const { activeTab, setActiveTab } = useTabStore();
    const { darkMode } = useTheme();
    const router = useRouter()

      const [fontsLoaded] = useFonts({
        PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
        PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
      });

   
    return (
        <View style={darkMode ? tw`bg-gray-800 h-full` : tw`bg-gray-100 h-full`}>
            <View style={tw`px-3 pt-12`}>
                <Pressable onPress={() => router.push('/Profile')}
                    style={tw`bg-gray-400 h-6 w-6 flex  items-center justify-center rounded-full`}
                >
                    <Entypo
                        name="chevron-left"
                        size={22}
                        color={darkMode ? "black" : "white"}
                    />
                </Pressable>
                <View>
                    <Text style={[darkMode ? tw`text-xl text-white pt-4` : tw`text-xl text-black pt-4`, { fontFamily: "PoppinsBold" }]}>Account Settings</Text>
                </View>
                <View style={darkMode ? tw`bg-gray-900 mt-6 rounded-md ` : tw`bg-white mt-6 rounded-md`}>
                    <Pressable style={darkMode ? tw`flex flex-row border-b border-gray-800 items-center justify-between p-4` : tw`flex flex-row border-b border-gray-100 items-center justify-between p-4`}>
                        <View style={tw`flex flex-row items-center`}>
                            <View
                                style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
                            >
                                <AntDesign name="profile" size={20} color="black" />
                            </View>
                            <Text onPress={() => router.push("/UpdateProfile")} style={[darkMode ? tw`text-white ml-2` : tw`text-black ml-2`]}>Profile Settings</Text>
                        </View>
                        <Entypo
                            name="chevron-right"
                            size={22}
                            color="gray"
                        />
                    </Pressable>
                    <Pressable style={darkMode ? tw`flex flex-row border-b border-gray-800 items-center justify-between p-4` : tw`flex flex-row border-b border-gray-100 items-center justify-between p-4`}>
                        <View style={tw`flex flex-row items-center`}>
                            <View
                                style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
                            >
                                 <Entypo name="check" size={20} color="gray" />
                            </View>
                            <Text style={[darkMode ? tw`text-white ml-2` : tw`text-black ml-2`]}>Verify BVN</Text>
                        </View>
                        <Entypo
                            name="chevron-right"
                            size={22}
                            color="gray"
                        />
                    </Pressable>
                    <View style={darkMode ? tw`flex flex-row border-b border-gray-800 items-center justify-between p-4` : tw`flex flex-row border-b border-gray-100 items-center justify-between p-4`}>
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
                    </View>
                    <View style={darkMode ? tw`flex flex-row border-b border-gray-800 items-center justify-between p-4` : tw`flex flex-row border-b border-gray-100 items-center justify-between p-4`}>
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
                    </View>
                    <View style={tw`flex flex-row items-center justify-between p-4`}>
                        <View style={tw`flex flex-row items-center`}>
                            <View
                                style={tw`bg-gray-200 h-6 w-6 flex  items-center justify-center rounded-full`}
                            >
                                <MaterialIcons name="security" size={20} color="gray" />
                            </View>
                            <Text style={[darkMode ? tw`text-white ml-2` : tw`text-black ml-2`]}>Update KYC</Text>
                        </View>
                        <Entypo
                            name="chevron-right"
                            size={22}
                            color="gray"
                        />
                    </View>
                </View>
            </View>
            <CustomTab />
        </View>
    )
}

export default ProfileSettingScreen;