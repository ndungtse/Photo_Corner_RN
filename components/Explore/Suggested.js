import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import tw from 'twrnc'

const Suggested = ({user}) => {
	return (
		<View style={tw`flex mx-2 flex-col items-center`}>
			<Image
				style={[
					tw`rounded-full border-2 border-blue-400`,
					{ width: 70, height: 70 },
				]}
				source={{uri: user.profile}}
			/>
			<Text>{user.username}</Text>
			<Pressable>
				<Text style={tw`text-blue-400`}>Follow</Text>
			</Pressable>
		</View>
	);
};

export default Suggested;
