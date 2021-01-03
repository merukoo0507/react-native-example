import React, { useState } from 'react'
import { Button } from 'react-native'
import { Text, View, Image, StyleSheet} from 'react-native'
import { setConstantValue } from 'typescript'


const ConditionalBtn = ({title, showButton}) => (
    <View>
        <Text style={{ fontSize: 20 }}>{title}</Text>
        {showButton && <Button title="Press me!"/>}
    </View>
)

const ConditionalString = ({title, btnTitle}) => (
    <View>
        <Text style={{ fontSize: 20 }}>{title}</Text>
        {btnTitle ? <Button title={btnTitle} /> : null}
    </View>
)

const CheckError = ({loading, error, title}) => {
    let content 
    if (error) {
        content = <Text style={{ fontSize: 20, color: 'red'}}>Error</Text>
    } else if (loading) {
        content = <Text style={{ fontSize: 20, color: 'gray'}}>Loading...</Text>
    } else {
        content = (
            <View>
                <Text style={{ fontSize: 20}}>{title}</Text>
            </View>
        )
    }

    return content
}

export default function Conditional() {
    const [count, setCount] = useState(0)

    return(
        <View>
            <ConditionalBtn title="Title" showButton={false} />
            <ConditionalBtn title="Title with button" showButton={true} />
            <ConditionalString title="Title" />
            <ConditionalString title="Title with button" btnTitle="Press Me" />

            <CheckError error={true}/>
            <CheckError loading={true}/>
            <CheckError title="Title"/>
        </View>
    )
}