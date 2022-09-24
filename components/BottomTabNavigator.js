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

const BottomTabNavigator = () => {
  const { user } = useAuth();

	const BottomTab = createBottomTabNavigator();

	return (
			<BottomTab.Navigator
				initialRouteName={user?'Home':'Login'}
				screenOptions={{
					tabBarActiveTintColor: "blue",
				}}
			>
				<BottomTab.Screen
					name="Home"
					component={Home}
					options={() => ({
						title: "Home",
						tabBarIcon: () => <Ionicons name="home" style={tw`text-2xl`} />,
						headerShown: false,
					})}
				/>
				<BottomTab.Screen
					name="Messages"
					component={Messages}
					options={() => ({
						title: "Messages",
						tabBarIcon: () => <Ionicons name="chatbox" style={tw`text-2xl`} />,
						headerShown: false,
					})}
				/>
				<BottomTab.Screen
					name="Notifications"
					component={Notifications}
					options={() => ({
						title: "Notifications",
						tabBarIcon: () => <FontAwesome5 name="bell" style={tw`text-2xl`} />,
						headerShown: false,
					})}
				/>
				<BottomTab.Screen
					name="Profile"
					component={Account}
					options={() => ({
						title: "Profile",
						tabBarIcon: () => <FontAwesome5 name="user" style={tw`text-2xl`} />,
						headerShown: false,
					})}
				/>
			</BottomTab.Navigator>
	);
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
	nav: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		borderTopWidth: 0.1,
		justifyContent: "center",
		borderColor: "#10151f34",
		height: 60,
		alignItems: "center",
	},
});
