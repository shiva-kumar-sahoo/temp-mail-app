import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons/";
import { useNavigation } from "@react-navigation/native";
import RenderHTML from "react-native-render-html";

const InboxMailScreen = ({ route }) => {
  const navigation = useNavigation();
  const id = route.params.id;
  const [mailMessage, setMailMessage] = useState({});
  const [refreshing, setRefreshing] = useState(true);
  const { width } = Dimensions.get("window");

  const fetchMailMessage = async () => {
    const emailAddress = await AsyncStorage.getItem("email");
    if (emailAddress) {
      const user = emailAddress.split("@")[0];
      const domain = emailAddress.split("@")[1];
      const response = await axios.get(
        `https://www.1secmail.com/api/v1/?action=readMessage&login=${user}&domain=${domain}&id=${id}`
      );
      setMailMessage(response.data);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMailMessage();
  }, []);
  return (
    <View>
      <View className="flex flex-row items-center bg-[#16ca58] pt-8 pb-4 px-4">
        <Ionicons
          name="chevron-back-outline"
          size={40}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <View className="flex-grow items-center">
          <Text className="text-white text-xl font-semibold">Message</Text>
        </View>
      </View>

      {refreshing ? (
        <View className="flex items-center justify-center h-full">
          <ActivityIndicator size={80} color="#00ff00" />
        </View>
      ) : (
        <ScrollView
          className="mt-4 px-6 mb-20"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex flex-row items-center space-x-4">
            <View className="flex items-center justify-center p-4 rounded-full w-16 h-16 bg-green-200">
              <Image
                source={require("../assets/robot.png")}
                className="w-10 h-10"
              />
            </View>
            <View>
              <Text
                className="text-lg font-semibold text-gray-500"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {mailMessage?.from}
              </Text>
            </View>
          </View>
          <View className="mt-2 border border-gray-300"></View>
          <View className="flex flex-row items-center space-x-4 mt-2">
            <Text className="text-lg font-semibold text-gray-500">Date :</Text>
            <Text className="text-base text-gray-500">{mailMessage?.date}</Text>
          </View>
          <View className="flex flex-row items-center space-x-4 mt-2">
            <Text className="text-lg font-semibold text-gray-500">
              Subject :
            </Text>
            <Text
              className="text-base text-gray-500"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {mailMessage?.subject ? mailMessage.subject : "No Subject"}
            </Text>
          </View>
          <View className="mt-4">
            <Text className="text-lg font-semibold text-gray-500">Body:</Text>
            <View className="mt-2 bg-gray-100 p-2 rounded-md">
              {mailMessage?.htmlBody ? (
                <RenderHTML
                  contentWidth={width}
                  source={{ html: mailMessage?.htmlBody }}
                />
              ) : (
                <Text className="text-base font-semibold">
                  {mailMessage?.textBody || "No content available"}
                </Text>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default InboxMailScreen;
