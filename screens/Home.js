import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import tw from 'twrnc'
import Stories from '../components/Home/Stories';
import Post from '../components/Home/Post';
import { StatusBar } from 'expo-status-bar';
import { usePosts } from '../contexts/PostContext';

const Home = () => {
  const { posts, getPosts } = usePosts()
  const [curPosts, setCurPosts] = useState(posts)

  useEffect(() => {
    if(posts.length === 0) getPosts();
    }, []);

    useEffect(() => {
      setCurPosts(posts)
  }, [posts])

  return (
    <View style={tw`px-3 pt-4 w-full h-full justify-between`}>
      <View style={styles.search}>
          <Text style={tw`text-xl font-semibold`}>Photo Corner</Text>
          <FontAwesome name='search' style={tw`text-xl rounded-xl px-2 py-1`} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
         style={tw`h-[85%] w-full flex flex-col`}>
        <Stories />
        {curPosts.map(post => (
          <Post key={post._id} post={post} />
        ))}
      </ScrollView>
      <StatusBar style="light" />
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
