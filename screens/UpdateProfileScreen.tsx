import { ActivityIndicator, Image, Text, TouchableOpacity, View, Modal, StyleSheet, TextInput } from "react-native";
import CustomTab from "@/components/tab/CustomTab";
import { useTheme } from "@/context/ThemeContext";
import tw from "tailwind-react-native-classnames";
import Entypo from "@expo/vector-icons/Entypo";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { backendApi } from "@/api/axiosInstance";
import { useAuth } from "@/context/AuthContext";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";


const UpdateProfileScreen = () => {
    const { darkMode } = useTheme();

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false)

    const { user, setUser } = useAuth();

    const [userDetails, setUserDetails] = useState<any>({})

    const [newDetails, setNewDetails] = useState({})


    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const [modalTwoVisible, setModalTwoVisible] = useState<boolean>(false);

    const [fontsLoaded] = useFonts({
        PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
        PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    });

    const updateProfile = async () => {
        try {
            setIsLoading(true)
            const response = await backendApi.patch(`/user/update/${user?.id}`, newDetails, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            setUser(response.data);
            await AsyncStorage.setItem('user', JSON.stringify(response.data));
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
            setModalVisible(false)
            setModalTwoVisible(true)
        }
    }

    useEffect(() => {
        const getuserDetails = async () => {
            try {
                const response = await backendApi.get(`/user/${user?.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                console.log(response)
                setUserDetails(response.data)
            } catch (err) {
                console.log(err)
            }
        }

        getuserDetails()
    }, [user])
    return (
        <View style={darkMode ? tw`bg-gray-800 h-full pt-12` : tw`bg-gray-100 h-full pt-12`}>
            <View style={tw`px-3`}>
                <View
                    style={tw`bg-gray-400 h-6 w-6 flex  items-center justify-center rounded-full px-2`}
                >
                    <TouchableOpacity onPress={() => router.push('/ProfileSetting')}>
                        <Entypo
                            name="chevron-left"
                            size={22}
                            color={darkMode ? "black" : "white"}
                        />
                    </TouchableOpacity>
                </View>
                <Image source={require("../assets/images/logo.png")} style={tw` w-28 h-28 relative right-6`} />
                <Text style={[darkMode ? tw`text-xl text-white pt-4 pb-2 px-2` : tw`text-xl text-black pt-4 pb-2 px-2`, { fontFamily: "PoppinsBold" }]}>My Profile</Text>
                <View style={darkMode ? tw`flex flex-row justify-between border-solid border-b border-gray-400 py-4 px-3` : tw`flex flex-row justify-between border-solid border-b border-gray-700 py-4 px-3`}>
                    <Text style={darkMode ? tw`text-gray-100` : tw`text-gray-600`}>First Name</Text>
                    <Text style={darkMode ? tw`text-white` : tw`text-black`}>{userDetails?.first_name}</Text>
                </View>
                <View style={darkMode ? tw`flex flex-row justify-between border-solid border-b border-gray-400 py-4 px-3` : tw`flex flex-row justify-between border-solid border-b border-gray-700 py-4 px-3`}>
                    <Text style={darkMode ? tw`text-gray-100` : tw`text-gray-600`}>Last Name</Text>
                    <Text style={darkMode ? tw`text-white` : tw`text-black`}>{userDetails?.last_name}</Text>
                </View>
                <View style={darkMode ? tw`flex flex-row justify-between border-solid border-b border-gray-400 py-4 px-3` : tw`flex flex-row justify-between border-solid border-b border-gray-700 py-4 px-3`}>
                    <Text style={darkMode ? tw`text-gray-100` : tw`text-gray-600`}>Email</Text>
                    <Text style={darkMode ? tw`text-white` : tw`text-black`}>{userDetails?.email}</Text>
                </View>
                <View style={darkMode ? tw`flex flex-row justify-between border-solid border-b border-gray-400 py-4 px-3` : tw`flex flex-row justify-between border-solid border-b border-gray-700 py-4 px-3`}>
                    <Text style={darkMode ? tw`text-gray-100` : tw`text-gray-600`}>Phone number</Text>
                    <Text style={darkMode ? tw`text-white` : tw`text-black`}>{userDetails?.phonenumber}</Text>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={tw`bg-green-500 mt-6 h-12 rounded-md items-center justify-center`}><Text style={[tw`text-white text-lg`, { fontFamily: "PoppinsRegular" }]}>Edit Profile</Text></TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={[darkMode ? tw`bg-gray-800` : tw`bg-gray-100`, styles.modalBox]}>
                            <Text style={[darkMode ? tw`flex justify-center text-xl text-white pt-4 pb-2 px-2` : tw`flex justify-center text-xl text-black pt-4 pb-2 px-2`, { fontFamily: "PoppinsBold" }]}>Edit your profile</Text>
                            <Text style={[darkMode ? tw`text-white pt-2` : tw` text-black pt-2`, { fontFamily: "PoppinsRegular" }]}>
                                Name
                            </Text>
                            <TextInput
                                placeholder="john"
                                placeholderTextColor="white"
                                style={[
                                    darkMode ? tw` h-12 rounded-md px-4 mb-4 text-white bg-gray-700 mt-3 mb-2` : tw`h-12 rounded-md px-4 mb-4 text-white bg-gray-600 mt-3 mb-2`
                                ]}
                                onChangeText={(text) =>
                                    setNewDetails({ ...newDetails, first_name: text })
                                }
                            />
                            <Text style={[darkMode ? tw`text-white pt-2` : tw` text-black pt-2`, { fontFamily: "PoppinsRegular" }]}>
                                Last Name
                            </Text>
                            <TextInput
                                placeholder="doe"
                                placeholderTextColor="white"
                                style={[
                                    darkMode ? tw` h-12 rounded-md px-4 mb-4 text-white bg-gray-700 mt-3 mb-2` : tw`h-12 rounded-md px-4 mb-4 text-white bg-gray-600 mt-3 mb-2`
                                ]}
                                onChangeText={(text) =>
                                    setNewDetails({ ...newDetails, last_name: text })
                                }
                            />
                            <Text style={[darkMode ? tw`text-white pt-2` : tw` text-black pt-2`, { fontFamily: "PoppinsRegular" }]}>
                                Email
                            </Text>
                            <TextInput
                                placeholder="johndoe@gmail.com"
                                placeholderTextColor="white"
                                style={[
                                    darkMode ? tw` h-12 rounded-md px-4 mb-4 text-white bg-gray-700 mt-3 mb-2` : tw`h-12 rounded-md px-4 mb-4 text-white bg-gray-600 mt-3 mb-2`
                                ]}
                                onChangeText={(text) =>
                                    setNewDetails({ ...newDetails, email: text })
                                }
                            />
                            <Text style={[darkMode ? tw`text-white pt-2` : tw` text-black pt-2`, { fontFamily: "PoppinsRegular" }]}>
                                Phone number
                            </Text>
                            <TextInput
                                placeholder="09011111111"
                                placeholderTextColor="white"
                                style={[
                                    darkMode ? tw` h-12 rounded-md px-4 mb-4 text-white bg-gray-700 mt-3 mb-2` : tw`h-12 rounded-md px-4 mb-4 text-white bg-gray-600 mt-3 mb-2`
                                ]}
                                onChangeText={(text) =>
                                    setNewDetails({ ...newDetails, phonenumber: text })
                                }
                            />
                            <View style={tw`flex items-center justify-center`}>
                                <TouchableOpacity onPress={() => { updateProfile() }} style={tw`bg-green-500 mt-6 w-40 h-12 rounded-md items-center justify-center`}>{isLoading ? <ActivityIndicator size="small" color="white" /> : <Text style={[tw`text-white text-lg`, { fontFamily: "PoppinsRegular" }]}>Save</Text>}</TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalTwoVisible}
                    onRequestClose={() => setModalTwoVisible(false)}>
                    <View style={styles.modalOverlay}>
                        <View style={[darkMode ? tw`bg-gray-800` : tw`bg-gray-100`, styles.modalBox]}>
                            <View style={tw`flex justify-center items-center`}>
                                <AntDesign name="checkcircle" size={24} color="green" />
                                <Text style={darkMode ? tw`text-gray-100 text-center py-1` : tw`text-center text-gray-600 py-1`}>Profile Update Success</Text>
                            </View>
                            <View style={tw`flex items-center justify-center`}>
                                <TouchableOpacity onPress={() => { setModalTwoVisible(false) }} style={tw`bg-green-500 mt-6 w-40 h-12 rounded-md items-center justify-center`}><Text style={[tw`text-white text-lg`, { fontFamily: "PoppinsRegular" }]}>ok</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <CustomTab />
        </View>
    )
}
export default UpdateProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
});