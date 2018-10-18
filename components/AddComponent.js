import React, {Component} from 'react';
import {
    Dimensions, Platform, StyleSheet,
    View, Text, Image, TextInput,
    Alert,
    TouchableHighlight,
    RefreshControl,
} from 'react-native';
import {addNewTask} from "../actions";

export default class AddComponent extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            newTaskName: '',
        });
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <TextInput style={styles.textStyle}
                           keyboardType='default'
                           placeholder='Enter task name'
                           placeholderTextColor='white'
                           autoCapitalize='none'
                           onChangeText={
                               (text) => {
                                   this.setState({newTaskName: text});
                               }
                           }
                />

                <TouchableHighlight
                    style={{
                        marginRight: 10,
                    }}
                    underlayColor='blue'
                    onPress={(event) => {
                        if (!this.state.newTaskName.trim()) {
                            return;
                        }
                        // Call click event => use Container
                        this.props.onClickAdd(this.state.newTaskName);
                    }}>
                    <Image
                        style={{width: 35, height: 35}}
                        source={require('../icons/icons-add.png')}/>
                </TouchableHighlight>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'tomato',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 64
    },
    textStyle: {
        height: 40,
        width: 300,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
        color: 'white'
    }
});
