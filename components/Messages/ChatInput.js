import { StyleSheet, Text, View, TextInput,
    KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useMessage } from '../../contexts/MessageContext';

const ChatInput = () => {
  const [inputMessage, setInputMessage] = useState("")
  const user = useSelector(state => state.user.currentUser)

  const mContextData = useMessage()
  const { socket, start, setStart, getRelMessages, room } = mContextData

  const handleInputChange = (e)=>{
    setInputMessage(e.target.value);
  }

  const sendMessage = async (e)=>{
    e.preventDefault();
    if (inputMessage !== "") {
      const messageData = {
        room: mContextData.room,
        room1: mContextData.room1,
        author: user.username,
        text: inputMessage,
        time:  new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      console.log(messageData);
      const res = await fetch("https://zamuka.herokuapp.com/hidden/messages/newMessage", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(messageData),
      });
      const data =await res.json();
      console.log(data);
      setStart(!start)
      console.log('sent');
      getRelMessages(room);
      setInputMessage("");
    } else {
      return;
    }
  }


  return (
    <View style={tw`w-full p-1 py-2 flex flex-row items-center justify-between`}>
      <View style={tw`flex-row`}>
        <FontAwesome style={tw`text-blue-600`} name="image" size={20} color="black" />
        <MaterialIcons style={tw`ml-2 text-blue-600`}
        name="emoji-emotions" size={20} color="black" />
      </View>
      <KeyboardAvoidingView style={tw`px-2 w-9/12 bg-slate-200 rounded-3xl`}>
        <TextInput onChange={handleInputChange} value={inputMessage}
         style={tw`w-full text-lg p-1`} placeholder="Message Jessica" />
      </KeyboardAvoidingView>
      <TouchableOpacity onPress={sendMessage}>
        <Ionicons style={tw` text-blue-600`}
        name="send-sharp" size={20} color="black" />
      </TouchableOpacity>
      
    </View>
  )
}

export default ChatInput

const styles = StyleSheet.create({})