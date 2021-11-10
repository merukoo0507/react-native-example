import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-native'
import {TextInput, Text, View, Image, StyleSheet} from 'react-native'

function useInterval(callback, delay) {
    const savedCallback = useRef(null)
    
    // remember latest callback
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        if (delay !== null) {
            let id = setInterval(() => {
                    savedCallback.current()
                }, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}

const CustomHook = () => {
    const [count, setCount] = useState(0)

    useInterval(() => {
        setCount(count + 1)
    }, 1000)

    return (
        <>
            <Text style={{ fontSize: 100}}>{count}</Text>
        </>
    )
}

export default CustomHook