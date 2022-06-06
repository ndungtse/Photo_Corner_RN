import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Messages from './screens/Messages';


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home' >
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Messages" component={Messages} />
      </stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


