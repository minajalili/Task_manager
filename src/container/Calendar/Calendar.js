import React from 'react';
import '../../assets/styles/Calendar.scss'

function Calendar(){

 const test =[]
 for(let i=0 ; i<35 ; i++){
    test.push(i-4)
 }
 

    return(
        <div className="Calendar">
            {
                test.map(item=>(
                    (item>=1)?
                    <div key={item} id={`day--${item}`} className="Calendar-day">
                        <p>{item}</p>
                        <p></p>
                    </div>:
                    <div key={item} id={`day--${item}`} className="Calendar-day">
                    <p></p>
                    <p></p>
                </div>
                ))
            }                         
        </div>
    )
}
export default Calendar;