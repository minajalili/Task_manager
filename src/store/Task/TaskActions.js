import * as actions from "./TaskActionTypes";
import axios from "../../api/axios";

//TASK
export const taskListRequest = () => {
  return {
    type: actions.TASK_LIST_REQUEST,
  };
};
export const taskListSuccess = (tasks) => {
  return {
    type: actions.TASK_LIST_SUCCESS,
    payload: tasks,
  };
};
export const taskListFailur = (error) => {
  return {
    type: actions.TASK_LIST_FAILUR,
    payload: error,
  };
};
export const getTasksList = () => async (dispatch) => {
  try {
    dispatch(taskListRequest());

    const { data } = await axios.get("task");

    dispatch(taskListSuccess(data));
  } catch (error) {
    dispatch(taskListFailur(error.message));
  }
};

//CREATE TASK
export const createTaskRequest = () => {
  return {
    type: actions.CREATE_TASK_REQUEST,
  };
};
export const createTaskSuccess = (tasks) => {
  return {
    type: actions.CREATE_TASK_SUCCESS,
    payload: tasks,
  };
};
export const createTaskFailur = (error) => {
  return {
    type: actions.CREATE_TASK_FAILUR,
    payload: error,
  };
};

export const createTask = (param) => {
  return (dispatch) => {
    dispatch(createTaskRequest());
    axios
      .post("task", param)
      .then((response) => {
        if (!response.data.error) {
          dispatch(getTasksList());
        } else {
          dispatch(createTaskFailur("error in creating the task!"));
        }
      })
      .catch((error) => {
        dispatch(createTaskFailur(error.message));
      });
  };
};

// COMPLETED TASK

export const completedTaskRequest = () => {
  return {
    type: actions.COMPLETED_TASK_REQUEST,
  };
};
export const completedTaskSuccess = (tasks) => {
  return {
    type: actions.COMPLETED_TASK_SUCCESS,
    payload: tasks,
  };
};
export const completedTaskFailur = (error) => {
  return {
    type: actions.CREATE_TASK_FAILUR,
    payload: error,
  };
};

export const completedTask = (param) => {
  return (dispatch) => {
    dispatch(completedTaskRequest());
    axios
      .delete(`task/${param.id}`)
      .then((response) => {
        if (!response.data.error) {
          dispatch(createTask(param));
          dispatch(getTasksList());
        } else {
          dispatch(completedTaskFailur("error in your request!"));
        }
      })
      .catch((error) => {
        dispatch(completedTaskFailur(error.message));
      });
  };
};
