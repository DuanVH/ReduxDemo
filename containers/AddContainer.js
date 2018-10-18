import AddComponent from '../components/AddComponent';
import {addNewTask} from "../actions";
import {connect} from 'react-redux';

// Chuyen State -> Props
// Khong co gi chuyen doi thi phan return bo trong
const mapStateToProps = state => {
    return {

    }
};

// Chuyen Dispatch -> Props
// Khong co gi chuyen doi thi phan return bo trong
const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (inputTaskName) => {
            dispatch(addNewTask(inputTaskName));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);
