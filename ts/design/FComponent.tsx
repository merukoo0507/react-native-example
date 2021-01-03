import React from 'react'
import {View, StyleSheet, Button} from 'react-native'

interface Props {
    title: string,
    color?: string
}

export default function FComponent({title, color}: Props) {
    return(
        <View>
            <Button 
                title={title} 
                color={color}
                onPress={() => { alert('onPress') }} />
        </View>
    )
}