import { backendApi } from "@/api/axiosInstance";
import { useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
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

const ImpulseNairaScreen = () => {
    const [showBalance, setShowBalance] = useState(false);
    const { darkMode } = useTheme();
    const [customerBankDetails, setCustomerBankDetails] = useState({
        accountNumber: "",
        accountName: "",
        bankName: "",
    });
    useEffect(() => {
        const fetchCustomerBank = async () => {
            const response = await backendApi.get("/paystack/fetch-customer")
            console.log(response)
            setCustomerBankDetails({
                accountNumber: response.data?.data?.dedicated_account?.account_number,
                accountName: response.data?.data?.dedicated_account?.account_name,
                bankName: response.data?.data?.dedicated_account?.bank?.name,
            })
        }
        fetchCustomerBank();
    }, [])
    console.log(customerBankDetails)

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
                    <Text style={[darkMode ? tw`text-xl text-white` : tw`text-xl text-black`, { fontFamily: "PoppinsBold" }]}>Impulse Naira</Text>
                    <AntDesign name="infocirlceo" size={20} color="gray" />
                </View>
                <View style={[tw`flex rounded-2xl flex-col justify-between bg-green-500 h-60 mt-6`]}>
                    <View style={tw`flex flex-row justify-between px-2 py-3`}>
                        <Text
                            style={[
                                darkMode
                                    ? tw`text-gray-800 text-sm pr-1`
                                    : tw`text-white text-sm pr-1`,
                                { fontFamily: "PoppinsRegular" },
                            ]}
                        >
                            {customerBankDetails?.accountName?.slice(14)}
                        </Text>
                        <View>
                            <Text
                                style={[
                                    darkMode
                                        ? tw`text-gray-800 text-sm pr-1`
                                        : tw`text-white text-sm pr-1`,
                                    { fontFamily: "PoppinsRegular" },
                                ]}
                            >
                                {customerBankDetails?.bankName}
                            </Text>
                            <Text
                                style={[
                                    darkMode
                                        ? tw`text-gray-800 text-sm pr-1`
                                        : tw`text-white text-sm pr-1`,
                                    { fontFamily: "PoppinsRegular" },
                                ]}
                            >
                                {customerBankDetails?.accountNumber}
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
                <View style={darkMode ? tw`flex flex-row items-center justify-between bg-gray-900 rounded-md px-3 py-3 mt-4` : tw`mt-4 flex flex-row items-center justify-between bg-white rounded-md px-2 py-3`}>
                    <View style={tw``}>
                        <TouchableOpacity >
                            <Text style={[darkMode ? tw`text-white` : tw`text-black`, { fontFamily: "PoppinsBold" }]}>Withdraw</Text>
                            <Text style={[darkMode ? tw` text-gray-100` : tw`text-gray-400`, { fontFamily: "PoppinsReguar" }]}>Transfer to Bank</Text>
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

                <View style={tw`flex flex-col items-center mt-16 justify-center`}>
                    <View style={[tw`py-4 px-6 rounded-xl`, styles.card]}>
                        <Feather name="shield" size={44} color="#166534" />
                    </View>
                    <Text style={[tw`mt-3 text-gray-500`, { fontFamily: "PoppinsRegular" }]}><Text style={[tw``, { fontFamily: "PoppinsBold" }]}>Your transactions</Text> will appear here once you start</Text>
                </View>
            </ScrollView>
            <CustomTab />
        </>
    );
};

const styles = {
    card: {
        backgroundColor: "rgba(22, 101, 52, 0.2)",
    }
}

export default ImpulseNairaScreen;