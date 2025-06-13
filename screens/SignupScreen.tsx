import { Text, View, TextInput, Dimensions, Touchable, TouchableOpacity, ActivityIndicator } from "react-native"
import { useState } from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import tw from "tailwind-react-native-classnames";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import axios from "axios";
import { SignUpData } from "../types/type";
import { ScrollView } from "react-native";
import { validateSignupForm } from "@/utils/utils";
import { backendApi } from "@/api/axiosInstance";
const SignupScreen = () => {

  const [isLoading, setIsLoading] = useState<boolean | null>(false);

  const [requestErr, setRequestErr] = useState<string | null>(null);

  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const router = useRouter();

  const [signUpData, setSignUpData] = useState<SignUpData>({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
    referralCode: ""
  });

  const validateForm = validateSignupForm(signUpData);

  const token = 'forbiddenlandofbad'

  const signUp = async () => {
    try {
      setIsLoading(true);
      if (Object.keys(validateForm).length === 0) {
        const response = await backendApi.post("/user/register", {
          name: signUpData?.name,
          email: signUpData?.email,
          password: signUpData?.password,
          phonenumber: signUpData?.phonenumber
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        })


        if (response.status === 201 || response.status === 200) {
          const responseTwo = await backendApi.post("/auth/request-otp", {
            email: signUpData?.email
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

        }
        router.push({
          pathname: '/VerifyOtp',
          params: {
            email: response.data.email
          }
        });
        return;
      }
    } catch (error: any) {
      setRequestErr(error.message || "An error occurred during sign up");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ScrollView style={[tw`px-4 `, { backgroundColor: "#111827" }, { height: screenHeight }]}>
      <View style={tw`bg-white h-8 w-8 flex mt-10 items-center justify-center rounded-full`}>
        <Entypo onPress={() => router.push("/")} name="chevron-left" size={24} color="black" />
      </View>
      <Text style={[tw`text-white text-2xl py-3`, { fontFamily: "PoppinsRegular" }]}>Let's get started <MaterialCommunityIcons name="party-popper" size={24} color="#FFD700" /></Text>
      <Text style={[tw`text-white`, { fontFamily: "PoppinsRegular" }]}>Register to start saving and investing with Impulse!</Text>
      <View style={tw`my-4`}>
        <Text style={[tw`text-white py-2`, { fontFamily: "PoppinsRegular" }]}>First & Last Name</Text>
        <TextInput
          placeholder="John Doe"
          placeholderTextColor="white"
          style={[tw` h-12 rounded-md px-4  text-white`, { backgroundColor: "#1F2937" }]}
          onChange={event => setSignUpData({ ...signUpData, name: event.nativeEvent.text })}
        />
        <Text>{validateForm.name && <Text style={tw`text-red-500`}>{validateForm.name}</Text>}</Text>
        <Text style={[tw`text-white py-2`, { fontFamily: "PoppinsRegular" }]}>Email</Text>
        <TextInput
          placeholder="Johndoe@gmail.com"
          placeholderTextColor="white"
          style={[tw` h-12 rounded-md px-4  text-white`, { backgroundColor: "#1F2937" }]}
          onChange={event => setSignUpData({ ...signUpData, email: event.nativeEvent.text })}
        />
        <Text>{validateForm.email && <Text style={tw`text-red-500`}>{validateForm.email}</Text>}</Text>
        <Text style={[tw`text-white py-2`, { fontFamily: "PoppinsRegular" }]}>Phone number</Text>
        <TextInput
          placeholder="07012345678"
          placeholderTextColor="white"
          style={[tw` h-12 rounded-md px-4  text-white`, { backgroundColor: "#1F2937" }]}
          onChange={event => setSignUpData({ ...signUpData, phonenumber: event.nativeEvent.text })}
        />
        <Text>{validateForm.phonenumber && <Text style={tw`text-red-500`}>{validateForm.phonenumber}</Text>}</Text>
        <Text style={[tw`text-white py-2`, { fontFamily: "PoppinsRegular" }]}>Password</Text>
        <TextInput
          placeholder="********"
          placeholderTextColor="white"
          style={[tw` h-12 rounded-md px-4  text-white`, { backgroundColor: "#1F2937" }]}
          onChange={event => setSignUpData({ ...signUpData, password: event.nativeEvent.text })}
        />
        <Text>{validateForm.password && <Text style={tw`text-red-500`}>{validateForm.password}</Text>}</Text>
        <Text style={[tw`text-white py-2`, { fontFamily: "PoppinsRegular" }]}>Confirm password</Text>
        <TextInput
          placeholder="********"
          placeholderTextColor="white"
          style={[tw` h-12 rounded-md px-4  text-white`, { backgroundColor: "#1F2937" }]}
          onChange={event => setSignUpData({ ...signUpData, confirmPassword: event.nativeEvent.text })}
        />
        <Text>{validateForm.confirmPassword && <Text style={tw`text-red-500`}>{validateForm.confirmPassword}</Text>}</Text>
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
    </ScrollView>
  )
}

const { height: screenHeight } = Dimensions.get("window");

export default SignupScreen;