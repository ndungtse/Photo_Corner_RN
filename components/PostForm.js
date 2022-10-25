import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
// import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from "expo-image-picker";
import { usePosts } from "../contexts/PostContext";
import { ActivityIndicator, Colors } from "react-native-paper";

const PostForm = ({ setShowForm }) => {
	const { newPost, getPosts } = usePosts();
	const [caption, setCaption] = useState("");
	const [image, setImage] = useState(null);
	const [imageString, setImageString] = useState(null);
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState(null);

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			base64: true,
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 5],
			quality: 1,
		});

		console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
			setImageString("data:image/png;base64," + result.base64);
		}
	};

	const submitPost = async () => {
		setLoading(true);
		const isdone = await newPost(caption, imageString);
		if (!isdone.error) {
			setStatus("Post created successfully");
			console.log("done");
			setShowForm(false);
		} else {
			setStatus("something went wrong");
		}
		setLoading(false);
	};

	return (
		<View
			style={tw`px-3 pt-4 right-0 bottom-0 z-20 flex items-center justify-center absolute top-0 left-0 bg-black/50 `}
		>
			<Pressable
				onPress={() => setShowForm(false)}
				style={tw`absolute top-0 left-0 bottom-0 right-0 z-30`}
			></Pressable>
			<View style={tw`bg-white z-40 rounded-lg flex-col items-center w-[90%]`}>
				<Text style={tw`text-center mt-1`}>Post Something</Text>
				<Pressable
					style={tw`absolute right-1 top-1`}
					onPress={() => setShowForm(false)}
				>
					<AntDesign name="closecircleo" size={24} color="black" />
				</Pressable>
				<TextInput
					multiline
					numberOfLines={4}
					editable
					maxLength={400}
					onChangeText={(text) => setCaption(text)}
					value={caption}
					style={tw`border-2  border-gray-300 rounded-lg p-2 mt-2 w-11/12 h-[30%]`}
				/>
				{image && (
					<View style={tw`flex-row w-full justify-center mt-2 px-3`}>
						<Image
							source={{ uri: image }}
							style={{ width: 200, height: 200 }}
							resizeMode="contain"
						/>
					</View>
				)}
				<View style={tw`flex-row w-full justify-between mt-2 px-3`}>
					<Pressable
						onPress={pickImage}
						style={tw`bg-slate-200 flex-row items-center justify-center px-1 rounded-lg`}
					>
						<AntDesign name="picture" size={24} color="black" />
						<Text style={tw`ml-1`}>Image</Text>
					</Pressable>
					<Pressable
						onPress={submitPost}
						style={tw`bg-blue-500 rounded-lg p-2 w-6/12`}
					>
						{loading ? (
							<ActivityIndicator animating={true} color={Colors.white} />
						) : (
							<Text style={tw`text-center text-white`}>Post</Text>
						)}
					</Pressable>
				</View>
				{status && (
					<Text style={tw`text-yellow-600 text-center`}>{status}</Text>
				)}
			</View>
		</View>
	);
};

export default PostForm;
