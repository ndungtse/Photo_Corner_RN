import { api } from "../AppContext";
import { signup, signupFailure, loginStart } from "../Redux/userSlice";

const regUser = async(dispatch, regData) => {
    dispatch(loginStart());
    try {
        const res = await fetch(`${api}/user/registerUser`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(regData)
        })
        const data = await res.json();
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