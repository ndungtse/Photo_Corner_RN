import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar';
import tw from 'twrnc'

const Account = () => {
  return (
    <View style={tw`px-3 pt-4 w-full h-full justify-between`}>
      <Text style={tw`text-xl font-semibold`}>Account</Text>
      <NavBar/>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({})