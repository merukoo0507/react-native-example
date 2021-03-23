import React from 'react'
import { StyleSheet, View} from 'react-native'

export default function FlexDirectionBasics() {
    <View style={styles.columnView}  >
        <View style={styles.rowView} >
            <View style={styles.powderblue}/>
            <View style={styles.skyblue}/>
            <View style={styles.steelblue}/>
        </View>
        <View style={styles.rowReverseView}>
            <View style={styles.powderblue}/>
            <View style={styles.skyblue}/>
            <View style={styles.steelblue}/>
        </View>
        <View style={styles.columnView} >
            <View style={styles.powderblue}/>
            <View style={styles.skyblue}/>
            <View style={styles.steelblue}/>
        </View>
        <View style={styles.columnReverseView} >
            <View style={styles.powderblue}/>
            <View style={styles.skyblue}/>
            <View style={styles.steelblue}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    rowView: {
        flexDirection: 'row'
    },
    rowReverseView: {
        flexDirection: 'row-reverse'
    },
    columnView: {
        flexDirection: 'column'
    },
    columnReverseView: {
        flexDirection: 'column-reverse'
    },
    powderblue: {
        width: 50, 
        height: 50, 
        backgroundColor: 'powderblue'
    },
    skyblue: {
        width: 50, 
        height: 50, 
        backgroundColor: 'skyblue'
    },
    steelblue: {
        width: 50, 
        height: 50, 
        backgroundColor: 'steelblue'
    }
})