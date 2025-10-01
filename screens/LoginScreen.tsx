import { LoginData } from "@/types/type";
import Entypo from "@expo/vector-icons/Entypo";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { validateLoginForm } from "@/utils/utils";
import { useAuth } from "@/context/AuthContext";
import Toast from "react-native-toast-message";
import { backendApi } from "@/api/axiosInstance";
const LoginScreen = () => {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const [errors, setErrors] = useState<any>({});

  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState<boolean | null>(false);

  const [requestErr, setRequestErr] = useState<string | null>(null);

  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const validateLogin = () => validateLoginForm(loginData);


  const loginUser = async () => {
    try {
      const validationErrors = validateLogin();
      setIsLoading(true);
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        const response = await backendApi.post("/auth/login", {
          email: loginData.email,
          password: loginData.password
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        })

        login({
          id: response.data.id,
          email: response.data.email,
          phonenumber: response.data.phonenumber,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
        },
          response.data.token
        )
        console.log(response.data.token)
        router.push("/Dashboard")
      }
    } catch (error: any) {
      console.log(error?.response?.data?.message);
      console.log(error.status)
      if (error.status === 400 || 401) {
        // toast.error("Wrong email or password")
        // setRequestErr('Wrong email or password');
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: error?.response?.data?.message
              });
      } else {
        // toast.error(error.message)
        // setRequestErr(error.message || "An error occurred during login");
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: `${error?.response?.data?.message} "An error occurred during login"`
              });
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={[tw`px-4 bg-gray-900`, { height: screenHeight }]}>
      <Toast />
      <View
        style={tw`bg-gray-100 h-8 w-8 flex mt-10 items-center justify-center rounded-full`}
      >
        <Entypo
          onPress={() => router.push("/")}
          name="chevron-left"
          size={24}
          color="gray"
        />
      </View>
      <Text
        style={[tw`text-2xl pt-4 text-white`, { fontFamily: "PoppinsRegular" }]}
      >
        Login with your number
      </Text>
      <Text style={[tw`text-gray-400 pt-2`, { fontFamily: "PoppinsRegular" }]}>
        Enter the number and pin used to sign up on Impulse
      </Text>

      <Text style={[tw`text-white pt-2`, { fontFamily: "PoppinsRegular" }]}>
        Email
      </Text>
      <TextInput
        placeholder="johndoe@gmail.com"
        placeholderTextColor="white"
        style={[
          tw` h-12 rounded-md px-4 mb-4 text-white bg-gray-800 mt-3 mb-2`,
        ]}
        onChangeText={(text) =>
          setLoginData({ ...loginData, email: text })
        }
      />
      <Text>{errors.email && <Text style={tw`text-red-500`}>{errors.email}</Text>}</Text>
      <Text style={[tw`text-white pt-2`, { fontFamily: "PoppinsRegular" }]}>
        Pin
      </Text>
      <TextInput
        placeholder="******"
        placeholderTextColor="white"
        style={[tw` h-12 rounded-md px-4 mb-4 text-white bg-gray-800 my-2`]}
        onChangeText={(text) =>
          setLoginData({ ...loginData, password: text })
        }
      />
      <Text>{errors.password && <Text style={tw`text-red-500`}>{errors.password}</Text>}</Text>
      <TouchableOpacity
      onPress={() => router.push("/Dashboard")}
        // onPress={() => loginUser()}
        style={tw`bg-green-500 mt-4 h-12 rounded-md items-center justify-center`}
      >{isLoading ?
        <ActivityIndicator size="small" color="white" /> :
        <Text style={[tw`text-white text-lg`, { fontFamily: "PoppinsRegular" }]}>
          Login
        </Text>
        }
      </TouchableOpacity>
      <Text style={tw`text-red-500 mt-2 text-center`}>
        {requestErr}
      </Text>
    </View>
  );
};

const { height: screenHeight } = Dimensions.get("window");

export default LoginScreen;
