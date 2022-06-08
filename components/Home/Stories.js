import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import AntDesign from '@expo/vector-icons/AntDesign'

const Stories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
     style={tw`w-full flex flex-row`}>
      <View style={tw`flex flex-col items-center`}>
        <TouchableOpacity style={tw`rounded-xl justify-center flex items-center w-[15] h-[15] border-2 border-blue-800 p-4 py-5`}>
          <View style={tw` flex items-center justify-center p-3`}>
            <AntDesign name='plus' style={tw`text-3xl border-dashed border-2 px-2 py-1 rounded-xl`}/>
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
            <Image style={tw`min-h-full min-w-full`} source={require('../../assets/land.png')} />
          </View>
      </TouchableOpacity>
      <Text>Jessica</Text>
    </View>
  )
}

const styles = StyleSheet.create({})