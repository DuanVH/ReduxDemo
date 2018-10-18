import {combineReducers} from 'redux';
import taskReducers from './taskReducers';

// Gop cac Reducers lai
const allReducers = combineReducers({
    taskReducers,
    // You can add more Reducers here
});
export default allReducers;
