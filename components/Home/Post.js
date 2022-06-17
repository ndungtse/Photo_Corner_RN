import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons';

const Post = ({post}) => {
  return (
    <View style={styles.post}>
        <View style={tw`flex flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center`}>
                <View style={tw`h-[13] w-[13] border-2 border-blue-500 rounded-full`}>
                    <Image style={{ width: '100%', height: '100%', borderRadius: 100 }} source={require('../../assets/land.png')} />
                </View>
                <View style={tw`flex ml-3 flex-col`}>
                    <Text style={tw`font-semibold`}>{post.username}</Text>
                    <Text>{post.created}</Text>
                </View>
            </View>
            <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
        <View style={tw`flex flex-col mt-3`}>
          <Text>{post.caption}</Text>
          <Image style={tw`w-full h-[100] rounded-xl`}
            source={{uri: post.secureUrl}} />
        </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
    post:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 12,
        borderWidth: 0.1,
        padding: 10,
        borderColor: '#10151f34',
        // borderRadius: 10
    }
})