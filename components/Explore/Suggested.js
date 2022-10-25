import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Suggested = ({ user }) => {
	const { currentUser } = useSelector((state) => state.user);

	const navigation = useNavigation()

	return (
		<View style={tw`flex px-2 mt-3 flex-row items-center justify-between`}>
			<Pressable
				onPress={() =>
					user._id === currentUser._id
						? navigation.navigate("Profile")
						: navigation.navigate("Dprofile", { id: user._id })
				}
				style={tw`flex-row items-center`}
			>
				<View style={tw`h-[13] w-[13] border-2 border-blue-500 rounded-full`}>
					<Image
						style={{ width: "100%", height: "100%", borderRadius: 100 }}
						ssource={{ uri: user.profile }}
					/>
				</View>
				<View style={tw`flex ml-3 flex-col`}>
					<Text style={tw`font-semibold`}>{user.fullname}</Text>
					<Text>@{user.username}</Text>
				</View>
			</Pressable>
			<Pressable>
				<Text style={[tw`text-blue-600`]}>Follow</Text>
			</Pressable>
		</View>
	);
};

export default Suggested;
