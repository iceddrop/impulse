import { Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import CustomTab from "@/components/tab/CustomTab";
import tw from "tailwind-react-native-classnames";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from '@expo/vector-icons/Feather';
import Fontisto from "@expo/vector-icons/Fontisto";


const ImpulseBankScreen = () => {
    const [showBalance, setShowBalance] = useState(false);
    const { darkMode } = useTheme();
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <ScrollView style={[tw`flex-1 pt-12 relative px-4`, { backgroundColor: darkMode ? "#1F2937" : "whitesmoke" }]}>
                <View style={tw`flex flex-row justify-between`}>
                    <View
                        style={tw`bg-gray-400 h-6 w-6 flex  items-center justify-center rounded-full`}
                    >
                        <Entypo
                            name="chevron-left"
                            size={22}
                            color={darkMode ? "black" : "white"}
                        />
                    </View>
                    <Text style={[darkMode ? tw`text-xl text-white` : tw`text-xl text-black`, { fontFamily: "PoppinsBold" }]}>ImpulseBank</Text>
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
                                <Text style={[tw`text-white`, { fontFamily: "PoppinsBold" }]}>18% <Text style={[tw`text-xs text-gray-100`, { fontFamily: "PoppinsRegular" }]}>per annum</Text><MaterialCommunityIcons name="party-popper" size={20} color="#FFD700" /></Text>
                            </View>
                        </View>
                        <View style={[tw`bg-green-400 ml-2 p-3 rounded-md`]}>
                            <Text style={tw`text-gray-100 text-xs`}>Enable AutoSave</Text>
                            <Text style={[tw`text-white`, { fontFamily: "PoppinsBold" }]}>Setup Now<MaterialCommunityIcons name="lightning-bolt" size={20} color="#FFD700" /></Text>
                        </View>
                    </View>
                </View>
                <View style={[tw`flex flex-row items-center justify-between mt-4 px-4 bg-red-400 rounded-2xl py-2`, styles.card]}>
                    <View style={tw`w-2/3`}>
                        <Text style={[darkMode ? tw`text-white font-base` : tw` font-bold`, { fontFamilly: "PoppinsBold" }]}>Enable AutoSave<MaterialCommunityIcons name="lightning-bolt" size={20} color="#FFD700" /></Text>
                        <Text style={[darkMode ? tw`text-white` : tw`text-black`, { fontFamilly: "PoppinsRegular" }]}>Save automatically daily, weekly or monthly with autosave</Text>
                    </View>
                    <TouchableOpacity style={tw`bg-green-500 rounded-2xl`}><Text style={[tw`text-white px-4 py-1 `, { fontFamily: "PoppinsRegular" }]}>SETUP</Text></TouchableOpacity>
                </View>
                <View style={tw`flex flex-row justify-between mt-4 px-2`}>
                    <View style={tw`flex flex-col items-center justify-center`}>
                        <Pressable style={[tw`rounded-xl p-3 flex `, styles.card]} onPress={()=> setOpenModal(true)}>
                            <Fontisto
                                style={tw`font-extrabold`}
                                name="plus-a"
                                size={24}
                                color="#166534"
                            />
                        </Pressable>
                        <Text style={[darkMode ? tw`text-white mt-2` : tw`text-black mt-2`,{fontFamily: "PoppinsRegular"}]}>Quick Save</Text>
                    </View>
                    <View>
                    <View style={tw`flex flex-col items-center justify-center`}>
                        <View style={[tw`rounded-xl p-3`, styles.card]}>
                            <FontAwesome name="bank" size={24} color="#166534" />
                        </View>
                        <Text style={[darkMode ? tw`text-white mt-2` : tw`text-black mt-2`,{fontFamily: "PoppinsRegular"}]}>Withdraw</Text>
                    </View>
                    </View>
                    <View style={tw`flex flex-col items-center justify-center`}>
                        <View style={[tw`rounded-xl p-3`, styles.card]}>
                            <Feather name="settings" size={24} color="#166534" />
                        </View>
                        <Text style={[darkMode ? tw`text-white mt-2` : tw`text-black mt-2`,{fontFamily: "PoppinsRegular"}]}>Settings</Text>
                    </View>
                </View>
                <View style={tw`flex flex-col items-center mt-16 justify-center`}>
                    <View style={[tw`py-4 px-6 rounded-xl`, styles.card]}>
                        <Feather name="shield" size={44} color="#166534" />
                    </View>
                    <Text style={[tw`mt-3 text-gray-500`,{fontFamily: "PoppinsRegular"}]}><Text style={[tw``,{fontFamily: "PoppinsBold"}]}>Your transactions</Text> will appear here once you start</Text>
                </View>
            </ScrollView>
            <CustomTab />
             <Modal
                    animationType="slide"
                    transparent={true}
                    visible={openModal}
                    onRequestClose={() => setOpenModal(false)}>
                    <View style={styles.modalOverlay}>
                        <View style={[darkMode ? tw`bg-gray-800` : tw`bg-gray-100`, styles.modalBox]}>
                            <View style={tw`flex justify-center items-center`}>
                                <AntDesign name="checkcircle" size={24} color="green" />
                                <Text style={darkMode ? tw`text-gray-100 text-center py-1` : tw`text-center text-gray-600 py-1`}>Profile Update Success</Text>
                            </View>
                            <View style={tw`flex items-center justify-center`}>
                                <TouchableOpacity onPress={() => { setOpenModal(false) }} style={tw`bg-green-500 mt-6 w-40 h-12 rounded-md items-center justify-center`}><Text style={[tw`text-white text-lg`, { fontFamily: "PoppinsRegular" }]}>ok</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "rgba(22, 101, 52, 0.2)",
    },
        modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalBox: {
        padding: 24,
        borderRadius: 10,
        width: "80%",
    },
})

export default ImpulseBankScreen;