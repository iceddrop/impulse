import { backendApi } from "@/api/axiosInstance";
import { validateSignupTwoForm } from "@/utils/utils";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Dimensions, Text, TextInput, TouchableOpacity, View } from "react-native"
import Toast from "react-native-toast-message";
import tw from "tailwind-react-native-classnames";
import { useSignupStore } from "@/store/store";

const SignupScreenTwo = () => {
    const router = useRouter();

    const [errors, setErrors] = useState<any>({});

    const [isLoading, setIsLoading] = useState<boolean | null>(false);

    const { formData, clearFormData } = useSignupStore();
    console.log(formData)
    const [fontsLoaded] = useFonts({
        PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
        PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    });


    const [signUpData, setSignUpData] = useState({
        first_name: "",
        last_name: "",
        referralCode: ""
    });


    const validateFormTwo = () => validateSignupTwoForm(signUpData);

    const signUp = async () => {
        const validationErrors = validateFormTwo();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            try {
                const finalData = { ...formData, ...signUpData };
                console.log("📋 Final Sign Up Data:", finalData);
                setIsLoading(true);

                const response = await backendApi.post("/user/register", finalData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                console.log(response)

                // if (response.status === 201 || response.status === 200) {
                //   const responseTwo = await backendApi.post("/auth/request-otp", {
                //     email: signUpData?.email
                //   }, {
                //     headers: {
                //       'Content-Type': 'application/json',
                //     },
                //   });

                // }
                await AsyncStorage.setItem("pendingEmail", formData?.email);
                router.push("/VerifyOtp");
                clearFormData();

                return;

            } catch (error: any) {

                console.log(error)
                // toast.error("Credentials submitted already in use or omitted")
                Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: error?.response?.data?.message
                });

                // setRequestErr(error.message || "An error occurred during sign up");
                // console.log(error)
            } finally {
                setIsLoading(false);
            }
        }
    }


    return (
        <View style={[tw`px-4 `, { backgroundColor: "#111827" }, { height: screenHeight }]}>
            <Toast />
            <View style={tw`bg-white h-8 w-8 flex mt-10 items-center justify-center rounded-full`}>
                <Entypo onPress={() => router.push("/")} name="chevron-left" size={24} color="black" />
            </View>
            <Text style={[tw`text-white text-2xl py-3`, { fontFamily: "PoppinsRegular" }]}>Let's get started <MaterialCommunityIcons name="party-popper" size={24} color="#FFD700" /></Text>
            <Text style={[tw`text-white`, { fontFamily: "PoppinsRegular" }]}>Register to start saving and investing with Impulse!</Text>
            <View>
                <Text style={[tw`text-white py-2`, { fontFamily: "PoppinsRegular" }]}>First Name</Text>
                <TextInput
                    placeholder="John Doe"
                    placeholderTextColor="white"
                    style={[tw` h-12 rounded-md px-4  text-white`, { backgroundColor: "#1F2937" }]}
                    onChange={event => setSignUpData({ ...signUpData, first_name: event.nativeEvent.text })}
                />
                <Text>{errors.first_name && <Text style={tw`text-red-500`}>{errors.first_name}</Text>}</Text>
                <Text style={[tw`text-white py-2`, { fontFamily: "PoppinsRegular" }]}>Last Name</Text>
                <TextInput
                    placeholder="John Doe"
                    placeholderTextColor="white"
                    style={[tw` h-12 rounded-md px-4  text-white`, { backgroundColor: "#1F2937" }]}
                    onChange={event => setSignUpData({ ...signUpData, last_name: event.nativeEvent.text })}
                />
                <Text>{errors.last_name && <Text style={tw`text-red-500`}>{errors.last_name}</Text>}</Text>
                <Text style={[tw`text-white py-2`, { fontFamily: "PoppinsRegular" }]}>Referral code(Optional)</Text>
                <TextInput
                    placeholder="Enter code"
                    placeholderTextColor="white"
                    style={[tw` h-12 rounded-md px-4 mb-4 text-white`, { backgroundColor: "#1F2937" }]}
                    onChange={event => setSignUpData({ ...signUpData, referralCode: event.nativeEvent.text })}
                />
            </View>
            <TouchableOpacity
                style={tw`bg-green-700 py-3 mb-4  rounded-md `}
                onPress={() => signUp()}
            >
                {isLoading ? <ActivityIndicator size="small" color="white" /> : <Text style={[tw`text-white text-center text-lg`, { fontFamily: "PoppinsRegular" }]}>Create an account</Text>}
            </TouchableOpacity>
        </View>
    )
}

const { height: screenHeight } = Dimensions.get("window");

export default SignupScreenTwo;