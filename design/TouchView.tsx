import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default class TouchView extends Component {
    _onPressButton() {
        alert('U tapped the button!')
    }

    render() {
        return(
            <View>
                <Button 
                    title= "Press Me"
                    onPress={this._onPressButton}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50
    }
});