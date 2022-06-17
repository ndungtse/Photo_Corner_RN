import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
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

    }
}
);

export const { pickPosts } = postSlice.actions;
export default postSlice.reducer;
