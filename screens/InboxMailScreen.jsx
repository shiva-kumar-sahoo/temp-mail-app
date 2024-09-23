import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const InboxMailScreen = () => {
  return (
    <View>
      <View className="flex items-center justify-center bg-[#16ca58] pt-8 pb-4">
        <Text className="text-white text-xl font-semibold">Message</Text>
      </View>
      <ScrollView
        className="mt-4 px-2 mb-20"
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
            <Text className="text-base font-semibold">Sender Name</Text>
            <Text className="text-sm text-gray-500">emai@example.com</Text>
          </View>
        </View>
        <View className="mt-2 border border-gray-300"></View>
        <View className="flex flex-row items-center space-x-4 mt-2">
          <Text className="text-lg font-semibold text-gray-500">Date :</Text>
          <Text className="text-base text-gray-500">
            Sep 24, 2024 12:57:43 AM
          </Text>
        </View>
        <View className="flex flex-row items-center space-x-4 mt-2">
          <Text className="text-lg font-semibold text-gray-500">Subject :</Text>
          <Text
            className="text-base text-gray-500"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Application for leave
          </Text>
        </View>
        <View className="mt-4">
          <Text className="text-lg font-semibold text-gray-500">Body:</Text>
          <View className="mt-2 bg-gray-100 ">
            <Text className="text-base font-semibold px-2">
              Body Message Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ipsum perspiciatis nihil nulla maiores soluta optio, alias
              similique, fugiat accusantium ipsam eaque adipisci, odio ab
              voluptates explicabo. Labore nesciunt vel illo. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Porro dolores obcaecati
              labore hic adipisci enim deserunt voluptate laudantium veniam
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default InboxMailScreen;
