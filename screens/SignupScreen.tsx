import { Text, View, TextInput, Dimensions, Touchable, TouchableOpacity, ActivityIndicator } from "react-native"
import { useState } from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import tw from "tailwind-react-native-classnames";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { SignUpData } from "../types/type";
import { ScrollView } from "react-native";
import { validateSignupForm } from "@/utils/utils";
import { backendApi } from "@/api/axiosInstance";
import Toast from "react-native-toast-message";
import { useAuth } from "@/context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSignupStore } from "@/store/store";
const SignupScreen = () => {
  const { setFormData } = useSignupStore();

  const [isLoading, setIsLoading] = useState<boolean | null>(false);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { login } = useAuth();

  const [requestErr, setRequestErr] = useState<string | null>(null);

  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const router = useRouter();

  const [signUpData, setSignUpData] = useState({
    email: "",
    phonenumber: "",
    password: "",
    confirmPassword: ""
  });

const validateForm = () => validateSignupForm(signUpData);

    const handleNext = async () => {


    const validationErrors = validateForm();
    setErrors(validationErrors);
    setIsLoading(true)
    if (Object.keys(validateForm()).length === 0) {
      setFormData(signUpData);
      router.push("/SignupTwo")
    }
    setIsLoading(false)
  };

 
  return (
    <ScrollView style={[tw`px-4 `, { backgroundColor: "#111827" }, { height: screenHeight }]}>
      <Toast />
      <View style={tw`bg-white h-8 w-8 flex mt-10 items-center justify-center rounded-full`}>
        <Entypo onPress={() => router.push("/")} name="chevron-left" size={24} color="black" />
      </View>
      <Text style={[tw`text-white text-2xl py-3`, { fontFamily: "PoppinsRegular" }]}>Let's get started <MaterialCommunityIcons name="party-popper" size={24} color="#FFD700" /></Text>
      <Text style={[tw`text-white`, { fontFamily: "PoppinsRegular" }]}>Register to start saving and investing with Impulse!</Text>
      <View style={tw`my-4`}>
        <Text style={[tw`text-white py-2`, { fontFamily: "PoppinsRegular" }]}>Email</Text>
        <TextInput
          placeholder="Johndoe@gmail.com"
          placeholderTextColor="white"
          style={[tw` h-12 rounded-md px-4  text-white`, { backgroundColor: "#1F2937" }]}
          onChange={event => setSignUpData({ ...signUpData, email: event.nativeEvent.text })}
        />
        <Text>{errors.email && <Text style={tw`text-red-500`}>{errors.email}</Text>}</Text>
        <Text style={[tw`text-white py-2`, { fontFamily: "PoppinsRegular" }]}>Phone number</Text>
        <TextInput
          placeholder="07012345678"
          placeholderTextColor="white"
          style={[tw` h-12 rounded-md px-4  text-white`, { backgroundColor: "#1F2937" }]}
          onChange={event => setSignUpData({ ...signUpData, phonenumber: event.nativeEvent.text })}
        />
        <Text>{errors.phonenumber && <Text style={tw`text-red-500`}>{errors.phonenumber}</Text>}</Text>
        <Text style={[tw`text-white py-2`, { fontFamily: "PoppinsRegular" }]}>Password</Text>
        <TextInput
          placeholder="********"
          placeholderTextColor="white"
          style={[tw` h-12 rounded-md px-4  text-white`, { backgroundColor: "#1F2937" }]}
          onChange={event => setSignUpData({ ...signUpData, password: event.nativeEvent.text })}
        />
        <Text>{errors.password && <Text style={tw`text-red-500`}>{errors.password}</Text>}</Text>
        <Text style={[tw`text-white py-2`, { fontFamily: "PoppinsRegular" }]}>Confirm password</Text>
        <TextInput
          placeholder="********"
          placeholderTextColor="white"
          style={[tw` h-12 rounded-md px-4  text-white`, { backgroundColor: "#1F2937" }]}
          onChange={event => setSignUpData({ ...signUpData, confirmPassword: event.nativeEvent.text })}
        />
        <Text>{errors.confirmPassword && <Text style={tw`text-red-500`}>{errors.confirmPassword}</Text>}</Text>
      </View>
      <TouchableOpacity
        style={tw`bg-green-700 py-3 mb-4  rounded-md `}
        onPress={() => handleNext()}
      >
        {isLoading ? <ActivityIndicator size="small" color="white" /> : <Text style={[tw`text-white text-center text-lg`, { fontFamily: "PoppinsRegular" }]}>Submit</Text>}
      </TouchableOpacity>
    </ScrollView>
  )
}

const { height: screenHeight } = Dimensions.get("window");

export default SignupScreen;