import {useState, useEffect, useContext, createContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocal } from './hooks/useLocal';
import { useDispatch } from 'react-redux';
import { authorize } from './Redux/userSlice';


const AppContext = createContext()

export const api = "https://photocorner33.herokuapp.com"

export const useAppContext = () => useContext(AppContext)

export function AppProvider({children}) {
    const [dark, setDark] = useState(false);
    const [isWantToPost, setIsWantToPost] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dispatch = useDispatch()

    const saveTheme = async() => {
        if (dark) {
           await AsyncStorage.setItem('theme', 'dark')
        } else {
           await AsyncStorage.setItem('theme', 'light')
        }
    }

    const getSavedTheme = async() => {
        const theme = await AsyncStorage.getItem('theme')
        if (theme === 'dark') {
            setDark(true)
        } else {
            setDark(false)
            console.log('light');
        }
    }

    const getSavedToken = async() => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            // dispatch(authorize(token))
            setIsLoggedIn(true)
            console.log('token', token);
            setIsReady(true)
        }
    }

    useEffect(() => {
        getSavedTheme()
        getSavedToken()
    },[])

    useEffect(() => {
        saveTheme()
    }, [dark])
   
    return(
        <AppContext.Provider value={{dark, setDark, isWantToPost, isLoggedIn, setIsWantToPost}}>
            {isReady&&children}
        </AppContext.Provider>
    )
}