import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useUsers } from "../../contexts/userContext";
import { setUser } from "../../contexts/Redux/userSlice";

const Suggested = ({ user }) => {
	const { currentUser } = useSelector((state) => state.user);
	const [foll, setFoll] = React.useState(false);
	const { follow, unfollow } = useUsers()
	const dispatch = useDispatch()

	const handleFollow = () => {
		if (foll) {
			unfollow(user);
			dispatch(setUser({ ...currentUser, following: currentUser.following + -1 }));
			setFoll(false);
		} else {
			follow(user);
			dispatch(setUser({ ...currentUser, following: currentUser.following + 1 }));
		}
		setFoll(!foll);
	};

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
			<Pressable
				onPress={handleFollow}
			>
				<Text style={[tw`text-blue-600`]}>{foll ? "Following" : "Follow"}</Text>
			</Pressable>
		</View>
	);
};

export default Suggested;
