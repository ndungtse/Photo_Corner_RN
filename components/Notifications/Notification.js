import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc'

const Notification = () => {
    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Chat')}
         style={tw`px-2 flex flex-row w-full mt-3 rounded-lg bg-white py-2`}>
        <View style={tw`h-[13] w-[13] border-2 border-blue-500 rounded-full`}>
         <Image style={{ width: '100%', height: '100%', borderRadius: 100 }} source={require('../../assets/land.png')} />
        </View>
        <View style={tw`flex ml-2 flex-col w-4/5`}>
            <Text style={tw`font-semibold text-md`}>Daria Salma mentioned you in a post.</Text>
            <Text>12 sec</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Notification

const styles = StyleSheet.create({
  imgCont:{
    height: 53,
    width: 53,
    flex: 1,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 50,
  }
})