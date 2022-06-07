import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: combineReducers({
        user: userReducer
    })
});