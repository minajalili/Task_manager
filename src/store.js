import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import TaskListReducer from "./store/TaskList/TaskListReducer";
import TaskReducer from "./store/Task/TaskReducer";
import AddTaskReducer from "./store/AddTask/AddTaskReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  ModalVisibility: AddTaskReducer,
  ToggleTaskList: TaskListReducer,
  TasksList: TaskReducer,
});
const middleWare = [thunk];

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
