import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { useUsers } from '../../contexts/userContext';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { setUser } from '../../contexts/Redux/userSlice';

const UpdatePicture = ({setShowForm, cover}) => {
  const [image, setImage] = useState(null);
  const [imageString, setImageString] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const { updatePhoto, updateCoverPhoto } = useUsers()
  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setImageString("data:image/png;base64," +result.base64);
    }
  };

  const submitPost = async() => {
		setLoading(true);
    let isdone;
	  if (cover) {
      isdone = await updateCoverPhoto({ imageStr: imageString, user: user._id });
    } else{
      isdone = await updatePhoto({ imageStr: imageString, user: user._id });
    }
	  if(isdone.done){
      setStatus("Post created successfully");
		  console.log('done');
      dispatch(setUser(isdone.user))
	    setShowForm(false);
	  }
    else{
      setStatus("something went wrong");
    }
    setLoading(false);
	}

  return (
    <View style={tw`px-3 pt-4 right-0 bottom-0 z-20 flex items-center justify-center absolute top-0 left-0 bg-black/50 `}>
      <Pressable onPress={()=> setShowForm(false)}
       style={tw`absolute top-0 left-0 bottom-0 right-0 z-30`}></Pressable>
      <View style={tw`bg-white py-3 z-40 rounded-lg flex-col items-center w-[90%]`}>
        <Text style={tw`text-center mt-1`}>{cover?'Update Cover Photo':'Update Profile Picture'}</Text>
        <Pressable style={tw`absolute right-1 top-1`} onPress={()=> setShowForm(false)}>
          <AntDesign name="closecircleo" size={24} color="black" />
        </Pressable>
        {!image && <Pressable onPress={pickImage}>
        <MaterialCommunityIcons name="image-plus" size={84} color={Colors.blue700} />
        </Pressable>}
       {image &&  <View style={tw`flex-row w-full justify-center mt-2 px-3`}>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} resizeMode="contain" />
        </View>}
        <View style={tw`flex-row w-full justify-between mt-2 px-3`}>
          <Pressable onPress={pickImage} style={tw`bg-slate-200 flex-row items-center justify-center px-1 rounded-lg`}>
            <AntDesign name="picture" size={24} color="black" />
            <Text style={tw`ml-1`}>
              Image
            </Text>
          </Pressable>
          <Pressable onPress={submitPost}
            style={tw`bg-blue-500 rounded-lg p-2 w-6/12`}>
              {loading?<ActivityIndicator animating={true} color={Colors.white} />:(
            <Text style={tw`text-center text-white`}>Save</Text>)}
          </Pressable>
        </View>
        {status && <Text style={tw`text-yellow-600 text-center`}>{status}</Text>}
      </View>
    </View>
  )
}

export default UpdatePicture

