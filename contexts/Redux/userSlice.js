import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        currentUser: null,
        token: null,
        error: false,
        status: '',
        isFetching: false,
        signed: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        login: (state, action) => {
            state.isLoggedIn = true;
            state.currentUser = action.payload.user;
            state.token = action.payload.token;
            state.isFetching = false;
        },
        loginFailure:(state, action) => {
            state.error = true;
            state.status = action.payload;
            state.isFetching = false;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.currentUser = null;
            state.token = null;
        },
        signupFailure: (state, action) => {
            state.error = true;
            state.status = action.payload;
            state.isFetching = false;
        },
        signup: (state, action) => {
            state.signed = true;
        },
        authorize: (state, action) => {
            state.isLoggedIn = true;
            state.currentUser = action.payload.decoded;
            state.token = action.payload.token;
        }
    }
});

export const { login, signup, signupFailure, logout, loginFailure,loginStart, authorize } = userSlice.actions;

export default userSlice.reducer;