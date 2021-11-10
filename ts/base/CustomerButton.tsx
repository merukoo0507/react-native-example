import React, { useState } from 'react'
import { Button, StyleProp, TouchableWithoutFeedback, ViewStyle, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import {View, Image, StyleSheet} from 'react-native'

export interface CustomerButtonInterface {
    title?: string 
    onPress?: () => any
    style?: StyleProp<ViewStyle>
  }

const CustomerButton = ({title, onPress, style}: CustomerButtonInterface) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomerButton;
