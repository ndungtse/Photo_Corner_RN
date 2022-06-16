import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import NavBar from '../components/NavBar';
import tw from 'twrnc'
import Stories from '../components/Home/Stories';
import Post from '../components/Home/Post';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { token } = useSelector(state => state.user);

  const getPosts = async()=>{
    const res = await fetch(
			"https://photocorner33.herokuapp.com/post/allPosts",
			{
				method: "GET",

				headers: {
					"Content-Type": "application/json",
					token: "Bearer " + JSON.parse(token),
				},
			}
		);

    const data = await res.json();
    console.log('data', data);
    setPosts(data);
    
  }

  useEffect(() => {
    getPosts();
    }, []);

  return (
    <View style={tw`px-3 pt-4 w-full h-full justify-between`}>
      <View style={styles.search}>
          <Text style={tw`text-xl font-semibold`}>Photo Corner</Text>
          <FontAwesome name='search' style={tw`text-xl rounded-xl px-2 py-1 bg-slate-200`} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
         style={tw`h-[85%] w-full flex flex-col`}>
        <Stories />
        <Post />
        <Post />
      </ScrollView>
      <NavBar />
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
