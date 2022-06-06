import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
          <Text style={styles.logo}>Photo Corner</Text>
          <FontAwesome name='search' />
      </View>
      <NavBar />
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
    }
})
