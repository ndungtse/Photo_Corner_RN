import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "./AuthContext";
const UsersContext = React.createContext();

export function useUsers() {
  return useContext(UsersContext);
}

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const token  = useSelector(state => state.user.token);
  const { getUserByID } = useAuth()
  const [suggested, setSuggested] = useState([]);
	const [following, setFollowing] = useState([]);

  const getUsers = async() => {
    const res = await fetch("https://photocorner33.onrender.com/user/all",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      }
    });
    const data = await res.json();
    setUsers(data.data);
  };

  const getSuggestedUsers = async() => {
    const res = await fetch("https://photocorner33.onrender.com/user/suggestedUsers",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      }
    });
    const data = await res.json();
    setSuggested(data.users);
  }

  const getFollowingData = async () => {
		const res = await fetch(
			`https://photocorner33.onrender.com/user/getFollowingData`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + token,
				},
			}
		);
		const data = await res.json();
		setFollowing(data.following);
		return data.following;
	};

  const updatePhoto = async(datas) => {
    console.log(datas);
    try {
      const res = await fetch("https://photocorner33.onrender.com/user/updateProfilePicture",{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + token,
        },
        body: JSON.stringify(
          {imageStr: datas.imageStr}
        ) 
      });
      const data = await res.json();
      console.log(data);
      const user = await getUserByID(datas.user);
      return {done: true, user: user}
    } catch (error) {
      console.log(error);
      return {done: false}      
    }
  }
  const updateCoverPhoto = async(datas) => {
    console.log(datas);
    try {
      const res = await fetch("https://photocorner33.onrender.com/user/updateCover",{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + token,
        },
        body: JSON.stringify(
          {imageStr: datas.imageStr}
        ) 
      });
      const data = await res.json();
      console.log(data);
      const user = await getUserByID(datas.user);
      return {done: true, user: user}
    } catch (error) {
      console.log(error);
      return {done: false}            
    }
  }

  const follow = async (data) => {
		const res = await fetch(
			`https://photocorner33.onrender.com/user/followUser/${data._id}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(data),
			}
		);
		const data1 = await res.json();
	};

	const unfollow = async (data) => {
		const res = await fetch(
			`https://photocorner33.onrender.com/user/unfollow/${data._id}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(data),
			}
		);
		const data1 = await res.json();
	};

  useEffect(() => {
    getUsers();
    getFollowingData();
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers, updateCoverPhoto, updatePhoto, getUsers, getSuggestedUsers, suggested, setSuggested, following, follow, unfollow}}>
        {children}
    </UsersContext.Provider>
  );
}

// const getSavedToken = async () => {
//     const token = await AsyncStorage.getItem('token')
//   }