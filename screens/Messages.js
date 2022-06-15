import { StyleSheet, Text,TextInput, TouchableOpacity,Image,
   View,KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar';
import { Feather } from '@expo/vector-icons';
import tw from 'twrnc'
import { FontAwesome5 } from '@expo/vector-icons';
import Recent from '../components/Messages/Recent';
import { StatusBar } from 'expo-status-bar';

const Messages = () => {
  return (
    <View style={tw`px-3 pt-4 w-full h-full justify-between`}>
      <View style={tw`flex flex-row justify-between items-center`}>
        <Text style={tw`text-xl font-semibold`}>Messages</Text>
        <TouchableOpacity style={tw`p-1 bg-slate-200 rounded-lg`}>
         <Feather name="edit" size={17} color="black" />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView style={tw`flex rounded-xl w-full mt-3 p-2 bg-slate-100 flex-row items-center`}>
        <FontAwesome5 name="search" size={17} color="black" />
        <TextInput style={tw`w-full text-black px-2 text-lg font-semibold`} />
      </KeyboardAvoidingView>
      <ScrollView showsVerticalScrollIndicator={false}
        style={tw`h-[75%] w-full flex flex-col`}>
        <View style={tw`flex flex-col w-full`}>
          <Text style={tw`text-xl font-semibold`}>Quick Chat</Text>
          <ScrollView style={tw`flex flex-row w-full overflow-hidden`}
           horizontal={true} showsHorizontalScrollIndicator={false}>
            <QuickChat />
            <QuickChat />
            <QuickChat />
            <QuickChat />
            <QuickChat />
          </ScrollView>
        </View>
        <Recent />
      </ScrollView>
      <NavBar />
      <StatusBar style="light" />
    </View>
  )
}

export default Messages

const QuickChat = ()=>{

  return(
    <View style={tw`flex flex-col items-center`}>
      <TouchableOpacity style={tw`rounded-xl ml-3 justify-center flex items-center w-[15] h-[15] border-2 border-blue-800 p-[0.6]`}>
          <View style={tw` rounded-xl flex items-center justify-center w-full h-full`}>
            <Image style={{ width: '100%', height: '100%', borderRadius: 100 }} source={require('../assets/land.png')} />
          </View>
      </TouchableOpacity>
      <Text>Jessica</Text>
    </View>
  )
}

const styles = StyleSheet.create({})