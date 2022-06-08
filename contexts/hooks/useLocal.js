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
    const savedValue = await AsyncStorage.getItem(key);
    if (savedValue) return savedValue;
    return 
}
