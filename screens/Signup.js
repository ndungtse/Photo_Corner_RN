import { StyleSheet, Text, View, Image, Button, TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { TextInput } from 'react-native-paper';
import regUser from '../contexts/api/Signup';
import { useNavigation } from '@react-navigation/native';
import { Checkbox, ActivityIndicator, Colors } from 'react-native-paper';
import { useDispatch } from 'react-redux';

const Signup = () => {
  const [show, setShow]= useState(false)
  const [checked, setChecked] = useState(false)
  const [data, setData] = useState({
    FullName: '', username:'',
    email: '', password: ''});

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const signUser = async()=>{
      if(!isFetching){
        const isTrue = await regUser(dispatch, data)
        if(isTrue) {
          dispatch({type: 'LOGIN'})
          navigation.navigate('Home')
        }
      }
    }

  return (
    <View style={tw`p-2 flex flex-col items-center justify-center h-full`}>
      <Text style={tw`text-blue-500 text-2xl font-semibold`}>Join Photo Corner</Text>

      <TextInput
        value={data.FullName}
        onChangeText={(text) => setData({...data, FullName: text})}
       style={tw`h-11 mt-6 min-w-60 w-4/5 max-w-[100]`}
      label={`Full Name`} mode="outlined"  />

      <TextInput
        value={data.username}
        onChangeText={(text) => setData({...data, username: text})}
       style={tw`h-11 mt-6 min-w-60 w-4/5 max-w-[100]`}
      label={`username`} mode="outlined"  />
      <TextInput
        value={data.email}
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

      <View style={tw`w-4/5 mt-5 max-w-[100] flex flex-row items-start`}>
         <Checkbox style={tw`mt-3 text-blue-600`} status={checked ? 'checked' : 'unchecked'}
             onPress={() => {
            setChecked(!checked);
          }} color={Colors.blue500}/>
         <Text style={tw`text-lg ml-2`}>I agree with Terms and conditions of photo corner</Text>
      </View>
      <TouchableOpacity
        onPress={()=>signUser()}
        style={tw`w-4/5 max-w-[100] text-white font-semibold text-xl p-2 rounded-md mt-4 bg-blue-600 flex items-center justify-center`}>
         {isFetching ? <ActivityIndicator animating={true} color={Colors.white} /> : (
        <Text style={tw`text-white text-xl font-semibold`}>Login</Text>
        )}
      </TouchableOpacity>
      <View style={tw`w-4/5 max-w-[100] mt-4 flex flex-row items-center`}>
         <Text style={tw`text-lg`}>Already have an Account?</Text>
         <Text
          onPress={()=>navigation.navigate('Login')}
          style={tw`text-blue-600 text-lg ml-2`}>Login</Text>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})