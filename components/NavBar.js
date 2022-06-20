import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../contexts/AppContext';
import { Colors } from 'react-native-paper'

const NavBar = () => {
  const navigation = useNavigation()
  const { isWantToPost, setIsWantToPost } = useAppContext()

  const navigate = (routeName) => {
    setIsWantToPost(false)
    navigation.navigate(routeName)
  }

  return (
    <View style={styles.nav}>
      <Button onPress={() => navigate('Home')} >
        <Ionicons name='home' style={tw`text-2xl`} />
      </Button>
        <Button onPress={() => navigate('Messages')} >
          <Ionicons name='chatbox' style={tw`text-2xl`} />
        </Button>
        <Button onPress={() => setIsWantToPost(true)} >
          <FontAwesome5 name='plus-square' style={tw`text-2xl`} />
        </Button>
        <Button onPress={() => navigate('Notifications')} >
          <FontAwesome5 name='bell' style={tw`text-2xl`} />
        </Button>
        <Button onPress={() => navigate('Profile')} >
          <FontAwesome5 name='user' style={tw`text-2xl`} />
        </Button>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderTopWidth: 0.1,
    justifyContent: 'center',
    borderColor: '#10151f34',
    height: 60,
    alignItems: 'center',
  }
})