import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons';

const Post = () => {
  return (
    <View style={styles.post}>
        <View style={tw`flex flex-row items-center justify-between`}>
            <View style={tw`flex`}>
                <Image source={require('../../assets/land.png')} />
                <View style={tw`flex flex-col`}>
                    <Text style={tw`font-semibold`}>Priscillia Shane</Text>
                    <Text>@shanepriscillia</Text>
                </View>
            </View>
            <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
        <View style={tw`flex flex-col mt-3`}>
          <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, ex? Obcaecati at voluptate reprehenderit recusandae ut, similique animi doloremque totam dolorem debitis tempore, quisquam magni molestias iusto quam qui exercitationem.</Text>
          <Image style={tw`w-full h-[100] rounded-xl`}
            source={require('../../assets/land.png')} />
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