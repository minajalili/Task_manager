import * as actions from "./TaskActionTypes";

const initialState = {
  loading: false,
  tasks: [],
  error: "",
};

const TasksListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TASK_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.TASK_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    case actions.TASK_LIST_DONE:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    case actions.TASK_LIST_FAILUR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default TasksListReducer;
