import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc'

const Notification = () => {
    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Chat')}
         style={tw`px-2 flex relative flex-row w-full mt-3 rounded-lg bg-white py-2`}>
        <View style={tw`h-[13] w-[13] rounded-full`}>
         <Image style={tw`min-h-full min-w-full`} source={require('../../assets/land.png')} />
        </View>
        <View style={tw`flex ml-2 flex-col w-full`}>
            <Text style={tw`font-semibold text-lg`}>Daria Salma mentioned you in a post.</Text>
            <Text>12 sec</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Notification

const styles = StyleSheet.create({})