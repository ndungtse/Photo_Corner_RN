import { StyleSheet, Text, View, TextInput,
    KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ChatInput = () => {
  return (
    <View style={tw`w-full p-1 py-2 flex flex-row items-center justify-between`}>
      <View style={tw`flex-row`}>
        <FontAwesome style={tw`text-blue-600`} name="image" size={20} color="black" />
        <MaterialIcons style={tw`ml-2 text-blue-600`}
        name="emoji-emotions" size={20} color="black" />
      </View>
      <KeyboardAvoidingView style={tw`px-2 w-9/12 bg-slate-200 rounded-3xl`}>
        <TextInput style={tw`w-full text-lg p-1`} placeholder="Message Jessica" />
      </KeyboardAvoidingView>
      <Ionicons style={tw` text-blue-600`}
      name="send-sharp" size={20} color="black" />
    </View>
  )
}

export default ChatInput

const styles = StyleSheet.create({})