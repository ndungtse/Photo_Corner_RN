import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { Button } from 'react-native-paper';

const NavBar = ({navigation}) => {
  return (
    <View style={tw`w-full h-15 flex-row flex justify-between`}>
      <Button onPress={() => navigation.navigate('Home')} >
          <Ionicons name='home' style={tw`text-2xl`} />
      </Button>
        <Button onPress={() => navigation.navigate('Messages')} >
          <Ionicons name='chatbox' style={tw`text-2xl`} />
        </Button>
        <Button onPress={() => navigation.navigate('Post')} >
          <FontAwesome5 name='plus-square' style={tw`text-2xl`} />
        </Button>
        <Button onPress={() => navigation.navigate('Notifications')} >
          <FontAwesome5 name='bell' style={tw`text-2xl`} />
        </Button>
        <Button onPress={() => navigation.navigate('Profile')} >
          <FontAwesome5 name='user' style={tw`text-2xl`} />
        </Button>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({})