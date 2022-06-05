import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
          <Text style={styles.logo}>Photo Corner</Text>
          <FontAwesome name='search' />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        flexDirection: 'column'
    },
    search: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between' 
    }
})
