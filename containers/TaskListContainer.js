import {connect} from 'react-redux';
import TaskListComponent from '../components/TaskListComponent';

// Mang cac task chinh la cac state de truyen sang component
const mapStateToProps = (state) => {
    // alert(`state send to task list = ${JSON.stringify(state)}`);
    return {
        tasks: !state.taskReducers ? [] : state.taskReducers
    }
};

const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer;


