import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import TaskListReducer from "./store/TaskList/TaskListReducer";
import TaskReducer from "./store/Task/TaskReducer";
import ModalTaskReducer from "./store/ModalTask/ModalTaskReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  ModalVisibility: ModalTaskReducer,
  ToggleTaskList: TaskListReducer,
  TasksList: TaskReducer,
});
const middleWare = [thunk];

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
