import { Text, View, TextInput, Dimensions, Touchable, TouchableOpacity } from "react-native"
import { useState } from "react"; 
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import tw from "tailwind-react-native-classnames";
import { useFonts } from "expo-font";
import {  useRouter } from "expo-router";
const SignupScreen = () => {

  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const router = useRouter();

  const [formData, setFormData] = useState({});
  return (
    <View style={[tw`px-4`,{backgroundColor:"#060320"}, { height: screenHeight }]}>
      <View  style={tw`bg-white h-8 w-8 flex mt-3 items-center justify-center rounded-full`}>
      <Entypo  onPress={() => router.push("/")} name="chevron-left" size={24} color="black" />
      </View>
      <Text style={[tw`text-white text-2xl py-3`, {fontFamily: "PoppinsRegular"}]}>Let's get started <MaterialCommunityIcons name="party-popper" size={24} color="#FFD700" /></Text>
      <Text style={[tw`text-white`, {fontFamily: "PoppinsRegular"}]}>Register to start saving and investing with Impulse!</Text>
      <View style={tw`my-4`}>
        <Text style={[tw`text-white pb-2`, {fontFamily: "PoppinsRegular"}]}>First & Last Name</Text>
        <TextInput
        placeholder="John Doe"
        placeholderTextColor="white"
        style={[tw` h-12 rounded-md px-4 mb-4 text-white`, {backgroundColor:"#18152d"}]}
        />
          <Text style={[tw`text-white pb-2`, {fontFamily: "PoppinsRegular"}]}>Email</Text>
        <TextInput
        placeholder="Johndoe@gmail.com"
        placeholderTextColor="white"
         style={[tw` h-12 rounded-md px-4 mb-4 text-white`, {backgroundColor:"#18152d"}]}
        />
          <Text style={[tw`text-white pb-2`, {fontFamily: "PoppinsRegular"}]}>Phone number</Text>
        <TextInput
        placeholder="07012345678"
        placeholderTextColor="white"
         style={[tw` h-12 rounded-md px-4 mb-4 text-white`, {backgroundColor:"#18152d"}]}
        />
          <Text style={[tw`text-white pb-2`, {fontFamily: "PoppinsRegular"}]}>Password</Text>
        <TextInput
        placeholder="********"
        placeholderTextColor="white"
         style={[tw` h-12 rounded-md px-4 mb-4 text-white`, {backgroundColor:"#18152d"}]}
        />
          <Text style={[tw`text-white pb-2`, {fontFamily: "PoppinsRegular"}]}>Confirm password</Text>
        <TextInput
        placeholder="********"
        placeholderTextColor="white"
         style={[tw` h-12 rounded-md px-4 mb-4 text-white`, {backgroundColor:"#18152d"}]}
        />
          <Text style={[tw`text-white pb-2`, {fontFamily: "PoppinsRegular"}]}>Referral code(Optional)</Text>
        <TextInput
        placeholder="Enter code"
        placeholderTextColor="white"
         style={[tw` h-12 rounded-md px-4 mb-4 text-white`, {backgroundColor:"#18152d"}]}
        />
      </View>
         <TouchableOpacity
              style={tw`bg-green-700 py-3 rounded-md `}
              onPress={() => router.push("/Signup")}
            >
              <Text style={[tw`text-white text-center text-lg`, {fontFamily: "PoppinsRegular"}]}>Create an account</Text>
            </TouchableOpacity>
    </View>
  )
}

const { height: screenHeight } = Dimensions.get("window");

export default SignupScreen;