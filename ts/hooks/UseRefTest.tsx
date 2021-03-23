import React, {memo, useEffect, useReducer, useRef, useState } from 'react'
import {Button, TextInput, Text, View, Image, StyleSheet} from 'react-native'

export default function UseRefTest() {
    //create and update a single mutable value
    //use .current to access the mutable value.
    const intervalRef = useRef(null)
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count)
        intervalRef.current = setInterval(
            () => (setCount((count) => (count+1))), 
            1000)
        
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <>
            <Text style={{ fontSize: 20}}>{count}</Text>
            <Button
                title="stop"
                onPress={() => {
                    clearInterval(intervalRef.current)
                }} 
            />
        </>
    )
}