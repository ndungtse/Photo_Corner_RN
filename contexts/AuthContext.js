import React from "react";
import jwtdecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { authorize } from "./Redux/userSlice";
import axios from "axios";
import { getLocal } from "./hooks/useLocal";
import { Image, Text, View } from "react-native";
import tw from 'twrnc'

let AuthContext = React.createContext();

export const useAuth = () => {
	return React.useContext(AuthContext);
};

export const api = axios.create({
	baseURL: "https://photocorner33.onrender.com",
	headers: {
		"Content-Type": "application/json",
	},
});

export default function AuthProvider({ children }) {
	const [user, setUser] = React.useState(undefined);
	const [token, setToken] = React.useState(undefined);
	const dispatch = useDispatch();

	const getSavedToken = async () => {
		const token = await getLocal("token");
		if (token) {
			const userDetails = await jwtdecode(token);
			try {
				console.log(userDetails, typeof token);
				const userd = await api.get(`/user/getUserByID/${userDetails.userid}`, {
					headers: {
						"Content-Type": "application/json",
						authorization: "Bearer " + token,
					},
				});
				dispatch(authorize({ decoded: userd.data.user, token: token }));
				return setUser(userd.data);
			} catch (error) {
				setUser(null);
			}
		}
		setUser(null);
	};

  const getUserByID = async(id)=> {
	const token = await getLocal("token");
    try {
      const res = await api.get(`/user/getUserByID/${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + token,
        },
      });
      return res.data.user
    } catch (error) {
      return null
    }
  }

	React.useEffect(() => {
		getSavedToken();
	}, []);

	let value = { user, setUser, getUserByID, getSavedToken };

	return (
		<>
			{user === undefined ? (
				<View style={[tw`flex h-full flex-col w-full items-center justify-center`]}>
					<Image
						source={require("../assets/splash.png")}
						style={[tw`flex w-full`]} resizeMode="contain"
					/>
					{/* <Text style={[tw`text-black`]}>Loading...</Text> */}
				</View>
			) : (
				<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
			)}
		</>
	);
}
