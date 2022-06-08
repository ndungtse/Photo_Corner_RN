import { api } from "../AppContext";

const regUser = async(regData) => {
    try {
        const res = await fetch(`${api}/user/registerUser`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(regData)
        })
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export default regUser;