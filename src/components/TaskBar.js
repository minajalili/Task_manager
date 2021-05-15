import React from 'react';

//components
import UserUi from './UserUi'
import TaskMenu from './TaskMenu'
import CompeletedTasks from './CompeletedTasks'
import ModalTask from './ModalTask'

//styles
import './TaskBar.scss'


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