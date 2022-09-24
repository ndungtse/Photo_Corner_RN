import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

async function getSavedValue(key, inValue) {
    const savedValue = JSON.parse(AsyncStorage.getItem(key))
    if (savedValue) return savedValue

    if(savedValue instanceof Function) return inValue()
    return inValue
}

async function saveValue(key, inValue) {
    AsyncStorage.setItem(key, JSON.stringify(inValue))
}

export default async function useLocal(key, inValue){
    const [value, setValue] = useState(()=>{
        return getSavedValue(key, inValue)
    })

    useEffect(()=>{
        saveValue(key, value)
    }, [value])

    return [value, setValue]
}

export const getLocal = async(key) =>{
    try {
        const savedValue = await AsyncStorage.getItem(key);
        if (savedValue) return JSON.parse(savedValue);
        return null
    } catch (error) {
        return null
    }
}

export const removeLocal = async(key) =>{
    try {
        await AsyncStorage.removeItem(key);
        return true
    } catch (error) {
        return false
    }
}