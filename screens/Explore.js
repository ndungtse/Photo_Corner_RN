import { View, Text, KeyboardAvoidingView, TextInput, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesome5 } from '@expo/vector-icons'
import { useUsers } from '../contexts/userContext';
import Suggested from '../components/Explore/Suggested';
import { useEffect } from 'react';

const Explore = () => {
    const [result, setResult] = React.useState([]);
    const { suggested, getSuggestedUsers } = useUsers()

    useEffect(()=> {
        getSuggestedUsers()
    },[])

  return (
    <View style={tw`flex w-full flex-col px-2`}>
      <KeyboardAvoidingView style={tw`flex rounded-xl w-full mt-3 p-2 bg-slate-100 flex-row items-center`}>
        <FontAwesome5 name="search" size={17} color="black" />
        <TextInput style={tw`w-full text-black px-2 text-lg font-semibold`} />
      </KeyboardAvoidingView>
        <View style={tw`flex flex-col w-full mt-3`}>
            <Text style={tw` font-semibold`}>Suggested to follow</Text>
            <ScrollView style={tw`mt-3`} showsHorizontalScrollIndicator={false}>
                {suggested.slice(0, 6).map((user, index) => (
                  <Suggested key={index} user={user} />
                  ))}
            </ScrollView>
        </View>
    </View>
  )
}

export default Explore