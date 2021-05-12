import React from 'react';
//styles
import './TaskBar.scss'
//components
import UserUi from './UserUi'
import TaskMenu from './TaskMenu'
import CompeletedTasks from './CompeletedTasks';


function TaskBar(){


    return(
        <div className="TaskBar">
            <UserUi />
            <TaskMenu />
            <CompeletedTasks />
            
        </div>
    )
}
export default TaskBar;