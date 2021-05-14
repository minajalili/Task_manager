import React from 'react';
import './TaskBar.scss'

function ModalTask(){

    return(
        <div className="ModalTask">
                <div className="TaskCancel">
                        <i className="fas fa-times" ></i>
                </div>
                <div className="inputTask">
                    <input type="text" placeholder="Task Name" className="TaskName" />
                    <input type="date" placeholder="Task Date" className="TaskDate" />
                </div>            
                <div className="btnTask">
                    <button className="TaskSubmit">
                        Save
                    </button>
                </div>
        </div>
    )
}
export default ModalTask;