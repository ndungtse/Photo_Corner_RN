import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import tw from 'twrnc'
import Stories from '../components/Home/Stories';
import Post from '../components/Home/Post';
import { StatusBar } from 'expo-status-bar';
import { usePosts } from '../contexts/PostContext';
import { useSelector } from 'react-redux';
import PostForm from '../components/PostForm';

const Home = () => {
  const { posts, getPosts } = usePosts()
  const [curPosts, setCurPosts] = useState(posts)
  const [showForm, setShowForm] = useState(false)
  const user = useSelector(state => state.user.currentUser)

  useEffect(() => {
    if(posts.length === 0) getPosts();
    }, []);

    useEffect(() => {
      setCurPosts(posts)
  }, [posts])

  return (
    <View style={tw`px-3 w-full h-full justify-between`}>
      {showForm && <PostForm setShowForm={setShowForm} />}
      <View style={styles.search}>
          <View style={tw`flex-row items-center`}>
            <Image style={{ width: 30, height: 30, borderRadius: 100, borderWidth: 1 }} source={require('../assets/logo.png')} />
            <Text style={tw`text-lg font-semibold`}>Photo</Text>
            <Text style={tw`text-lg text-blue-700 font-semibold`}>Corner</Text>
          </View>
          <FontAwesome name='search' style={tw`text-xl rounded-xl px-2 py-1`} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
         style={tw`h-[85%] w-full flex flex-col`}>
        <Stories />
        <View style={[tw`flex-row mt-3 items-center mx-auto w-full justify-center`]}>
          <Image style={tw`h-10 w-10 rounded-full`} source={{uri: user.profile}} />
          <TouchableOpacity onPress={()=> setShowForm(true)}
            style={tw`text-slate-600 flex-row items-center border-2 border-blue-300 rounded-3xl px-4 py-2 w-10/12 ml-2`}>
            <Text style={tw`text-slate-600`}>{user.username}, Tap to Create new Post</Text>
          </TouchableOpacity>
        </View>
        {curPosts.map(post => (
          <Post key={post._id} post={post} />
        ))}
      </ScrollView>
      <StatusBar style="auto" hidden />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    },
    search: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
})
