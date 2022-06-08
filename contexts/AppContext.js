import {useState, useEffect, useContext, createContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext()

export const api = "https://photocorner33.herokuapp.com"

export const useAppContext = () => useContext(AppContext)

export function AppProvider({children}) {
    const [dark, setDark] = useState(false)

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
        }
    }

    useEffect(() => {
        getSavedTheme()
    }, [])

    useEffect(() => {
        saveTheme()
    }, [dark])
   
    return(
        <AppContext.Provider value={{dark, setDark}}>
            {children}
        </AppContext.Provider>
    )
}