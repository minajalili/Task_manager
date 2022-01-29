import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//action
import { ModalVisible, TaskAction, TaskListUpdater } from "../../store/Actions";

//style
import "../../assets/styles/TaskBar.scss";

function TaskMenu() {
  const dispatch = useDispatch();
  const ToggleList = useSelector((state) => state.ToggleTaskList);
  const TasksList = useSelector((state) => state.TasksList);
  console.log(TasksList);
  const { loading, tasks } = TasksList;

  useEffect(() => {
    dispatch(TaskAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(TaskListUpdater(tasks));
  }, [dispatch, tasks]);

  const TaskChecked = (e) => {
    tasks.map((task) => {
      if (task.id === e.target.id) {
        task.done = true;
      }
    });
  };

  return (
    <div className="TaskMenu">
      <div className="addTasks">
        <button
          onClick={() => {
            dispatch(ModalVisible);
          }}
        >
          <i className="fas fa-plus"></i>
          <span>Add a Task</span>
        </button>
      </div>
      <div
        className="TasksList"
        style={{
          display: ToggleList ? "flex" : "none",
        }}
      >
        {loading ? (
          <p> loading...</p>
        ) : (
          tasks.map((task) =>
            !task.done ? (
              <div className="Task" key={task.id}>
                <input
                  className="TaskCheck"
                  type="radio"
                  onChange={TaskChecked}
                  id={task.id}
                />
                <div className="TaskDetail">
                  <p className="TaskName">{task.name}</p>
                  <span className="TaskTime">{task.date}</span>
                </div>
              </div>
            ) : (
              ""
            )
          )
        )}
      </div>
    </div>
  );
}
export default TaskMenu;
