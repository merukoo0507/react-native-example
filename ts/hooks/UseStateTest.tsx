import React, { useState } from 'react'
import { memo } from 'react'
import { Button } from 'react-native'
import {TextInput, Text, View, Image, StyleSheet} from 'react-native'

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1

export default function UseStateTest() {
    const [diceRolls, setDiceRolls] = useState([])

    return (
        <>
            <Button
                title={`Roll dice!`}
                onPress={ () => {
                    setDiceRolls([...diceRolls, randomDiceRoll()])
                }} 
            />
            {diceRolls.map( (item, index) => (
                <Text style={{ fontSize: 20}} key={index}>
                    {item}
                </Text>    
            ))}
        </>
    )
}