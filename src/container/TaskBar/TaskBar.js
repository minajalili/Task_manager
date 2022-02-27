import React from "react";

//components
import UserUi from "../UserUi/UserUi";
import TaskMenu from "../../components/TaskMenu/TaskMenu";
import CompeletedTasks from "../../components/CompeletedTasks/CompeletedTasks";
import AddTask from "../../components/AddTask/AddTask";

//styles
import "../../assets/styles/TaskBar.scss";

function TaskBar() {
  return (
    <div className="TaskBar">
      <UserUi />
      <TaskMenu />
      <CompeletedTasks />
      <AddTask />
    </div>
  );
}
export default TaskBar;
