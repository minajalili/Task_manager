import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//action
import { ModalVisible, getTasksList, completedTask } from "../../store/Actions";

//style
import "../../assets/styles/TaskBar.scss";

function TaskMenu() {
  const dispatch = useDispatch();
  const ToggleList = useSelector((state) => state.ToggleTaskList.visibility);
  const TasksList = useSelector((state) => state.TasksList);
  const { loading, tasks } = TasksList;

  useEffect(() => {
    dispatch(getTasksList());
  }, [dispatch]);

  
  const TaskChecked = (e) => {
    const param = tasks.filter((task) => task.id === e.target.id);
    param[0].done = true;
    dispatch(completedTask(param[0]));
  };

  return (
    <div className="TaskMenu">
      <div className="addTasks">
        <button
          onClick={() => {
            dispatch(ModalVisible());
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
          <p style={{ padding: "0.5rem" }}>
            Loading <i className="fas fa-circle-notch fa-spin"></i>
          </p>
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
