import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Profile from '../components/Account/Profile';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Post from '../components/PostForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeLocal } from '../contexts/hooks/useLocal';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Account = () => {
  const navigation = useNavigation()
  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()

  const logout = async() => {
    const isRemoved = await removeLocal('token')
    if(isRemoved){
      navigation.navigate('Login')
    }
  }

  return (
    <View style={tw`px-3 flex-col pt-4 w-full h-full justify-between`}>
      <ScrollView showsVerticalScrollIndicator={false}
           style={tw`h-[85%] w-full relative flex`}>
        <View style={tw`w-full flex-col h-[50] relative`}>
          <Image style={tw`w-full h-full`} source={{uri: user.cover}} />
          <View style={tw`flex-row w-full px-3 top-5 justify-between absolute`}>
            <Feather name="camera" size={20} color="black" style={tw`bg-slate-200/40 rounded-lg p-1 px-[6]`} />
            <MaterialCommunityIcons
              onPress={logout}
              name="logout" size={20} color="black" style={tw`bg-slate-200/40 rounded-lg p-1 px-[6]`}/>
          </View>
        </View>
        <Profile />
      </ScrollView>
      <StatusBar style="light" hidden={true} />
    </View>
  )
}

export default Account
