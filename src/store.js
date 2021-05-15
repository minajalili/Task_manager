import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { ModalVisibilityReducer , ToggleTaskListReducer} from './reducer/VisibilityControlsReducer'

const reducer = combineReducers({
    ModalVisibility : ModalVisibilityReducer,
    ToggleTaskList: ToggleTaskListReducer,
})
const initialState = {}
const middleWare = [thunk]

const store = createStore(reducer, initialState, applyMiddleware(...middleWare))

export default store;