import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from './screens/Notification';
import Messages from './screens/Messages';
import Account from './screens/Account';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Home from './screens/Home';
import Post from './screens/Post';
import { AppProvider } from './contexts/AppContext';
import { store } from './contexts/Redux/store';
import { Provider } from 'react-redux';
import Chat from './screens/Chat';


const stack = createNativeStackNavigator();

export default function App() {
  const { isLoggedIn } = store.getState().user;

  return (
    <Provider store={store}>
      <AppProvider>
        <NavigationContainer>
          <stack.Navigator initialRouteName={!isLoggedIn?'Messages':'Login'} >
            <stack.Screen name="Home" component={Home}
            options={{
              headerShown: false
            }} />
            <stack.Screen name="Messages" component={Messages} 
            options={{
              headerShown: false
            }} />
            <stack.Screen name="Post" component={Post} 
            options={{
              headerShown: false
            }} />
            <stack.Screen name="Notifications" component={Notification} 
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
          </stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </AppProvider>
    </Provider>
  );
}


