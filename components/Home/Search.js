import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesome5 } from '@expo/vector-icons'

const Search = () => {
    const [result, setResult] = React.useState([]);
  return (
    <View style={tw`flex w-full flex-col px-2`}>
      <KeyboardAvoidingView style={tw`flex rounded-xl w-full mt-3 p-2 bg-slate-100 flex-row items-center`}>
        <FontAwesome5 name="search" size={17} color="black" />
        <TextInput style={tw`w-full text-black px-2 text-lg font-semibold`} />
      </KeyboardAvoidingView>
        <View style={tw`flex flex-col w-full mt-3`}>
            <Text style={tw`text-lg font-semibold`}>Recent</Text>
            <ScrollView>
                {/* {result.map((use, index) => ( */}
                    <ResultRow />
                {/* ))} */}
            </ScrollView>
        </View>
    </View>
  )
}

export default Search

const ResultRow = () => {
  
      return (
          <TouchableOpacity onPress={handlePress}
             style={tw`px-2 flex flex-row w-full mt-3 rounded-lg bg-slate-200 py-2`}>
              <View style={tw`h-[13] w-[13] border-2 border-blue-500 rounded-full`}>
                  <Image style={{ width: '100%', height: '100%', borderRadius: 100 }} source={require('../../assets/land.png')} />
              </View>
              <View style={tw`flex ml-2 flex-col w-full`}>
                  <Text style={tw`font-semibold text-lg`}>{use.username}</Text>
                  <Text>Hey, how are you?</Text>
              </View>
          </TouchableOpacity>
      )
  }