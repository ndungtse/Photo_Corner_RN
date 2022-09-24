import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Checkbox, TextInput, ActivityIndicator, Colors  } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import loginUser from '../contexts/api/Login';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Login = () => {
  const [show, setShow]= useState(false);
  const [data, setData] = useState({email: '', password: ''});

  const dispatch = useDispatch()
  const { status, error, isFetching } = useSelector(state => state.user)

  const navigation = useNavigation()

  const logUser = async()=>{
    if(!isFetching){
      const isTrue = await loginUser(dispatch, data)
      if(isTrue) {
        dispatch({type: 'LOGIN'})
        navigation.navigate('Root')
      }
    }
  }
  useEffect(()=>{
    return () => {
      setShow(false)
      setData({email: '', password: ''})
    }
  },[])
  return (
    <View style={tw`p-2 flex flex-col items-center justify-center h-full`}>

      <Image source={require('../assets/land.png')} style={tw`h-[80] w-2/3`} />
      <Text style={tw`text-blue-500 text-2xl font-semibold`}>Login Into Photo Corner</Text>
      {error && <Text style={tw`text-red-500 text-sm`}>{status}</Text>}

      <TextInput value={data.email}
        onChangeText={(text) => setData({...data, email: text})}
       style={tw`h-11 mt-6 min-w-60 w-4/5 max-w-[100]`}
      label={`Email`} mode="outlined"  />

      <TextInput
        value={data.password}
        onChangeText={(text) => setData({...data, password: text})}
       style={tw`h-11 mt-4 min-w-60 w-4/5 max-w-[100]`}
      label={`Password`} minLength={4} mode="outlined" secureTextEntry={!show}
      right={<TextInput.Icon name={show?"eye":"eye-off"} style={tw`mt-4`}
      onPress={()=> setShow(!show)} />}  />

      <View style={tw`w-4/5 max-w-[100] flex flex-row-reverse items-center`}>
         <Text style={tw`text-blue-600`}>Forgot Password?</Text>
      </View>

      <TouchableOpacity
        onPress={()=>logUser()}
       style={tw`w-4/5 max-w-[100] text-white font-semibold text-xl p-2 rounded-md mt-4 bg-blue-600 flex items-center justify-center`}>
         {isFetching ? <ActivityIndicator animating={true} color={Colors.white} /> : (
        <Text style={tw`text-white text-xl font-semibold`}>Login</Text>
        )}
      </TouchableOpacity>

      <View style={tw`w-4/5 max-w-[100] mt-4 flex flex-row items-center`}>
         <Text style={tw`text-lg`}>Don't have an Account?</Text>
         <Text
          onPress={()=>navigation.navigate('Signup')}
          style={tw`text-blue-600 ml-2 text-lg`}>Signup</Text>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})