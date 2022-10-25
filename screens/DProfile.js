import { View, Image, ScrollView, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { Feather, Entypo, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Post from "../components/Home/Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { usePosts } from "../contexts/PostContext";
import { useNavigation } from "@react-navigation/native";
import { useUsers } from "../contexts/userContext";
import { setUser } from "../contexts/Redux/userSlice";

const DProfile = ({ route }) => {
	const { id } = route.params;
	const { getUserByID } = useAuth();
	const [user, setDuser] = React.useState(null);
	const { currentUser } = useSelector((state) => state.user);
	const [posts, setPosts] = useState([]);
	const { getPostsByUser } = usePosts();
	const navigation = useNavigation();
	const [foll, setFoll] = React.useState(false);
	const { follow, unfollow, following } = useUsers();
	const dispatch = useDispatch();

	const handleFollow = () => {
		if (foll) {
			unfollow(user);
			dispatch(
				setUser({ ...currentUser, following: currentUser.following + -1 })
			);
			setFoll(false);
		} else {
			follow(user);
			dispatch(
				setUser({ ...currentUser, following: currentUser.following + 1 })
			);
		}
		setFoll(!foll);
	};

	const getUser = async () => {
		const user = await getUserByID(id);
		setDuser(user);
	};

	const konwIfFollowing = () => {
		let pfoll = following;
		for (let i = 0; i < pfoll.length; i++) {
			if (following[i].user === id) {
				setFoll(true);
			}
		}
	}

	const getUsePosts = async () => {
		try {
			const posts = await getPostsByUser(id);
			setPosts(posts.posts.reverse());
			console.log(posts);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUser();
		konwIfFollowing();
	}, [id]);

	useEffect(() => {
		console.log(id, currentUser._id);
		getUsePosts();
	}, []);

	return (
		<View style={tw`flex-col pt-6 w-full bg-white h-full justify-between`}>
			<Pressable
				onPress={() => navigation.goBack()}
				style={[tw`top-0 left-4 z-50`, { position: "absolute" }]}
			>
				<Ionicons name="arrow-back" style={[tw``]} size={22} color="black" />
			</Pressable>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={tw`h-[85%] w-full relative flex`}
			>
				<View style={tw`w-full flex-col h-[50] relative px-3`}>
					<Image style={tw`w-full h-full`} source={{ uri: user?.cover }} />
				</View>
				<View style={tw`w-full h-full flex-col bg-white rounded-t-3xl py-3`}>
					<View style={tw`flex-row items-center px-3`}>
						<View
							style={tw`h-[13] w-[13] relative border-2 border-blue-500 rounded-full`}
						>
							<Image
								style={{ width: "100%", height: "100%", borderRadius: 100 }}
								source={{ uri: user?.profile }}
							/>
						</View>
						<View
							style={tw`px-3 py-1 ml-3 bg-white rounded-xl flex-col items-center justify-center`}
						>
							<Text style={tw` font-bold`}>{posts.length}</Text>
							<Text style={tw`text-sm`}>Posts</Text>
						</View>
						<View
							style={tw`px-3 py-1 ml-3 bg-white rounded-xl flex-col items-center justify-center`}
						>
							<Text style={tw` font-bold`}>{user?.followers}</Text>
							<Text style={tw`text-sm`}>Followers</Text>
						</View>
						<View
							style={tw`px-3 py-1 ml-3 bg-white rounded-xl flex-col items-center justify-center`}
						>
							<Text style={tw`font-bold`}>{user?.following}</Text>
							<Text style={tw`text-sm`}>Following</Text>
						</View>
						<View
							style={tw`py-1 ml-3 bg-white rounded-lg flex-col items-center justify-center`}
						>
							<Entypo name="chevron-down" size={24} color="black" />
						</View>
					</View>
					<View
						style={tw`mt-2 px-3 flex-row w-full justify-between items-center`}
					>
						<View style={tw`mt-2`}>
							<Text style={tw`font-bold text-lg`}>{user?.fullname}</Text>
							<Text style={tw`text-sm font-semibold`}>
								@{currentUser.username}
							</Text>
						</View>
						<Pressable
							style={tw`${foll?"bg-slate-700": "bg-blue-500"} px-3 py-1 rounded-lg`}
							onPress={handleFollow}
						>
								<Text style={tw`text-white font-semibold`}>
									{foll ? "unfollow" : "follow"}
								</Text>
						</Pressable>
					</View>
					<View style={tw`flex-row items-center justify-between mt-3 px-3`}>
						<View style={tw`flex-row`}>
							<Text style={tw`font-semibold text-lg border-b-2 py-1`}>
								Posts
							</Text>
							<Text style={tw`font-semibold ml-2 text-lg  py-1`}>Status</Text>
							<Text style={tw`font-semibold ml-2 text-lg  py-1`}>Media</Text>
						</View>
						<Feather name="grid" size={24} color="black" />
					</View>
					<View style={tw`bg-white px-3 flex-col h-full`}>
						{posts.map((post) => (
							<Post key={post._id} post={post} />
						))}
						{posts.length === 0 && (
							<Text style={tw`text-lg text-center mt-4 font-semibold`}>
								No Posts Yet
							</Text>
						)}
					</View>
				</View>
			</ScrollView>
			<StatusBar style="light" hidden={true} />
		</View>
	);
};

export default DProfile;
