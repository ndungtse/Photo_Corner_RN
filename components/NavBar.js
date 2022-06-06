import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const NavBar = () => {
  return (
    <View style={tw`w-full h-15 flex-row flex justify-between`}>
      <View>
          <Ionicons name='home' style={tw`text-2xl`} />
      </View>
        <View>
          <Ionicons name='chatbox' style={tw`text-2xl`} />
        </View>
        <View>
          <FontAwesome5 name='plus-square' style={tw`text-2xl`} />
        </View>
        <View>
          <FontAwesome5 name='bell' style={tw`text-2xl`} />
        </View>
        <View>
          <FontAwesome5 name='user' style={tw`text-2xl`} />
        </View>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({})