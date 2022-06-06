import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar';

const Post = ({navigation}) => {
  return (
    <View>
      <Text>Post</Text>
      <NavBar navigation={navigation} />
    </View>
  )
}

export default Post

const styles = StyleSheet.create({})