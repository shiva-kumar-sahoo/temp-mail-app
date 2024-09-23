import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons/";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const InboxSceen = () => {
  const [mails, setMails] = useState([1]);
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <View className="flex items-center justify-center bg-[#16ca58] pt-8 pb-4">
        <Text className="text-white text-xl font-semibold">Inbox</Text>
      </View>
      {mails.length === 0 ? (
        <View className="flex items-center justify-center px-4 mt-10">
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
            <Pressable className="flex flex-row items-center space-x-4 w-full mt-4 px-8 py-2 border-2 border-gray-300 rounded-xl">
              <View>
                <Ionicons name="refresh" size={24} color="black" />
              </View>
              <View className="flex">
                <Text className="text-base font-semibold text-center">
                  REFRESH
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex items-center justify-center mt-10 px-4">
            <Pressable
              className="flex flex-row items-center space-x-4 w-full mt-4 px-6 py-4 border-2 border-gray-300 rounded-xl"
              onPress={() => navigation.navigate("InboxMailScreen")}
            >
              <View className="flex-1">
                <View className="my-2">
                  <Text
                    className="text-xl font-semibold"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Application for leave
                  </Text>
                </View>
                <View className="mt-1">
                  <Text className="text-base text-[#16ca58] ml-auto">
                    Sep 24, 2024 12:57:43 AM
                  </Text>
                </View>
                <View className="mt-1">
                  <Text
                    className="text-base text-gray-500"
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    Body Message Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum perspiciatis nihil nulla maiores
                    soluta optio, alias similique, fugiat accusantium ipsam
                    eaque adipisci, odio ab voluptates explicabo. Labore
                    nesciunt vel illo.
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default InboxSceen;
