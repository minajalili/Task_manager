import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalHidden, createTask } from "../../store/Actions";
import "../../assets/styles/TaskBar.scss";

function AddTask() {
  const [TaskName, setTaskName] = useState("");
  const [TaskDate, setTaskDate] = useState("");

  const PostTask = (e) => {
    e.preventDefault();
    const params = {
      name: TaskName,
      date: TaskDate,
      done: false,
    };
    dispatch(createTask(params));
    setTaskName("");
    setTaskDate("");
    dispatch(ModalHidden());
  };

  const getTaskName = (e) => {
    setTaskName(e.target.value);
  };
  const getTaskDate = (e) => {
    setTaskDate(e.target.value);
  };

  const dispatch = useDispatch();
  const ModalVisibility = useSelector(
    (state) => state.ModalVisibility.visibility
  );

  return (
    <div
      className="AddTask"
      style={{
        transform: ModalVisibility ? "TranslateY(0)" : "TranslateY(-100vh)",
        opacity: ModalVisibility ? "1" : "0",
      }}
    >
      <div
        onClick={() => {
          dispatch(ModalHidden());
        }}
        className="TaskCancel"
      >
        <i className="fas fa-times"></i>
      </div>
      <form onSubmit={PostTask}>
        <div className="inputTask">
          <input
            onChange={getTaskName}
            value={TaskName}
            type="text"
            placeholder="Task Name"
            className="TaskName"
            required
          />
          <input
            onChange={getTaskDate}
            value={TaskDate}
            type="date"
            placeholder="Task Date"
            className="TaskDate"
            required
          />
        </div>
        <div className="btnTask">
          <button type="submit" className="TaskSubmit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTask;
