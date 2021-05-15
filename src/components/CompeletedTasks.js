import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { TaskListShow,TaskListHidden } from '../action/TaskListToggle'

import './TaskBar.scss'

function CompeletedTasks(){
 
    const dispatch = useDispatch()
    const ToggleList = useSelector((state)=> state.ToggleTaskList)

    return(
        <div className="CompletedTasks">
            <div className="CompeleteBtn">
                <p>Compeleted</p>
                {
                   ToggleList?  
                   <i onClick={()=>{dispatch(TaskListHidden)}} className="fas fa-arrow-down"></i>:
                   <i onClick={()=>{dispatch(TaskListShow)}} className="fas fa-arrow-up"></i>

                }
                
            </div>
            <div  className="CompeleteList"
            style={{
                display: !ToggleList? 'flex':'none'
            }}
            >
                <div className="CompeleteTask">
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
export default CompeletedTasks;