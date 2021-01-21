import React, { useState } from 'react'
import { Button } from 'react-native'
import {TextInput, Text, View, Image, StyleSheet} from 'react-native'

const data = [
    {id: 'a', name: 'David'},
    {id: 'b', name: 'Gabe'},
    {id: 'c', name: 'Kim'}
]

export default function ListKey() {
    return (
        <View>
            {data.map((item) => (
                <Text key={item.id}>{item.name}</Text>
            ))}
        </View>
    )
}