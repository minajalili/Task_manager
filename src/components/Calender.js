import React from 'react';
import './Calender.scss'

function Calender(){

 const test =[]
 for(let i=0 ; i<35 ; i++){
    test.push(i-4)
 }
 

    return(
        <div className="Calender">
            {
                test.map(item=>(
                    (item>=1)?
                    <div key={item} id={`day--${item}`} className="Calender-day">
                        <p>{item}</p>
                        <p></p>
                    </div>:
                    <div key={item} id={`day--${item}`} className="Calender-day">
                    <p></p>
                    <p></p>
                </div>
                ))
            }                         
        </div>
    )
}
export default Calender;