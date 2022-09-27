import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Post from '../Home/Post';
import { useDispatch, useSelector } from 'react-redux';
import { usePosts } from '../../contexts/PostContext';
import { useEffect } from 'react';
import { setUserPosts } from '../../contexts/Redux/postSlice';
import { Button, Colors } from 'react-native-paper';

const Profile = ({setShowForm, setIsCover}) => {
  const { currentUser } = useSelector(state => state.user)
  const { userPosts } = useSelector(state => state.post)
  const { getPostsByUser } = usePosts()
  const dispatch = useDispatch()

  const getUsePosts = async () => {
    try {
      const posts = await getPostsByUser(currentUser._id)
      dispatch(setUserPosts(posts.posts.reverse()));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    getUsePosts()
    console.log(userPosts);
  },[])

  return (
    <View style={tw`w-full h-full flex-col bg-slate-100 rounded-t-3xl py-3`}>
      <View style={tw`flex-row items-center px-3`}>
        <View style={tw`h-[13] w-[13] relative border-2 border-blue-500 rounded-full`}>
         <Image style={{ width: '100%', height: '100%', borderRadius: 100 }} source={{uri: currentUser.profile}} />
         <Pressable onPress={()=>{
          setIsCover(false)
          setShowForm(true)
         }}
          style={tw`absolute bottom-0 -right-1`}>
          <Feather name="camera" size={16} color="blue" style={tw`bg-white rounded-full p-1`} />
         </Pressable>
        </View>
        <View style={tw`px-3 py-1 ml-3 bg-white rounded-xl flex-col items-center justify-center`}>
            <Text style={tw` font-bold`}>{userPosts.length}</Text>
            <Text style={tw`text-sm`}>Posts</Text>
        </View>
        <View style={tw`px-3 py-1 ml-3 bg-white rounded-xl flex-col items-center justify-center`}>
            <Text style={tw` font-bold`}>{currentUser.followers}</Text>
            <Text style={tw`text-sm`}>Followers</Text>
        </View>
        <View style={tw`px-3 py-1 ml-3 bg-white rounded-xl flex-col items-center justify-center`}>
            <Text style={tw`font-bold`}>{currentUser.following}</Text>
            <Text style={tw`text-sm`}>Following</Text>
        </View>
        <View style={tw`py-1 ml-3 bg-white rounded-lg flex-col items-center justify-center`}>
            <Entypo name="chevron-down" size={24} color="black" />
        </View>
      </View>
      <View style={tw`mt-2 px-3 flex-row w-full justify-between items-center`}>
        <View style={tw`mt-2`}>
          <Text style={tw`font-bold text-lg`}>{ currentUser.fullname}</Text>
          <Text style={tw`text-sm font-semibold`}>@{currentUser.username}</Text>
        </View>
        <Pressable style={tw`flex-row items-center bg-slate-600 px-2 py-1 rounded-lg`}>
          <MaterialCommunityIcons name="account-edit-outline" size={24} color="white" />
          <Text style={tw`text-white`}>Edit Profile</Text>
        </Pressable>
      </View>
      <View style={tw`flex-row items-center justify-between mt-3 px-3`}>
          <View style={tw`flex-row`}>
            <Text style={tw`font-semibold text-lg border-b-2 py-1`}>Posts</Text>
            <Text style={tw`font-semibold ml-2 text-lg  py-1`}>Status</Text>
            <Text style={tw`font-semibold ml-2 text-lg  py-1`}>Media</Text>
          </View>
          <Feather name="grid" size={24} color="black" />
      </View>
      <View style={tw`bg-white px-3`}>
      {userPosts.map(post => (
        <Post key={post._id} post={post} />
        ))}
        </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})