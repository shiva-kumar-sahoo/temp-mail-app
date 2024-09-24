import { View, Text, Image, Pressable, ToastAndroid } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons/";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Clipboard from "expo-clipboard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EmailScreen = () => {
  const [tempMailAddress, setTempMailAddress] = useState("Generating ...");
  const genEmail = async () => {
    const emailAddress = await AsyncStorage.getItem("email");
    if (emailAddress) {
      setTempMailAddress(emailAddress);
    } else {
      const response = await axios.get(
        "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
      );
      setTempMailAddress(response.data[0]);
      AsyncStorage.setItem("email", response.data[0]);
    }
  };

  const handleCopyToClipBoard = async () => {
    await Clipboard.setStringAsync(tempMailAddress);
    ToastAndroid.show("Copied to Clipboard", ToastAndroid.SHORT);
  };

  const handleGetNewEmail = async () => {
    await genEmail();
  };
  useEffect(() => {
    genEmail();
  }, []);
  return (
    <View className="flex-1">
      <View className="flex items-center justify-center bg-[#16ca58] pt-8 pb-4">
        <Text className="text-white text-xl font-semibold">Temp Email</Text>
      </View>
      <View className="flex items-center justify-center px-4">
        <View className="flex items-center justify-center p-4">
          <Text className="text-xl font-semibold">
            Your Temporary Email Address
          </Text>
        </View>
        <View
          className="flex items-center justify-center w-full h-52 mt-10 p-4 border-2 border-gray-300 rounded-xl bg-white"
          style={{ elevation: 10 }}
        >
          <View className="flex items-center justify-center">
            <Image
              source={require("../assets/mail.png")}
              className="w-16 h-16"
            />
          </View>
          <View className="mt-2">
            <Text className="text-xl font-semibold">{tempMailAddress}</Text>
          </View>
          <View className="mt-1">
            <Text className="text-sm text-gray-500">
              Emails can be used for long time.
            </Text>
          </View>
        </View>
        <View className="flex items-center justify-center mt-10">
          <Pressable
            className="flex flex-row items-center space-x-4 w-full mt-4 px-8 py-4 border-2 border-gray-300 rounded-xl"
            onPress={handleCopyToClipBoard}
          >
            <View>
              <Ionicons name="copy" size={24} color="#1aaae8" />
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-center">
                COPY TO CLIPBOARD
              </Text>
            </View>
          </Pressable>
          <Pressable
            className="flex flex-row items-center space-x-4 w-full mt-4 px-8 py-4 border-2 border-gray-300 rounded-xl"
            onPress={handleGetNewEmail}
          >
            <View>
              <MaterialIcons name="delete" size={30} color="#ed2626" />
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-center">
                GET A NEW EMAIL
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default EmailScreen;
