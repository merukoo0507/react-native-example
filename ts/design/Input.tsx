import React, { useState } from 'react';
import { Button } from 'react-native';
import {TextInput, Text, View, Image, StyleSheet} from 'react-native';
import { setConstantValue } from 'typescript';

export default function Input() {
    const [text, setText] = useState('')

    return(
        <View>
            <TextInput 
                style={{ fontSize: 20, color: 'steelblue'}}
                placeholder="Type here."
                onChangeText={ (text) => {
                    setText(text)
                }}
                />
            <Text style={{ fontSize:20}}> 
                {'\n'}You entered: {text}
            </Text>
        </View>
    )
}