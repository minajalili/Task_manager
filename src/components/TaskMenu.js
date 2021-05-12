import React from 'react';
import './TaskBar.scss'

function TaskMenu(){


    return(
        <div className="TaskMenu">
            <div className="addTasks">
                <button>
                    <i className="fas fa-plus" ></i>
                    <span>Add a Task</span>
                </button>
            </div>
            <div className="TasksList">
                <div className="Task">
                    <input className="TaskCheck" type="radio" />
                    <div className="TaskDetail">
                        <p className="TaskName">Book Return Ticket</p>
                        <span className="TaskTime">Today</span>
                    </div>
                </div>
                <div className="Task">
                    <input className="TaskCheck" type="radio" />
                    <div className="TaskDetail">
                        <p className="TaskName">Book Return Ticket</p>
                        <span className="TaskTime">Today</span>
                    </div>
                </div>
                <div className="Task">
                    <input className="TaskCheck" type="radio" />
                    <div className="TaskDetail">
                        <p className="TaskName">Book Return Ticket</p>
                        <span className="TaskTime">Today</span>
                    </div>
                </div>
                <div className="Task">
                    <input className="TaskCheck" type="radio" />
                    <div className="TaskDetail">
                        <p className="TaskName">Book Return Ticket</p>
                        <span className="TaskTime">Today</span>
                    </div>
                </div>
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