import { View, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesome5 } from '@expo/vector-icons'

const Explore = () => {
    const [result, setResult] = React.useState([]);
  return (
    <View style={tw`flex w-full flex-col px-2`}>
      <KeyboardAvoidingView style={tw`flex rounded-xl w-full mt-3 p-2 bg-slate-100 flex-row items-center`}>
        <FontAwesome5 name="search" size={17} color="black" />
        <TextInput style={tw`w-full text-black px-2 text-lg font-semibold`} />
      </KeyboardAvoidingView>
        <View style={tw`flex flex-col w-full mt-3`}>
            <Text style={tw`text-lg font-semibold`}>Recent</Text>
        </View>
    </View>
  )
}

export default Explore