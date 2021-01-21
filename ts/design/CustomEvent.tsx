import React, { useState } from 'react'
import { Button } from 'react-native'
import {View, Image, StyleSheet} from 'react-native'

function CustomerButton({title, onIncrement}) {
    return <Button 
                title={title} 
                onPress={onIncrement} />
}


export default function CustomEvent() {
    const [count, setCount] = useState(0)

    return(
        <CustomerButton
            title = {`Click HERE to increment: ${count}`}
            onIncrement={() => setCount(count+1)} />
    )
}
