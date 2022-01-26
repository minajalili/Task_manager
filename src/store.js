import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import TaskListReducer from './store/TaskList/TaskListReducer';
import TaskReducer from "./store/Task/TaskReducer"
import ModalTaskReducer from "./store/ModalTask/ModalTaskReducer"


const reducer = combineReducers({
    ModalVisibility : ModalTaskReducer,
    ToggleTaskList: TaskReducer,
    TasksList:TaskListReducer,

})
const initialState = {}
const middleWare = [thunk]

const store = createStore(reducer, initialState, applyMiddleware(...middleWare))

export default store;