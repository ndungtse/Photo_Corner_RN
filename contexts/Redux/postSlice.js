import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        userPosts: [],
        error: null,
        isWantToPost: false,
        isLikedByUser: false,
        likes: 0,
    },
    reducers: {
        pickPosts: (state, action) => {
            state.posts = action.payload;
        },
        likePost: (state, action) => {
            state.posts[action.payload].isLikedByUser = true;
        },
        setUserPosts: (state, action) => {
            state.userPosts = action.payload;
        },
    }
}
);

export const { pickPosts, setUserPosts } = postSlice.actions;
export default postSlice.reducer;
