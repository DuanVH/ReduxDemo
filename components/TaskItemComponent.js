import React, {Component} from 'react';
import {
    Dimensions, Platform, StyleSheet,
    View, Text, TextInput, Image,
    TouchableOpacity, RefreshControl
} from 'react-native';

export default class TaskItemComponent extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity
                    onPress={() => {
                        // Call this action in Container
                        alert("Vu DUan")
                    }}
                    style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
                </TouchableOpacity>
                <Text style={{margin: 20, color: this.props.completed === true ? 'darkgreen' : 'black'}}>
                    {this.props.taskName}
                </Text>
            </View>
        );
    }

}
