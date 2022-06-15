import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar';
import tw from 'twrnc'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Notification from '../components/Notifications/Notification';
import { StatusBar } from 'expo-status-bar';

const Notifications = () => {
  return (
    <View style={tw`px-3 pt-4 w-full h-full justify-between bg-slate-100`}>
      <View style={tw`flex-row w-full items-center justify-between`}>
          <Text style={tw`text-xl font-semibold`}>Notifications</Text>
          <FontAwesome name='search' style={tw`text-xl rounded-xl px-2 py-1 bg-white`} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
         style={tw`h-[85%] w-full flex flex-col`}>
        <View style={tw`flex-col w-full mt-4`}>
          <Text style={tw`font-semibold text-lg`}>New</Text>
          <Notification />
          <Notification />
        </View>
        <View style={tw`flex-col w-full mt-4`}>
          <Text style={tw`font-semibold text-lg`}>Earlier</Text>
          <Notification />
        </View>
        <View style={tw`flex-col w-full mt-4`}>
          <Text style={tw`font-semibold text-lg`}>This Week</Text>
          <Notification />
          <Notification />
        </View>
        <View style={tw`flex-col w-full mt-4`}>
          <Text style={tw`font-semibold text-lg`}>Old</Text>
          <Notification />
          <Notification />
        </View>
      </ScrollView>
      <NavBar />
      <StatusBar style="light" />
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})