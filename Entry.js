import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import { useAuth } from './contexts/AuthContext';
import BottomTabNavigator from './components/BottomTabNavigator';
import linking from './components/LinkingConfig';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Search from './components/Home/Search';


const Stack = createNativeStackNavigator();

export default function Entry() {
  const { user } = useAuth();

  useEffect(() => {
    console.log('user', user);
  }, [user]);

  return (
        <NavigationContainer
        linking={linking}
        >
          <Stack.Navigator initialRouteName={user?'Home':'Login'} >
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
          </Stack.Navigator>
          {/* <StatusBar style="auto" /> */}
        </NavigationContainer>
  );
}


