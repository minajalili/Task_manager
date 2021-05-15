import React , {useState} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { ModalHidden } from '../action/ModalAction'

import './TaskBar.scss'

function ModalTask(){
    const [TaskName , setTaskName] = useState('')
    const [TaskDate , setTaskDate] = useState('')
    

    const PostTask=(e)=>{
        e.preventDefault()
        const task = {
            name: TaskName,
            date: TaskDate,
            done:false
          }
          axios.post('https://6099176399011f00171401cb.mockapi.io/task', task)
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
          setTaskName('')
          setTaskDate('')
    }

    const getTaskName = (e)=>{
        setTaskName(e.target.value)
    }
    const getTaskDate = (e)=>{
        setTaskDate(e.target.value)
    }

    const dispatch = useDispatch()
    const ModalVisibility = useSelector((state)=>state.ModalVisibility)


    return(
        <div className="ModalTask"
        style={{
            transform: ModalVisibility? 'TranslateY(0)':'TranslateY(-100vh)',
            opacity: ModalVisibility? '1':'0'
        }}
        >
                <div onClick={()=>{dispatch(ModalHidden)}} className="TaskCancel">
                        <i className="fas fa-times" ></i>
                </div>
                <form onSubmit={PostTask} >
                    <div className="inputTask">
                        <input onChange={getTaskName} value={TaskName} type="text" placeholder="Task Name" className="TaskName" />
                        <input onChange={getTaskDate} value={TaskDate} type="date" placeholder="Task Date" className="TaskDate" />
                    </div>            
                    <div className="btnTask">
                        <button type="submit" onClick={()=>{dispatch(ModalHidden)}}  className="TaskSubmit">
                            Save
                        </button>
                    </div>
                </form>
        </div>
    )
}
export default ModalTask;