import React, { useState } from 'react'
import { memo } from 'react'
import { Button } from 'react-native'
import {TextInput, Text, View, Image, StyleSheet} from 'react-native'

function Label({title}) {
    console.log(`Rendered: ${title}`)
    return <Text>{title}</Text>
}

const LabelMemo = memo(Label)

export default function Memo() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Button
                title={`Press ${count} times`}
                onPress={ () => {
                    setCount(count + 1)
                }} 
            />
            <LabelMemo title="Label with memo" />
            <Label title="Label"/>
        </>
    )
}