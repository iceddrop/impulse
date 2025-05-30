import { Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTabStore } from "@/store/store";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { useTheme } from "@/context/ThemeContext";

const CustomTab = () => {
      const {activeTab, setActiveTab} = useTabStore();

      const {darkMode} = useTheme();

      const router = useRouter();

        const [fontsLoaded] = useFonts({
          PoppinsRegular: require("../../assets/fonts/Poppins-Regular.ttf"),
          PoppinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
        });

    return (
        <View style={[tw`absolute inset-x-0 bottom-0 bg-white p-4`, {backgroundColor : darkMode ? "#374151" : "whitesmoke"}]}>
            <View style={tw`flex flex-row justify-around`}>
                <TouchableOpacity onPress={() => {setActiveTab("Home") ; router.push("/Dashboard")}}  style={tw`flex justify-center items-center`}><Entypo name="home" size={24} color={darkMode ? "white" : "gray"} /><Text style={[darkMode ? tw`text-center text-white` : tw`text-center text-gray-400`, {fontFamily: "PoppinsRegular"}]}>Home</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {setActiveTab("Savings") ; router.push("/Savings")}} style={tw`flex justify-center items-center`}><MaterialIcons name="savings" size={24} color={activeTab === "Savings" ? "green" : "green"} /><Text style={[activeTab === "Savings" ? tw`text-center text-green-800` : tw`text-center text-green-800`, {fontFamily: "PoppinsRegular"}]}>Savings</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {setActiveTab("Profile") ; router.push('/Profile')}} style={tw`flex justify-center items-center`}><Ionicons name="person" size={24} color={darkMode ? "white" : "gray"} /><Text style={[darkMode ? tw`text-center text-white` : tw`text-center text-gray-400`, {fontFamily: "PoppinsRegular"}]}>Profile</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomTab;