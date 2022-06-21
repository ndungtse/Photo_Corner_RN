import React, { useContext, useState, useEffect } from "react";
const UsersContext = React.createContext();

export function useUsers() {
  return useContext(UsersContext);
}

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const token  = useSelector(state => state.user.token);

  const getUsers = async() => {
    const res = await fetch("https://photocorner33.herokuapp.com/user/allUsers",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: "Bearer " + token
      }
    });
    const data = await res.json();
    console.log(data.data);
    setUsers(data.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const fetchUsers = async () => {
    let arr=[]
    const res = await fetch("https://zamuka.herokuapp.com/api/user/");
    const users = await res.json();
    
    for(let i=0; i<users.length; i++){
      const final = {
        id: users[i]._id,
        firstname: users[i].firstname,
        lastname: users[i].lastname,
      };
      arr = [...arr, final]
    }
    setUsers(arr);
  };
   
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers,}}>
        {children}
    </UsersContext.Provider>
  );
}
