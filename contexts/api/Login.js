import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { api } from "../AppContext";
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
            dispatch(login(data.token));
            await AsyncStorage.setItem('token', JSON.stringify(data.token))
            return true;
        }else{
            dispatch(loginFailure(data.message));
            return false;
        }
    } catch (error) {
        dispatch(loginFailure(error.message));
        console.log(error);
        return false;
    }
   
}

export default loginUser;