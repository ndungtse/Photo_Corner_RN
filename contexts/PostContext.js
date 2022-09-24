import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "./AuthContext";

const PostContext = React.createContext();

export const usePosts = () => {
	return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);
	const { user } = useAuth()
    const { token } = useSelector(state => state.user);
	const [isWantToPost, setIsWantToPost] = useState(false);

	const getPosts = async () => {
		const res = await fetch(
			"https://photocorner33.herokuapp.com/post/allPosts",
			{
				method: "GET",

				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + token,
				},
			}
		);
		const posts = await res.json();
		setPosts(posts.posts.reverse());
		return posts;
	};

	const newPost = async (caption, imageStr) => {
		const res = await fetch(
			"https://photocorner33.herokuapp.com/post/newPost",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + token,
				},
				body: JSON.stringify({
					imageStr: imageStr,
					caption,
				}),
			}
		);
		await res.json();
		await getPosts();
		return true;
	}

	const deletePost = async (id) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/delete/${id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + token,
				},
			}
		);
		const data = await res.json();
		setPosts(data.posts.reverse());
		setLoader(false);
		return posts;
	}

	const commentOnPost = async (postID, comment) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/commentOnPost/${postID}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + token,
				},
				body: JSON.stringify({
					postID,
					comment,
				}),
			}
		);
		const data = await res.json();
		
		return posts;
	}

	const likePost = async (postID) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/like/${postID}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + token,
				},
			}
		);
		const data = await res.json();
		
		return posts;
	}

	const getCommentsByPost = async (postID) => {

		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/getCommentsByPosts/${postID}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + token,
				},
			}
		);
		const data = await res.json();
		console.log(data);
		return data;
	}

	const getLikesDataByPost = async (postID) => {
		try {
			const res = await fetch(
				`https://photocorner33.herokuapp.com/post/getLikesDataByPost/${postID}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						authorization: "Bearer " + token,
					},
				}
			);
			const data = await res.json();
			
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	const getLikesCountByPost = async (postID) => {

		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/getLikeCountByPost/${postID}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + token,
				},
			}
		);
		const data = await res.json();
		
		return data;
	}

	const unlikePost = async (postID) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/unlikePost/${postID}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + token,
				},
			}
		);
		const data = await res.json();
		
		return data;
	}

	const updateCommentOnPost = async (postID, commentID, comment) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/updateCommentOnPost/${postID}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + token,
				},
				body: JSON.stringify({
					commentID,
					comment,
				}),
			}
		);
		const data = await res.json();
		
		return data;
	}

	const updatePost = async (postID, imageStr, caption) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/updatePost/${postID}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + token,
				},
				body: JSON.stringify({
					imageStr,
					caption,
				}),
			}
		);
		const data = await res.json();
		
		setPosts(data.posts.reverse());
		return data;
	}

	const getPostsByFollowing = async () => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/getPostsByFollowing`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + token,
				},
			}
		);
		const data = await res.json();
		
		setPosts(data.posts.reverse());
		return data;
	}

	const getAllPostDataById = async (postID) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/getAllPostData/${postID}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				authorization: "Bearer " + token,
			}
		});
		const data = await res.json();
		
		return data;
	}

	const deleteComment = async (postID, commentID) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/deleteComment/${postID}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + token,
				},
				body: JSON.stringify({
					commentID,
				}),
			}
		);
		const data = await res.json();
		
		return data;
	}

	return (
		<PostContext.Provider value={{ posts, setPosts, getPosts, newPost, deletePost, deleteComment, commentOnPost, likePost, getAllPostDataById, getCommentsByPost,
		 getLikesDataByPost,  getLikesCountByPost, unlikePost, updateCommentOnPost, updatePost, getPostsByFollowing,
		 isWantToPost, setIsWantToPost}}>
			{children}
		</PostContext.Provider>
	);
};