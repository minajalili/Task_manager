import React from 'react';

//components
import UserUi from './UserUi'
import TaskMenu from '../../components/TaskMenu/TaskMenu'
import CompeletedTasks from '../../components/CompeletedTasks/CompeletedTasks'
import ModalTask from '../../components/ModalTask/ModalTask'

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