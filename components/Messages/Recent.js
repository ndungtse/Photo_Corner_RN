import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import { useUsers } from '../../contexts/userContext';
import { useSelector } from 'react-redux';

const Recent = ({startChat}) => {
  const { users, setUsers } = useUsers()
  const user = useSelector(state => state.user.currentUser)

  const recentChats = users.filter((u) => u._id !== user._id);

  return (
		<View style={tw`flex-col w-full flex mt-3`}>
			<Text style={tw`text-lg font-semibold`}>Messages</Text>
			<Text>No new Messages.</Text>
			<Text>Messages comming soon in next verions</Text>
			{/* {recentChats.map((use, index) => (
				<RecentRow use={use} key={index} startChat={startChat} />
			))} */}
		</View>
	);
}

export default Recent

const RecentRow = ({ use, startChat }) => {
  const navigation = useNavigation()

  const handlePress = () => {
    startChat(use._id)
    navigation.navigate('Chat')
  }

    return (
        <TouchableOpacity onPress={handlePress}
           style={tw`px-2 flex flex-row w-full mt-3 rounded-lg bg-slate-200 py-2`}>
            <View style={tw`h-[13] w-[13] border-2 border-blue-500 rounded-full`}>
                <Image style={{ width: '100%', height: '100%', borderRadius: 100 }} source={require('../../assets/land.png')} />
            </View>
            <View style={tw`flex ml-2 flex-col w-full`}>
                <Text style={tw`font-semibold text-lg`}>{use.username}</Text>
                <Text>Hey, how are you?</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})