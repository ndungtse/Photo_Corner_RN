import { api } from "../AuthContext";
import { signup, signupFailure, loginStart } from "../Redux/userSlice";

const regUser = async(dispatch, regData) => {
    dispatch(loginStart());
    try {
        const res = await api.post(`/user/registerUser`, regData);
        const data = await res.data
        console.log(data);
        if (data.status === 201) {
            dispatch(signup());
            return true;
        }else{
            dispatch(signupFailure(data.message));
            return false;
        }
    } catch (error) {
        dispatch(signupFailure('Something went wrong'));
        console.log(error);
    }
}

export default regUser;