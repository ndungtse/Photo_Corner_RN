import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAvoidingView } from 'react-native-web';
import { useAuth } from '../../contexts/AuthContext';

const Post = ({post}) => {
    const [poster, setPoster] = useState(null)
    const { user, getUserById} = useAuth()
	const [postData, setPostData] = useState(post);

    const handlePoster = async(id)=> {
        const data = await getUserById(id);
        setPoster(data)
    }

    useEffect(()=>{
        handlePoster(postData.user);
    },[post])
  return (
    <>
    {poster && (
    <View style={styles.post}>
        <View style={tw`flex px-2 flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center`}>
                <View style={tw`h-[13] w-[13] border-2 border-blue-500 rounded-full`}>
                    <Image style={{ width: '100%', height: '100%', borderRadius: 100 }} source={{uri: poster?.profile}} />
                </View>
                <View style={tw`flex ml-3 flex-col`}>
                    <Text style={tw`font-semibold`}>{postData.username}</Text>
                    <Text>{postData.created}</Text>
                </View>
            </View>
            <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
        <View style={tw`flex px-1 flex-col mt-3`}>
          <Text style={tw`px-1`}>{postData.caption}</Text>
          <Image style={tw`w-full h-[100]`}
            source={{uri: postData.image_url}} />
        </View>
        <View style={tw`mt-3 flex-row items-center justify-between px-2`}>
            <View style={tw`flex-row`}>
                <AntDesign name="heart" size={24} color="black" />
                <FontAwesome style={tw`ml-2`} name="comment" size={24} color="black" />
                <Entypo style={tw`ml-2`} name="share" size={24} color="black" />
            </View>
            <FontAwesome name="bookmark" size={24} color="black" />
        </View>
        <View style={tw`flex-row items-center w-full justify-between px-2`}>
            <KeyboardAvoidingView>
                <TextInput style={styles.input} placeholder="Add a comment..." />
            </KeyboardAvoidingView>
            <MaterialIcons style={tw`mt-3`} name="send" size={24} color="black" />
        </View>
    </View>
    )}
    </>
  )
}

export default Post

const styles = StyleSheet.create({
    post:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 12,
        borderWidth: 1,
        paddingVertical: 10,
        borderColor: '#7589e5',
    },
    input:{
        width: '90%',
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        height: 40,
        paddingHorizontal: 10,
    }
})