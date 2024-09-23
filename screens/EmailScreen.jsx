import { View, Text, Image, Pressable } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons/";

const EmailScreen = () => {
  return (
    <View className="flex-1">
      <View className="flex items-center justify-center bg-[#16ca58] pt-8 pb-4">
        <Text className="text-white text-xl font-semibold">Temp Email</Text>
      </View>
      <View className="flex items-center justify-center px-4">
        <View className="flex items-center justify-center p-4">
          <Text className="text-xl font-semibold">
            Your temporary email address
          </Text>
        </View>
        <View className="flex items-center justify-center w-full h-52 mt-10 p-4 border-2 border-gray-300 rounded-xl ">
          <View className="flex items-center justify-center">
            <Image
              source={require("../assets/mail.png")}
              className="w-16 h-16"
            />
          </View>
          <View className="mt-2">
            <Text className="text-xl font-semibold">nLXUQ@example.com</Text>
          </View>
          <View className="mt-1">
            <Text className="text-sm text-gray-500">
              Emails can be used for long time.
            </Text>
          </View>
        </View>
        <View className="flex items-center justify-center mt-10">
          <Pressable className="flex flex-row items-center space-x-4 w-full mt-4 px-8 py-4 border-2 border-gray-300 rounded-xl">
            <View>
              <Ionicons name="copy" size={24} color="#1aaae8" />
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-center">
                COPY TO CLIPBOARD
              </Text>
            </View>
          </Pressable>
          <Pressable className="flex flex-row items-center space-x-4 w-full mt-4 px-8 py-4 border-2 border-gray-300 rounded-xl">
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
