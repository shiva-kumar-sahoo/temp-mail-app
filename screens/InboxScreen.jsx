import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons/";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import CircularTimer from "../components/CircularTimer";

const InboxSceen = () => {
  const [mails, setMails] = useState([]);
  const [countDownTimer, setCountDownTimer] = useState(15);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const fetchMails = async () => {
    const emailAddress = await AsyncStorage.getItem("email");
    if (emailAddress) {
      const user = emailAddress.split("@")[0];
      const domain = emailAddress.split("@")[1];
      const response = await axios.get(
        `https://www.1secmail.com/api/v1/?action=getMessages&login=${user}&domain=${domain}`
      );
      setMails(response.data);
      setRefreshing(false);
    }
  };
  const refreshMails = async () => {
    setRefreshing(true);
    fetchMails();
    setCountDownTimer(15);
  };

  useEffect(() => {
    fetchMails();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (countDownTimer <= 0) {
        setRefreshing(true);
        fetchMails();
        setCountDownTimer(15);
      } else {
        setCountDownTimer(countDownTimer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownTimer]);
  return (
    <View className="flex-1">
      <View className="flex items-center justify-center bg-[#16ca58] pt-8 pb-4">
        <Text className="text-white text-xl font-semibold">Inbox</Text>
      </View>
      <Pressable
        className="flex items-center ml-auto mr-6 mt-4 w-10 h-10 rounded-full bg-white"
        onPress={() => {
          fetchMails();
          setCountDownTimer(10);
        }}
      >
        <CircularTimer countDownTimer={countDownTimer} />
      </Pressable>
      {mails.length === 0 ? (
        <View className="flex items-center justify-center px-4 mt-2">
          <View className="p-4 my-2">
            <Image
              source={require("../assets/inbox.png")}
              className="w-24 h-24"
            />
          </View>
          <View className="pt-4">
            <Text className="text-xl font-semibold">Your Inbox is empty</Text>
          </View>
          <View className="mt-1">
            <Text className="text-sm text-gray-500">
              The app is checking your inbox for new emails, or you can check
              manually by pressing refresh button.
            </Text>
          </View>
          <View className="mt-8">
            <Pressable
              className="flex flex-row items-center w-full mt-4 px-8 py-3 border-2 border-gray-300 rounded-xl"
              onPress={fetchMails}
            >
              <View className="flex w-44 items-center">
                {refreshing ? (
                  <View className="flex flex-row items-center space-x-4">
                    <ActivityIndicator size="small" color="#00ff00" />
                    <Text className="flex-1 text-lg font-semibold ">
                      REFRESHING
                    </Text>
                  </View>
                ) : (
                  <View className="flex flex-row items-center space-x-4">
                    <Ionicons name="refresh" size={26} color="black" />
                    <Text className="flex-1 text-lg font-semibold ">
                      REFRESH
                    </Text>
                  </View>
                )}
              </View>
            </Pressable>
          </View>
        </View>
      ) : (
        <FlatList
          data={mails}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          refreshing={refreshing}
          onRefresh={refreshMails}
          renderItem={({ item }) => (
            <View className="flex items-center justify-center px-4 mt-2">
              <Pressable
                className="flex flex-row items-center space-x-4 w-full mt-4 px-6 py-2 border-2 border-gray-300  bg-white rounded-xl"
                style={{ elevation: 5 }}
                onPress={() =>
                  navigation.navigate("InboxMailScreen", { id: item.id })
                }
              >
                <View className="flex-1">
                  <View className="flex flex-row items-center justify-between mt-1">
                    <Image
                      source={require("../assets/mail-msg.png")}
                      className="w-7 h-7"
                    />
                    <Text className="text-base  text-gray-500 ml-auto">
                      {item?.date}
                    </Text>
                  </View>
                  <View className="flex flex-row items-start mt-2">
                    <Text className="text-lg text-gray-400">From: </Text>
                    <Text className="text-lg font-semibold text-[#16ca58]">
                      {item?.from}
                    </Text>
                  </View>
                  <View className="flex flex-row items-start my-1">
                    <Text className="text-base text-gray-400">Subject: </Text>
                    <Text
                      className="text-base font-normal"
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {item?.subject ? item.subject : "No Subject"}
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default InboxSceen;
