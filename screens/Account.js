import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar';
import tw from 'twrnc'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Profile from '../components/Account/Profile';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Post from '../components/PostForm';
import { useSelector } from 'react-redux';

const Account = () => {
  const navigation = useNavigation()
  const user = useSelector(state => state.user.currentUser)

  return (
    <View style={tw`px-3 flex-col pt-4 w-full h-full justify-between`}>
      <ScrollView showsVerticalScrollIndicator={false}
           style={tw`h-[85%] w-full relative flex bg-black `}>
        <View style={tw`w-full flex-col h-[50] relative`}>
          <Image style={tw`w-full h-full`} source={{uri: user.profile}} />
          <View style={tw`flex-row w-full px-3 top-5 justify-between absolute`}>
            <Feather name="camera" size={20} color="black" style={tw`bg-slate-200 rounded-lg p-1 px-[6]`} />
            <Entypo
              onPress={()=> navigation.navigate("Login")}
             name="dots-three-vertical" size={20} color="black" style={tw`bg-slate-200 rounded-lg p-1 px-[6]`}/>
          </View>
        </View>
        <Profile />
      </ScrollView>
      <NavBar/>
      <StatusBar style="light" hidden={true} />
    </View>
  )
}

export default Account

const styles = StyleSheet.create({})