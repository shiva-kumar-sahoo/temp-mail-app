import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import EmailScreen from "./screens/EmailScreen";
import InboxScreen from "./screens/InboxScreen";
import OtherScreen from "./screens/OtherScreen";

import { MaterialCommunityIcons, Feather } from "@expo/vector-icons/";

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
        component={InboxScreen}
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
