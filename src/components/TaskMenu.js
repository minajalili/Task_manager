import React from 'react';
import { useDispatch,useSelector } from 'react-redux'

import { TaskListShow,TaskListHidden } from '../action/TaskListToggle'

//action
import { ModalVisible } from '../action/ModalAction'

//style
import './TaskBar.scss'

function TaskMenu(){

    const dispatch = useDispatch()
    const ToggleList = useSelector((state)=> state.ToggleTaskList)

    return(
        <div className="TaskMenu">
            <div className="addTasks">
                <button onClick={()=>{dispatch(ModalVisible)}} >
                    <i className="fas fa-plus" ></i>
                    <span>Add a Task</span>
                </button>
            </div>
            <div className="TasksList"
            style={{
                display: ToggleList? 'flex':'none'
            }}
            >
                <div className="Task">
                    <input className="TaskCheck" type="radio" />
                    <div className="TaskDetail">
                        <p className="TaskName">Book Return Ticket</p>
                        <span className="TaskTime">Today</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TaskMenu;