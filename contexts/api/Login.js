import AsyncStorage from "@react-native-async-storage/async-storage";
import { api} from "../AuthContext";
import { login, loginFailure, loginStart } from "../Redux/userSlice";


const loginUser = async (dispatch, loginData) => {
     dispatch(loginStart())
    try {
        const res = await api.post(`/user/login`, loginData);
        const data = await res.data;
        console.log(data);
        if (data.message==="Can continue") {
            // const token = decodToken(data.token);
            // dispatch(login({user: token.needed, token: data.token}));
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


