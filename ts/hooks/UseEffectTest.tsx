import React, { useEffect, useReducer, useState } from 'react'
import { memo } from 'react'
import { Button } from 'react-native'
import {TextInput, Text, View, Image, StyleSheet} from 'react-native'

export default function UseEffectTest() {
    const [count, setCount] = useState(0)
    const countEvery3 = Math.floor(count / 3)

    //call "functions" with side effects within our components
    useEffect(() => (
        console.log(countEvery3)
    ), [countEvery3])

    //undefined dependencies
    useEffect(() => (
        console.log("Incremented.")
    ))

    //Empty dependencies
    useEffect(() => (
        console.log("Only once.")
    ), )

    return (
        <>
            <Button
                title={`Increment ${count}`}
                onPress={() => {
                    setCount(count + 1)
                }}
            />
        </>
    )
}