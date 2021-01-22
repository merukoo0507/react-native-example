import React, { useState } from 'react'
import { Button } from 'react-native'
import {View, Image, StyleSheet} from 'react-native'
import CustomerButton from './CustomerButton'

export default function CustomEvent() {
    const [count, setCount] = useState(0)

    return(
        <CustomerButton
            title = {`Click HERE to increment: ${count}`}
            onPress={() => setCount(count+1)} />
    )
}
