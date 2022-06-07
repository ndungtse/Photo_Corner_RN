import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { TextInput } from 'react-native-paper';

const Login = () => {
  return (
    <View style={tw`p-2`}>
      <Image source={require('../assets/intro.png')} />
      {/* <Text style={tw`text-blue-500`}>Login</Text> */}
      <TextInput style={tw`h-11 w- right={<TextInput.Affix text="/100" />}`}
      label={`Email`} mode="outlined"  />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})