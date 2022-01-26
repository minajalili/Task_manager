import * as actions from "./TaskListActionTypes";

const initialState = {
    visibility = true
}

 const ToggleTaskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TASK_LIST_SHOW:
      return {
          ...state,
          visibility= true
      };
    case actions.TASK_LIST_HIDDEN:
      return {
        ...state,
        visibility= false
    };
    default:
      return state;
  }
};

export default ToggleTaskListReducer