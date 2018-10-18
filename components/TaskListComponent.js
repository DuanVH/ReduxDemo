import React, {Component} from 'react';
import {
    Dimensions, Platform, StyleSheet,
    FlatList, TextInput, Text, Image,
    TouchableHighlight
} from 'react-native';
import TaskItemContainer from '../containers/TaskItemContainer'

export default class TaskListComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={this.props.tasks}
                renderItem={({item, index}) => {
                    return (
                        // Must container
                        // Moi 1 tac list ta them 1 task itemComponent
                        <TaskItemContainer{...item}>

                        </TaskItemContainer>
                    );
                }}
                keyExtractor={(item, index) => item.taskName}
            >

            </FlatList>
        );
    }
}
