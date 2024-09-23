import { View, Text, Pressable } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons/";

const OtherScreen = () => {
  return (
    <View className="flex-1">
      <View className="flex items-center justify-center bg-[#16ca58] pt-8 pb-4">
        <Text className="text-white text-xl font-semibold">Other</Text>
      </View>
      <View>
        <Pressable className="flex flex-row items-center space-x-4 w-full mt-4 px-8 py-2">
          <View className="flex items-center justify-center p-2 rounded-lg bg-[#16ca58]">
            <Ionicons name="flag" size={28} color="white" />
          </View>
          <Text className="text-xl font-semibold">Change Language</Text>
        </Pressable>
        <Pressable className="flex flex-row items-center space-x-4 w-full mt-4 px-8 py-2">
          <View className="flex items-center justify-center p-2 rounded-lg bg-[#16ca58]">
            <Ionicons name="lock-closed" size={28} color="white" />
          </View>
          <Text className="text-xl font-semibold">Privacy Policy</Text>
        </Pressable>
        <Pressable className="flex flex-row items-center space-x-4 w-full mt-4 px-8 py-2">
          <View className="flex items-center justify-center p-2 rounded-lg bg-[#16ca58]">
            <Feather name="file-text" size={28} color="white" />
          </View>
          <Text className="text-xl font-semibold">Terms of Service</Text>
        </Pressable>
        <Pressable className="flex flex-row items-center space-x-4 w-full mt-4 px-8 py-2">
          <View className="flex items-center justify-center p-2 rounded-lg bg-[#16ca58]">
            <Ionicons name="bug" size={28} color="white" />
          </View>
          <Text className="text-xl font-semibold">Report a Problem</Text>
        </Pressable>
        <Pressable className="flex flex-row items-center space-x-4 w-full mt-4 px-8 py-2">
          <View className="flex items-center justify-center p-2 rounded-lg bg-[#16ca58]">
            <Ionicons name="share-social" size={28} color="white" />
          </View>
          <Text className="text-xl font-semibold">Share App</Text>
        </Pressable>
      </View>
      <View className="mt-10 border border-gray-300"></View>
      <View className="flex items-center justify-center px-4 mt-8">
        <View>
          <Text className="text-sm text-gray-500">
            Version 1.0.0 Copyright 2024
          </Text>
        </View>
        <View>
          <Text className="text-sm text-gray-500">Powered by 1SecMail</Text>
        </View>
        <View>
          <Pressable className="flex flex-row items-center space-x-2 w-full mt-4 px-8 py-2">
            <Text className="text-lg font-semibold">Developed by</Text>
            <Text className="text-lg text-[#16ca58] font-semibold">
              Shiva Kumar Sahoo
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default OtherScreen;
