import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

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
    return (
        <View style={tw`px-2 flex flex-row w-full mt-3 rounded-lg bg-slate-200 py-2`}>
            <View style={tw`h-[13] w-[13] rounded-full`}>
             <Image style={tw`min-h-full object-cover min-w-full`} source={require('../../assets/land.png')} />
            </View>
            <View style={tw`flex ml-2 flex-col w-full`}>
                <Text style={tw`font-semibold text-lg`}>Jessica</Text>
                <Text>Hey, how are you?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})