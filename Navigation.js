import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EmailScreen from "./screens/EmailScreen";
import InboxScreen from "./screens/InboxScreen";
import OtherScreen from "./screens/OtherScreen";
import InboxMailScreen from "./screens/InboxMailScreen";

import { MaterialCommunityIcons, Feather } from "@expo/vector-icons/";

const InboxStack = createNativeStackNavigator();

const InboxStackScreen = () => {
  return (
    <InboxStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="InboxScreen"
    >
      <InboxStack.Screen name="InboxScreen" component={InboxScreen} />
      <InboxStack.Screen name="InboxMailScreen" component={InboxMailScreen} />
    </InboxStack.Navigator>
  );
};

const TabNavigation = createBottomTabNavigator();

const TabNavigationScreen = () => {
  return (
    <TabNavigation.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Email"
    >
      <TabNavigation.Screen
        name="Email"
        component={EmailScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="email" size={24} color={color} />
          ),
        }}
      />
      <TabNavigation.Screen
        name="Inbox"
        component={InboxStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="inbox" size={24} color={color} />
          ),
        }}
      />
      <TabNavigation.Screen
        name="Other"
        component={OtherScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="menu" size={24} color={color} />
          ),
        }}
      />
    </TabNavigation.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavigationScreen />
    </NavigationContainer>
  );
};
export default Navigation;
