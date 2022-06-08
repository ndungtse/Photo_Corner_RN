import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';

const Recent = () => {

  return (
    <View style={tw`flex-col w-full flex mt-3`}>
      <Text style={tw`text-lg font-semibold`}>Messages</Text>
        <RecentRow />
        <RecentRow />
        <RecentRow />
        <RecentRow />
        <RecentRow />
        <RecentRow />
        <RecentRow />
        <RecentRow />
        <RecentRow />
    </View>
  )
}

export default Recent

const RecentRow = () => {
  const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}
         style={tw`px-2 flex flex-row w-full mt-3 rounded-lg bg-slate-200 py-2`}>
            <View style={tw`h-[13] w-[13] rounded-full`}>
             <Image style={tw`min-h-full min-w-full`} source={require('../../assets/land.png')} />
            </View>
            <View style={tw`flex ml-2 flex-col w-full`}>
                <Text style={tw`font-semibold text-lg`}>Jessica</Text>
                <Text>Hey, how are you?</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})