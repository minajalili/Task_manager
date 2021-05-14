import React from 'react';
//styles
import './TaskBar.scss'
//components
import UserUi from './UserUi'
import TaskMenu from './TaskMenu'
import CompeletedTasks from './CompeletedTasks';
import ModalTask from './ModalTask';


function TaskBar(){


    return(
        <div className="TaskBar">
            <UserUi />
            <TaskMenu />
            <CompeletedTasks />
            <ModalTask />
            
        </div>
    )
}
export default TaskBar;