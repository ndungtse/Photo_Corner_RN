import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar';
import Ionicons from '@expo/vector-icons/Ionicons'
import tw from 'twrnc'

const Messages = () => {
  return (
    <View style={tw`px-3 pt-4 w-full h-full justify-between`}>
      <View style={tw`flex flex-row justify-between items-center`}>
        <Text style={tw`text-xl font-semibold`}>Messages</Text>
        <FontAwesome5 name='edit' style={tw`font-bold`} />
      </View>
      <NavBar />
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({})