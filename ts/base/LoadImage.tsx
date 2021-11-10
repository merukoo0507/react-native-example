import React from 'react'
import {View, Image, StyleSheet} from 'react-native'

export default function LoadImage() {
    return(
        <Image 
            source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={ styles.image } 
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50
    }
})