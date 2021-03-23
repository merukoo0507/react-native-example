import React, {Component} from 'react'
import {Text, View, Button, StyleSheet, TouchableHighlight, ImageBackground, ImageBackgroundBase, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native'

export default class ButtonSample extends Component {
    _onPressButton() {
        alert('U tapped the button!')
    }
    _onLongPressButton() {
        alert('U long-pressed the button!')
    }

    render() {
        return(
            <View style={styles.constainer}>
                <View style={styles.btnContainer}>
                    <Button 
                        title= "No.1"
                        onPress={this._onPressButton}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <Button 
                        title= "No.2"
                        onPress={this._onPressButton}
                        color='#841584'
                    />
                </View>
                <View style={styles.alternativeLayoutBtnContainer}>
                    <Button 
                        title="No.3"
                        onPress={this._onPressButton}
                    />
                    <Button
                        title="No.4"
                        onPress={this._onPressButton}
                    />
                </View>
                
                <View>
                    <TouchableHighlight
                        style={styles.btnContainer} 
                        onPress={this._onPressButton} underlayColor="white">
                        <View>
                            <Text style={styles.btnText}>TouchableHighlight</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableOpacity
                        style={styles.btnContainer} 
                        onPress={this._onPressButton}>
                        <View>
                            <Text style={styles.btnText}>TouchableHighlight</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                        <View style={styles.btnContainer}>
                            <Text style={styles.btnText}>TouchableNativeFeedback</Text>
                        </View>
                    </TouchableNativeFeedback>
                
                    <TouchableHighlight
                        style={styles.btnContainer} 
                        onPress={this._onPressButton}
                        onLongPress={this._onLongPressButton} underlayColor="white">
                        <View>
                            <Text style={styles.btnText}>Touchable with Long Press</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center'
    },
    btnContainer: {
        margin: 10,
        // backgroundColor: 'gray',
        borderColor: 'gray',
        borderWidth: 1
    },
    alternativeLayoutBtnContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnText: {
        textAlign: 'center',
        color: 'gray',
        margin: 10
    }
})