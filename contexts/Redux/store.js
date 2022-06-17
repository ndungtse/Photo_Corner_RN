import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./userSlice";
import postReducer from "./postSlice";

export const store = configureStore({
    reducer: combineReducers({
        user: userReducer,
        post: postReducer
    })
});