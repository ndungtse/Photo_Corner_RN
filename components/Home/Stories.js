import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons';

const Stories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
     style={tw`w-full flex flex-row`}>
      <View style={tw`flex flex-col items-center`}>
        <TouchableOpacity style={tw`rounded-xl justify-center flex items-center w-[15] h-[15] border-2 border-blue-800`}>
          <View style={tw` flex items-center justify-center`}>
             <AntDesign name="plus" size={24} style={tw``} color="black" />
          </View>
        </TouchableOpacity>
        <Text>You</Text>
      </View>
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </ScrollView>
  )
}

export default Stories

const Story = ()=>{

  return(
    <View style={tw`flex flex-col items-center`}>
      <TouchableOpacity style={tw`rounded-xl ml-3 justify-center flex items-center w-[15] h-[15] border-2 border-blue-800 p-[0.6]`}>
          <View style={tw` rounded-xl flex items-center justify-center w-full h-full`}>
            <Image style={{ width: '100%', height: '100%', borderRadius: 100 }} source={require('../../assets/land.png')} />
          </View>
      </TouchableOpacity>
      <Text>Jessica</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

{/* <View style={tw`h-[13] w-[13] border-2 border-blue-500 rounded-full`}>
                <Image style={{ width: '100%', height: '100%', borderRadius: 100 }} source={require('../assets/land.png')} />
            </View> */}