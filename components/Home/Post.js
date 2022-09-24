import { StyleSheet, Text, View, Image, TextInput, Pressable, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { usePosts } from '../../contexts/PostContext';
import moment from 'moment';
import { useSelector } from 'react-redux';

const Post = ({post}) => {
    const user = useSelector(state => state.user.currentUser)
    const [poster, setPoster] = useState(null)
    const { getUserByID } = useAuth()
	const [postData, setPostData] = useState(post);
	const [liked, setLiked] = React.useState(false);
	const { likePost, unlikePost, posts, setPosts, getCommentsByPost,
		 getAllPostDataById ,commentOnPost, getLikesDataByPost } = usePosts();
    const [likesData, setLikesData] = React.useState(0);
    const [comments, setComments] = React.useState([]);
    const [showComments, setShowComments] = React.useState(false);
    const [comment, setComment] = React.useState("");

    const timeFromNow = moment(postData?.date).fromNow();

    const handlePoster = async(id)=> {
        const data = await getUserByID(id);
        setPoster(data)
    }

    const getComments = async() => {
		const comments = await getCommentsByPost(postData._id)
		console.log(comments);
		setComments(comments.comments)
	}

	const handleLike = () => {
		if (liked) {
			unlikePost(postData._id);
			setPosts(posts.map((post) => {
				if (post._id === postData._id) {
                    console.log("post changed unli");
					return {
						...post,
						likes: post.likes - 1,

					}
				}
				return post;
			}));
		}else{
			likePost(postData._id);
			setPosts(posts.map((post) => {
				if (post._id === postData._id) {
                    console.log("post changed like");
					return {
						...post,
						likes: post.likes + 1,

					}
				}
				return post;
			}));
		}
		setLiked(!liked);
	}

	const handleComment = async() => {
		if(comment.trim() === "") return
		await commentOnPost(postData._id, comment);
		setPostData({...postData, comments: postData.comments + 1});
		setComment("");
	}

	const getLikesData = async () => {
        try {
            const likesData = await getLikesDataByPost(postData._id);
            setLikesData(likesData.likedata);
            console.log(likesData.likedata);
        } catch (error) {
            console.log(`%c${error}`, "color: red; font-size: 20px; padding: 10px; border: 1px solid red; border-radius: 5px;");
        }
	}

	const knowIfLiked = async () => {
		for (let i = 0; i < likesData.length; i++) {
			if (likesData[i].user === user._id) {
				setLiked(true);
			}
		}
	}

    useEffect(()=>{
        handlePoster(postData.user);
    },[post])

    useEffect(() => {
		getLikesData();
	}, []);

	useEffect(() => {
		knowIfLiked();
	} , [likesData]);

  return (
    <>
    {poster && (
    <View style={styles.post}>
        <View style={tw`flex px-2 flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center`}>
                <View style={tw`h-[13] w-[13] border-2 border-blue-500 rounded-full`}>
                    <Image style={{ width: '100%', height: '100%', borderRadius: 100 }} source={{uri: poster?.profile}} />
                </View>
                <View style={tw`flex ml-3 flex-col`}>
                    <Text style={tw`font-semibold`}>{poster.username}</Text>
                    <Text>{timeFromNow}</Text>
                </View>
            </View>
            <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
        <View style={tw`flex px-1 flex-col mt-3`}>
          <Text style={tw`px-1`}>{postData.caption}</Text>
          <Image style={tw`w-full h-[100]`}
            source={{uri: postData.image_url}} />
        </View>
        <View style={tw`mt-3 flex-row items-center justify-between px-3`}>
            <View style={tw`flex-row`}>
                <Pressable onPress={handleLike} >
                    {liked ? (
                    <AntDesign name="heart" size={20} color="red" />
                     ) : (
                        <AntDesign name="hearto" size={20} color="black" />
                     )}
                </Pressable>
                <Text> {post.likes} </Text>
                <Pressable>
                    <FontAwesome style={tw`ml-2`} name="comment" size={20} color="black" />
                </Pressable>
                <Text> {postData.comments} </Text>
                {/* <Pressable>
                    <FontAwesome style={tw`ml-2`} name="share" size={20} color="black" />
                </Pressable> */}
            </View>
            <FontAwesome name="bookmark" size={20} color="black" />
        </View>
        <View style={tw`flex-row items-center w-full justify-between px-2`}>
            <KeyboardAvoidingView style={tw`flex-row items-center w-11/12`}
             behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TextInput style={styles.input} placeholder="Add a comment..." />
            </KeyboardAvoidingView>
            <MaterialIcons style={tw`mt-3`} name="send" size={24} color="black" />
        </View>
    </View>
    )}
    </>
  )
}

export default Post

const styles = StyleSheet.create({
    post:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 12,
        borderWidth: 1,
        paddingVertical: 10,
        borderColor: '#7589e5',
    },
    input:{
        width: '100%',
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        height: 40,
        paddingHorizontal: 10,
    }
})