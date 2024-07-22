import React, { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import {
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import Login from "./screens/LoginScreen";
import Keyboard from "./screens/Keyboard";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditProfile";
import ResourcesScreen from "./screens/ResourcesScreen";
import SettingsScreen from "./screens/SettingScreen";
import MessageGroupScreen from "./screens/MessageGroupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { FONTS } from "./constants/fonts";

const Tab = createBottomTabNavigator();

function App() {
  const [fontsLoaded] = useFonts(FONTS);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
  {
    /* <StatusBar
          barStyle={isDarkMode ? "light-content" : "dark-content"}
          backgroundColor={backgroundStyle.backgroundColor}
        /> */
  }
}

//ApplicationID: 1C610E7A-2EF2-4DE5-954E-A5CFE31D7905

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "#ffa62e",
        tabBarActiveTintColor: "#000",
        tabBarInactiveBackgroundColor: "#f71d3d",
        tabBarInactiveTintColor: "#fff",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Profile"
        component={EditProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Resources"
        component={ResourceScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="bookshelf" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesGroupScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="message1" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="setting" size={24} color="black" />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Keyboard"
        component={KeyboardScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="setting" size={24} color="black" />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

// const KeyboardScreen = () => {
//   return <Keyboard />;
// };

const EditProfileScreen = () => {
  return <EditProfile />;
};

const ResourceScreen = () => {
  return <ResourcesScreen />;
};

const SettingScreen = () => {
  return <SettingsScreen />;
};

const ProfileScreen = () => {
  return <Profile />;
};

const MessagesGroupScreen = () => {
  return <MessageGroupScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default App;
