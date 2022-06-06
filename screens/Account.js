import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar';

const Account = ({navigation}) => {
  return (
    <View>
      <Text>Account</Text>
      <NavBar navigation={navigation} />
    </View>
  )
}

export default Account

const styles = StyleSheet.create({})