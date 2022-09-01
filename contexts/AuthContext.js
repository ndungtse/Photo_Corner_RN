import React from 'react'
import jwtdecode from 'jwt-decode'
import { useDispatch } from 'react-redux';
import { authorize } from './Redux/userSlice';

let AuthContext = React.createContext();

export const useAuth = () => {
    return React.useContext(AuthContext);
  }

export default function AuthProvider({ children }) {
  let [user, setUser] = React.useState(undefined);
  const dispatch = useDispatch()

  const decodeToken = async()=> {
    const token =  getCookie('token');
    if (token) {
      try{
        const userDetails = await jwtdecode(token);
        console.log(userDetails);
        const userd = await api.get(`/user/getUserByID/${userDetails.id}`);
        dispatch(authorize({token: token}))
       return setUser(userd.data);
      }
      catch(err){
        console.log(err);
       return setUser(null);
      }
    }
    return setUser(null);
  }

  React.useEffect(() => {
    decodeToken();
  }, [])


  let value = { user , setUser};

  return (
    <>{user!==undefined&&(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
     )}</>
  );
}

// export const getUserById = async (id) => {
//   const res = await fetch(`/user/getUserByID/${id}`,{
//     headers: {
//       "Content-Type": "application/json",
//       authorization: "Bearer " + getCookie("token"),
//     }
//   });
//   const data = await res.json();
//   return data.user;
// }
