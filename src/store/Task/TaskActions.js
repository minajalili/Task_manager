import * as actions from "./TaskActionTypes";
import axios from "axios";


export const taskRequest = () => {
  return {
    type: actions.TASK_LIST_REQUEST,
  };
};
export const taskRequestSuccess = (tasks) => {
  return {
    type: actions.TASK_LIST_SUCCESS,
    payload: tasks,
  };
};
export const taskRequestFailur = (error) => {
  return {
    type: actions.TASK_LIST_FAILUR,
    payload: error,
  };
};
export const taskRequestDone = (tasks) => {
    return {
      type: actions.TASK_LIST_DONE,
      payload: tasks,
    };
  };
export const TaskAction = () => async (dispatch) => {
  try {
    dispatch(taskRequest);

    const { data } = await axios.get(
      "https://6099176399011f00171401cb.mockapi.io/task"
    );

    dispatch(taskRequestSuccess(data));
  } catch (error) {
    dispatch(taskRequestFailur(error.message));
    // console.log(error);
  }
};
export const TaskListUpdater = (tasks) => async (dispatch) => {
  dispatch(taskRequestDone(tasks));
};
