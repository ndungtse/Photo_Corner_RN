import { StyleSheet, Text, TextInput, View, ScrollView, Image, TouchableOpacity, Pressable, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import tw from 'twrnc'
import Stories from '../components/Home/Stories';
import Post from '../components/Home/Post';
import { StatusBar } from 'expo-status-bar';
import { usePosts } from '../contexts/PostContext';
import { useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import { useRef } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const { posts, getPosts } = usePosts()
  const [curPosts, setCurPosts] = useState(posts)
  const [showForm, setShowForm] = useState(false)
  const user = useSelector(state => state.user.currentUser)
  const [showSearch, setShowSearch] = useState(false)
  const inputRef = useRef()
  const [query, setQuery] = useState('')

  const navigation = useNavigation()

  const submitSearch = () => {
    if (query.length > 0) {
      navigation.navigate('Search', {
        query: query
      })
    }
  }

  useEffect(() => {
    if(posts.length === 0) getPosts();

    return () => {
      setShowSearch(false)
    }
    }, []);

    useEffect(() => {
      setCurPosts(posts)
  }, [posts])

  return (
    <View style={tw` w-full h-full bg-white justify-between`}>
      {showForm && <PostForm setShowForm={setShowForm} />}
      <View style={[styles.search, tw`py-1 shadow-sm px-3 bg-slate-100`]}>
          <Pressable onPress={()=> setShowSearch(false)} style={tw`flex-row items-center mr-2`}>
            <Image style={{ width: 30, height: 30, borderRadius: 100, borderWidth: 1 }} source={require('../assets/logo.png')} />
            { !showSearch &&<><Text style={tw`text-lg ml-1 font-semibold`}>Photo</Text>
            <Text style={tw`text-lg text-blue-700 font-semibold`}>Corner</Text></>}
          </Pressable>
          <View style={tw`flex-row items-center bg-white px-2 rounded-3xl`}>
            <Pressable onPress={()=> {
              //  inputRef.current.focus()
              setShowSearch(true)}} >
              <FontAwesome name='search' color='blue' style={tw`text-xl rounded-xl px-2 py-1`} />
            </Pressable>
            {showSearch && <KeyboardAvoidingView style={tw`w-10/12 flex-row border-l-[0.2] border-black`}>
              <TextInput value={query}
              onChangeText={text => setQuery(text)} onSubmitEditing={submitSearch}
               autoFocus ref={inputRef} placeholder='Search' style={tw`text-sm w-full px-2`} />
                <Pressable onPress={()=> setShowSearch(false)}>
                <AntDesign name="close" size={20} color="black" style={tw`mt-1`} />
              </Pressable>
            </KeyboardAvoidingView>}
          </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
         style={tw`h-[85%] w-full flex flex-col px-3`}>
        <Stories />
        <View style={[tw`flex-row mt-3 items-center mx-auto w-full justify-center`]}>
          <Image style={tw`h-10 w-10 rounded-full border-2 border-blue-400`} source={{uri: user.profile}} />
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
