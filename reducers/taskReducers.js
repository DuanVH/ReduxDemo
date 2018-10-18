import {ADD_NEW_TASK, TOGGLE_ONE_TASK} from "../actions/actionTypes";

// task = [] : state cu
const taskReducers = (tasks = [], action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            // Khong duoc thay doi state cu
            // Tao object moi chua state moi
            // Tao ra array, chua task cu va object moi add vao cuoi cung
            return [
                ...tasks,
                {
                    // Day la Object moi chua state moi
                    taskId: action.taskId,
                    taskName: action.taskName,
                    completed: false
                }
            ];

        case TOGGLE_ONE_TASK:
            return tasks.map(task =>
                (task.taskId === action.taskId)
                    ? {...task, completed: !task.completed}  // Tao ra 1 task, va thay doi truong completed
                    : task
            );
        default:
            return tasks;  // state does not change
    }
};

export default taskReducers;
