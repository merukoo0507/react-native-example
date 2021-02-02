import React from "react";
import { StyleSheet } from "react-native";
import { AppDefine } from "./AppDefine";

export const GlobalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    transparentView: {
        backgroundColor: "#0000004D",
        height: '100%',
        width: '100%', 
        margin: 0,
    },
    modalView: {
        position: 'absolute',
        height: 200,
        width: 300, 
        top: (AppDefine.height-200)/2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff",
        margin: 10,
        borderRadius: 20,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        opacity: 1
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
  });