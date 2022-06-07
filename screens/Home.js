import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import NavBar from '../components/NavBar';
import tw from 'twrnc'
import Stories from '../components/Home/Stories';
import Post from '../components/Home/Post';

const Home = () => {
  return (
    <View style={tw`px-3 pt-4 w-full h-full justify-between`}>
      <View style={styles.search}>
          <Text style={tw`text-xl font-semibold`}>Photo Corner</Text>
          <FontAwesome name='search' style={tw`text-xl rounded-xl px-2 py-1 bg-slate-200`} />
      </View>
      <View style={tw`h-[85%] overflow-auto w-full flex flex-col`}>
        <Stories />
        <Post />
        {/* <Post /> */}
      </View>
      <NavBar />
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
