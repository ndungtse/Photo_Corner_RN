import React from "react";
import jwtdecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { authorize } from "./Redux/userSlice";
import axios from "axios";

let AuthContext = React.createContext();
export const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MmYwZTI1YmMzMjNkOTVjZTFiZjE4NDUiLCJpYXQiOjE2NjMzMzQ5MDN9.SM1_JHnJMfFYwKgrsNbRn_mcOESWWrH2YNy3xWNB9Ms";
export const useAuth = () => {
	return React.useContext(AuthContext);
};

export const api = axios.create({
	baseURL: "https://photocorner33.herokuapp.com",
	headers: {
		"Content-Type": "application/json",
	},
});

export default function AuthProvider({ children }) {
	let [user, setUser] = React.useState(undefined);
	const dispatch = useDispatch();

	const getSavedToken = async () => {
		// const token = await AsyncStorage.getItem('token')
		if (token) {
			const userDetails = await jwtdecode(token);
			try {
				console.log(userDetails);
				const userd = await api.get(`/user/getUserByID/${userDetails.userid}`, {
					headers: {
						"Content-Type": "application/json",
						authorization: "Bearer " + token,
					},
				});
				dispatch(authorize({ decoded: userd.data.user, token: token }));
				return setUser(userd.data);
			} catch (error) {
				console.log(error);
				setUser(null);
			}
		}
		setUser(null);
	};

  const getUserByID = async(id)=> {
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
		// setUser(null);
	}, []);

	let value = { user, setUser, getUserByID };

	return (
		<>
			{user !== undefined && (
				<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
			)}
		</>
	);
}
