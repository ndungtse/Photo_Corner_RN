import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, decodToken } from "../AppContext";
import { login, loginFailure, loginStart } from "../Redux/userSlice";


const loginUser = async (dispatch, loginData) => {
     dispatch(loginStart())
    try {
        const res = await fetch(`${api}/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(loginData)
        })
        const data = await res.json();
        if (data.message==="Can continue") {
            const token = decodToken(data.token);
            dispatch(login({user: token.needed, token: data.token}));
            await AsyncStorage.setItem('token', JSON.stringify(data.token))
            return true;
        }else{
            dispatch(loginFailure(data.message));
            return false;
        }
    } catch (error) {
        dispatch(loginFailure('Something went wrong'));
        console.log(error);
        return false;
    }
   
}

export default loginUser;


