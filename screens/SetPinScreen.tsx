import Entypo from "@expo/vector-icons/Entypo";
import { router, useRouter } from "expo-router";
import { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  View,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import tw from "tailwind-react-native-classnames";
import { TextInput } from "react-native";
import { useFonts } from "expo-font";
import { TouchableOpacity } from "react-native";
import axios from "axios";

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 20 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
    borderRadius: 10,
  },
  focusCell: {
    borderColor: "#000",
  },
});

const CELL_COUNT = 6;

const SetPinScreen = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

    const router = useRouter();

      const verifyOtp = async () => {
        const response = await axios.post("http://localhost:3000/auth/verify-otp", {
          email: "devicedropp@gmail.com",
          otp: "223394"
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        console.log(response);
        router.push("/Login")
      }
  return (
    <View style={[tw`px-4 bg-white`, { height: "100%" }]}>
      <View
        style={tw`bg-gray-100 h-8 w-8 flex mt-10  items-center justify-center rounded-full`}
      >
        <Entypo
          onPress={() => router.push("/Signup")}
          name="chevron-left"
          size={24}
          color="gray"
        />
      </View>
      <Text style={[tw`text-2xl pt-4`, { fontFamily: "PoppinsRegular" }]}>
        Create your 6-Digit Pin
      </Text>
      <Text style={[tw`text-gray-400 pt-2`, { fontFamily: "PoppinsRegular" }]}>
        Create a pin for Impulse account
      </Text>
      <SafeAreaView style={styles.root}>
        <CodeField
          InputComponent={TextInput}
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.OS === "android" ? "sms-otp" : "one-time-code"}
          testID="my-code-input"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <TouchableOpacity
          style={tw`bg-green-700 py-3 rounded-md mt-4`}
          onPress={() => verifyOtp()}  
        >
          <Text
            style={[
              tw`text-white text-center text-lg`,
              { fontFamily: "PoppinsRegular" },
            ]}
          >
            Set Pin
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default SetPinScreen;
