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
    case actions.TASK_LIST_FAILUR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case actions.CREATE_TASK_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case actions.CREATE_TASK_SUCCESS:
        return {
          ...state,
          loading: false,
          tasks: action.payload,
        };
      case actions.CREATE_TASK_FAILUR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case actions.COMPLETED_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.COMPLETED_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    case actions.COMPLETED_TASK_FAILUR:
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
