import * as actions from "./TaskListActionTypes";

export const TaskListShow = (dispatch) => {
  return {
    type: actions.TASK_LIST_SHOW,
  };
};
export const TaskListHidden = (dispatch) => {
  return {
    type: actions.TASK_LIST_HIDDEN,
  };
};
