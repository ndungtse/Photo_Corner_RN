import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notifications from './screens/Notifications';
import StoryPreview from './screens/StoryPreview';
import Messages from './screens/Messages';
import Account from './screens/Account';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Home from './screens/Home';
import { useAppContext } from './contexts/AppContext';
import Chat from './screens/Chat';
import React, { useEffect } from 'react'


const stack = createNativeStackNavigator();

export default function Entry() {
  const { isLoggedIn } = useAppContext();

  useEffect(() => {
    console.log('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
        <NavigationContainer>
          <stack.Navigator initialRouteName={isLoggedIn?'Home':'Login'} >
            <stack.Screen name="Home" component={Home}
            options={{
              headerShown: false
            }} />
            <stack.Screen name="Messages" component={Messages} 
            options={{
              headerShown: false
            }} />
            <stack.Screen name="Notifications" component={Notifications} 
            options={{
              headerShown: false
            }} />
            <stack.Screen name="Profile" component={Account} 
            options={{
              headerShown: false
            }} />
            <stack.Screen name="Login" component={Login}
            options={{
              headerShown: false
            }} />
            <stack.Screen name="Signup" component={Signup} 
            options={{
              headerShown: false
            }}/>
            <stack.Screen name="Chat" component={Chat} 
            options={{
              headerShown: false
            }}/>
            <stack.Screen name="storypreview" component={StoryPreview}
            options={{
              headerShown: false
            }} />
          </stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
  );
}


