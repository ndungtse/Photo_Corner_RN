import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Post from '../Home/Post';

const Profile = () => {
  return (
    <View style={tw`w-full absolute top-[40] flex-col bg-slate-100 rounded-t-3xl p-3`}>
      <View style={tw`flex-row items-center`}>
        <View style={tw`h-[15] w-[15] border-2 rounded-full`}>
         <Image style={tw`min-h-full min-w-full`} source={require('../../assets/land.png')} />
        </View>
        <View style={tw`px-3 py-1 ml-3 bg-white rounded-xl flex-col items-center justify-center`}>
            <Text style={tw` font-bold`}>703</Text>
            <Text style={tw`text-sm`}>Posts</Text>
        </View>
        <View style={tw`px-3 py-1 ml-3 bg-white rounded-xl flex-col items-center justify-center`}>
            <Text style={tw` font-bold`}>115k</Text>
            <Text style={tw`text-sm`}>Followers</Text>
        </View>
        <View style={tw`px-3 py-1 ml-3 bg-white rounded-xl flex-col items-center justify-center`}>
            <Text style={tw`font-bold`}>12</Text>
            <Text style={tw`text-sm`}>Following</Text>
        </View>
        <View style={tw`py-1 ml-3 bg-white rounded-lg flex-col items-center justify-center`}>
            <Entypo name="chevron-down" size={24} color="black" />
        </View>
      </View>
      <View style={tw`mt-2`}>
        <Text style={tw`font-bold text-lg`}>Jessica Rira Ikutann</Text>
        <Text style={tw`text-sm font-semibold`}>@riraikutann</Text>
      </View>
      <View style={tw`flex-row items-center justify-between mt-3`}>
          <View style={tw`flex-row`}>
            <Text style={tw`font-bold text-xl border-b-2 py-1`}>Posts</Text>
            <Text style={tw`font-bold ml-2 text-xl  py-1`}>Status</Text>
            <Text style={tw`font-bold ml-2 text-xl  py-1`}>Media</Text>
          </View>
          <Feather name="grid" size={24} color="black" />
      </View>
      <Post />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})