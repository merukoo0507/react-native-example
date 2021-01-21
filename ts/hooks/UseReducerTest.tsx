import React, { useReducer, useState } from 'react'
import { memo } from 'react'
import { Button } from 'react-native'
import {TextInput, Text, View, Image, StyleSheet} from 'react-native'


// use useReducer when our state has multiple sub-values, 
// e.g. an object containing keys that we want to update independently.
function reducer(state, action) {
    switch(action.type) {
        case 'first':
            return { ...state, first: action.value}
        case 'last':
            return { ...state, last: action.value}
    }
}

export default function UseReducerTest() {
    const [state, dispatch] = useReducer(reducer, { first: '', last: ''})

    return (
        <>
            <TextInput
                style={{ fontSize: 20}}
                placeholder="First"
                value={state.first}
                onChangeText={ (text) => (
                    dispatch({type: 'first', value: text})
                )}
            />
            <TextInput
                style={{ fontSize: 20}}
                placeholder="Last"
                value={state.last}
                onChangeText={(text) => (
                    dispatch({type: 'last', value: text})
                )}
            />

            <Text>Hello {state.first},  {state.last}</Text>
        </>
    )
}