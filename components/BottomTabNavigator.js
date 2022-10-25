import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native-paper";
import { usePosts } from "../contexts/PostContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import { useAuth } from "../contexts/AuthContext";
import Messages from "../screens/Messages";
import Account from "../screens/Account";
import { Platform, Keyboard } from 'react-native';
import { useState, useEffect } from "react";
import Explore from "../screens/Explore";

const BottomTabNavigator = () => {
  const { user } = useAuth();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let keyboardEventListeners;
    if (Platform.OS === 'android') {
      keyboardEventListeners = [
        Keyboard.addListener('keyboardDidShow', () => setVisible(false)),
        Keyboard.addListener('keyboardDidHide', () => setVisible(true)),
      ];
    }
    return () => {
      if (Platform.OS === 'android') {
        keyboardEventListeners &&
          keyboardEventListeners.forEach(eventListener => eventListener.remove());
      }
    };
  }, []);

	const BottomTab = createBottomTabNavigator();

	return (
			<BottomTab.Navigator
				initialRouteName={user?'Home':'Login'}
				screenOptions={{
					tabBarActiveTintColor: "blue",
					tabBarStyle: {
						position: "absolute",
						bottom: 0,
						display: visible ? "flex" : "none",
					}
				}}
			>
				<BottomTab.Screen
					name="Home"
					component={Home}
					options={() => ({
						title: "Home",
						tabBarIcon: ({color}) => <Ionicons name="home" style={tw`text-2xl`} color={color} />,
						headerShown: false,
					})}
				/>
				<BottomTab.Screen
					name="Messages"
					component={Messages}
					options={() => ({
						title: "Messages",
						tabBarIcon: ({color}) => <Ionicons name="chatbox" style={tw`text-2xl`} color={color} />,
						headerShown: false,
					})}
				/>
				<BottomTab.Screen
					name="Explore"
					component={Explore}
					options={() => ({
						title: "Explore",
						tabBarIcon: ({color}) => <FontAwesome5 name="wpexplorer" style={tw`text-2xl`} color={color} />,
						headerShown: false,
					})}
				/>
				<BottomTab.Screen
					name="Notifications"
					component={Notifications}
					options={() => ({
						title: "Notifications",
						tabBarIcon: ({color}) => <FontAwesome5 name="bell" style={tw`text-2xl`} color={color} />,
						headerShown: false,
					})}
				/>
				<BottomTab.Screen
					name="Profile"
					component={Account}
					options={() => ({
						title: "Profile",
						tabBarIcon: ({color}) => <FontAwesome5 name="user" style={tw`text-2xl`} color={color} />,
						headerShown: false,
					})}
				/>
			</BottomTab.Navigator>
	);
};

export default BottomTabNavigator;

