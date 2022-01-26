import * as actions from "./TaskListActionTypes";

export const TaskListShow = (dispatch) => {
  dispatch({
    type: actions.TASK_LIST_SHOW,
  });
};
export const TaskListHidden = (dispatch) => {
  dispatch({
    type: actions.TASK_LIST_HIDDEN,
  });
};
