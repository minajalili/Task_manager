import React from 'react';
import './TaskBar.scss'

function CompeletedTasks(){


    return(
        <div className="CompletedTasks">
            <div className="CompeleteBtn">
                <p>Compeleted</p>
                <i className="fas fa-arrow-down"></i>
            </div>
            <div className="CompeleteList">
                <div className="CompeleteTask">

                </div>
            </div>
        </div>
    )
}
export default CompeletedTasks;