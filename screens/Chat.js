import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NavBar from '../components/NavBar';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import ChatInput from '../components/Messages/ChatInput';

const Chat = () => {
  return (
    <View style={tw`px-3 pt-4 w-full h-full justify-between`}>
        <View style={tw`px-2 flex flex-row w-full items-center
         mt-3 justify-between bg-slate-200 py-2`}>
            <View style={tw` flex-row items-center`}>
                <View style={tw`h-[13] w-[13] border-2 border-blue-500 rounded-full`}>
                 <Image style={tw`min-h-full object-cover min-w-full`} source={require('../assets/land.png')} />
                </View>
                <View style={tw`flex ml-2 flex-col w-full`}>
                    <Text style={tw`font-semibold text-lg`}>Jessica</Text>
                    <Text>Active 2 hours ago</Text>
                </View>
            </View>
            <View style={tw`flex-row items-center `}>
                <Ionicons style={tw`text-blue-600`}
                 name="call-sharp" size={20} color="black" />
                <FontAwesome style={tw`ml-2 text-blue-600`}
                 name="video-camera" size={20} color="black" />
            </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}
            style={tw`h-[65%] bg-slate-300 w-full flex flex-col-reverse`}>
             <ChatRow />  
             <ChatRow />  
        </ScrollView>
        <ChatInput />
      <NavBar />
    </View>
  )
}

export default Chat

const ChatRow = () => {
    return (
        <View style={tw`flex flex-row w-full`}>
            <View style={tw`px-2 flex flex-row w-full mt-3 w-1/2 py-2`}>
                <View style={tw`h-[10] w-[10] rounded-full border-2 border-blue-300`}>
                 <Image style={tw`min-h-full rounded-full object-fit min-w-full`} source={require('../assets/land.png')} />
                </View>
                <View style={tw`flex w-full ml-2 flex-col p-1 rounded-xl bg-blue-500`}>
                    <Text>Hey. How are you?eferffefrefeferfrefgerger</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})