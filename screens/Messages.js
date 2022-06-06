import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar';

const Messages = ({navigation}) => {
  return (
    <View>
      <Text>Messages</Text>
      <NavBar navigation={navigation} />
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({})