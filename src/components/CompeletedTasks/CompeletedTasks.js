import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { TaskListShow,TaskListHidden } from '../../store/Actions'


import '../../assets/styles/TaskBar.scss'

function CompeletedTasks(){
 
    const dispatch = useDispatch()
    const ToggleList = useSelector((state)=> state.ToggleTaskList)
    const TasksList = useSelector((state)=>state.TasksList)
    const {loading, tasks} = TasksList

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
                {
                loading? 
                    <p> loading...</p> :
                    tasks.map((task)=>( 
                        task.done?
                        <div className="CompeleteTask" key={task.id}>
                            <div className="TaskDetail">
                                <p className="TaskName">{ task.name }</p>
                                <span className="TaskTime">{ task.date }</span>
                            </div>
                        </div>:''
                    ))
                
            }
            </div>
        </div>
    )
}
export default CompeletedTasks;