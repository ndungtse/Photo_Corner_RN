import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        currentUser: null,
        token: null,
        error: false,
        status: '',
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.currentUser = action.payload;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.currentUser = null;
            state.token = null;
        }
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;