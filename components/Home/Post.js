import { StyleSheet, Text, View, ImageComponent } from 'react-native'
import React from 'react'

const Post = () => {
  return (
    <View style={tw`w-full flex flex-col`}>
        <View style={tw`flex items-center justify-between`}>
            <View style={tw`flex`}>
                <Image source={require('../../assets/land.png')} />
                <View style={tw`flex flex-col`}>
                    <Text style={tw`font-semibold`}>Priscillia Shane</Text>
                    <Text>@shanepriscillia</Text>
                </View>
            </View>
            
        </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({})