import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-native'
import {TextInput, Text, View, Image, StyleSheet} from 'react-native'
import Dialog from "react-native-dialog";
import { GlobalValues } from '../GlobalValues';


export default function DialogSample() {
    const [visible, setVisible] = useState(true);
    
    const handleCancel = () => {
      setVisible(false);
     };
    return (
        <>
        <Dialog.Container visible={visible} onBackdropPress={handleCancel}>
          <Dialog.Title>Title</Dialog.Title>
          <Dialog.Button label="Cancel" onPress={handleCancel} />
        </Dialog.Container>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 100,
        height: 100,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 4,
        backgroundColor: 'blue',
    }
})