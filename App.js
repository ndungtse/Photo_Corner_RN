import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Messages from './screens/Messages';
import Account from './screens/Account';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Post from './screens/Post';
import Notification from './screens/Notification';


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home' >
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Messages" component={Messages} />
        <stack.Screen name="Post" component={Post} />
        <stack.Screen name="Notifications" component={Notification} />
        <stack.Screen name="Profile" component={Account} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Signup" component={Signup} />
      </stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


