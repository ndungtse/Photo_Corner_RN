import { api } from "../AppContext";
import { login } from "../Redux/userSlice";

const loginUser = async (loginData) => {
    try {
        const res = await fetch(`${api}/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(loginData)
        })
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
   
}

export default loginUser;