import React from "react";

//components
import UserUi from "../UserUi/UserUi";
import CreateTask from "../../components/CreateTask/CreateTask";
import CompeletedTasks from "../../components/CompeletedTasks/CompeletedTasks";
import ModalTask from "../../components/ModalTask/ModalTask";

//styles
import "../../assets/styles/TaskBar.scss";

function TaskBar() {
  return (
    <div className="TaskBar">
      <UserUi />
      <CreateTask />
      <CompeletedTasks />
      <ModalTask />
    </div>
  );
}
export default TaskBar;
