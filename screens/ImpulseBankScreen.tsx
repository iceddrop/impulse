import { ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import CustomTab from "@/components/tab/CustomTab";
import tw from "tailwind-react-native-classnames";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ImpulseBankScreen = () => {
    const [showBalance, setShowBalance] = useState(false);
    const { darkMode } = useTheme();
    return (
        <>
        <ScrollView style={[tw`flex-1 pt-12 relative px-4`, {backgroundColor: darkMode ? "#1F2937" : "whitesmoke"}]}>
            <View style={tw`flex flex-row justify-between`}>
                <View
                    style={tw`bg-gray-400 h-6 w-6 flex  items-center justify-center rounded-full`}
                >
                    <Entypo
                        name="chevron-left"
                        size={22}
                        color={darkMode ? "gray" : "white"}
                    />
                </View>
                <Text style={[darkMode ? tw`text-xl text-white` : tw`text-xl text-black`, { fontFamily: "PoppinsBold" }]}>Impulse Bank</Text>
                <AntDesign name="infocirlceo" size={20} color="gray" />
            </View>
            <View style={[tw`flex rounded-2xl flex-col justify-between bg-green-500 h-60 mt-6`]}>
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
                        ImpulseBank Balance
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
                            {showBalance ? "****" : "₦ 1,000,000"}
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
                <View style={tw`flex flex-row px-2 pb-3`}>
                    <View style={[tw`bg-green-400 p-3 rounded-md`]}>
                         <Text style={tw`text-xs text-gray-100`}>Interests will be accrued daily</Text>
                         <View>
                            <Text style={[tw`text-white`, {fontFamily: "PoppinsBold"}]}>18% <Text  style={[tw`text-xs text-gray-100`, {fontFamily: "PoppinsRegular"}]}>per annum</Text><MaterialCommunityIcons name="party-popper" size={20} color="#FFD700" /></Text>
                         </View>
                    </View>
                    <View style={[tw`bg-green-400 ml-2 p-3 rounded-md`]}>
                        <Text style={tw`text-gray-100 text-xs`}>Enable AutoSave</Text>
                        <Text style={[tw`text-white`, {fontFamily: "PoppinsBold"}]}>Setup Now<MaterialCommunityIcons name="lightning-bolt" size={20} color="#FFD700" /></Text>
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <Text>Enable AutoSave</Text>
                    <Text>Save automatically daily, weekly or monthly with autosave</Text>
                </View>
                <TouchableOpacity><Text>SETUP</Text></TouchableOpacity>
            </View>
        </ScrollView>
         <CustomTab />
         </>
    )
}

export default ImpulseBankScreen;