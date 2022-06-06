import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import NavBar from '../components/NavBar';
import tw from 'twrnc'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
          <Text style={styles.logo}>Photo Corner</Text>
          <FontAwesome name='search' style={tw`text-xl rounded-xl px-2 py-1 bg-slate-200`} />
      </View>
      <NavBar navigation={navigation} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        flexDirection: 'column',
        width: '100%',
    },
    search: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    logo:{
      fontSize: 20,
    }
})
