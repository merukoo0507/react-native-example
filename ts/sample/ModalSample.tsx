import React, { memo, useState } from "react";
import { useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import CustomerButton, { CustomerButtonInterface } from "../baseComponents/CustomerButton";
import { GlobalStyles } from "../GlobalStyles";

const ModalSample = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalBack, setModalBackPress] = useState(false)
    const [modalPress, setModalPress] = useState(false)

    useEffect(() => {
        console.log("modalBack: " + modalBack + ", modalPress:" + modalPress)
        if (modalBack && !modalPress) {
            setModalVisible(false)
        }
    }, [modalBack])

    useEffect(() => {
        console.log("modalVisible: " + modalVisible)
        if (!modalVisible) {
            setModalBackPress(false)
            setModalPress(false)
        }
    }, [modalVisible])

    const modalDialog = () => {
        return (
            <Modal
                style={{ zIndex: 2}}
                animationType="fade"
                transparent={true}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <TouchableWithoutFeedback
                    onPress={() => {
                        setModalBackPress(true)
                    }}>
                    <View style={GlobalStyles.transparentView} />
                </TouchableWithoutFeedback>     
                
                <View
                    style={GlobalStyles.modalView}>
                    <Text>Hello World!</Text>
                    <View style={{marginTop: 20}}>
                    <CustomerButton
                        title='Hide Modal'
                        style={GlobalStyles.openButton}
                        onPress={() => {
                            setModalVisible(false);
                        }}
                    />
                    </View>
                </View>
                        
            </Modal>
        )
    }
    
    let MadalDialog = memo(modalDialog)

    return(
        <View style={{...GlobalStyles.centeredView, }}>
            <CustomerButton
                title='Show Modal'
                style={GlobalStyles.openButton}
                onPress={ () => {
                    console.log("Show Modal")
                    setModalVisible(true)
                }} 
            />
            { modalVisible ? <MadalDialog /> : null}
        </View>
    )
}

export default ModalSample;