import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar';
import tw from 'twrnc'

const Notification = () => {
  return (
    <View style={tw`px-3 pt-4 w-full h-full justify-between`}>
      <Text style={tw`text-xl font-semibold`}>Notification</Text>
      <NavBar />
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})