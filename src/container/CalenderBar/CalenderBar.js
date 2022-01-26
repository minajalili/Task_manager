import React from 'react';
import './CalenderBar.scss'

function CalenderBar(){


    return(
        <div className="CalenderBar">
            <div className="Calender--detail">
                <div className="Current--Month">
                    <h1>November 2019</h1>
                </div>
                <div className="Current--date">
                    <h5>Today</h5>
                    <p>18, Mon</p>
                </div>
                <div className="Search--Item">
                    <i className="fas fa-search" ></i>
                    <input type="text" placeholder="search"/>
                </div>
            </div>
            <div className="Calender--mode">
                <i className="fas fa-chevron-left" ></i>
                <button className="Calender--mode--day" >Day</button>
                <button className="Calender--mode--week" >Week</button>
                <button className="Calender--mode--month" >Month</button>
                <i className="fas fa-chevron-right" ></i>
            </div>
            <div className="Calender--days">
                <p>sun</p>
                <p>Mon</p>
                <p>Tue</p>
                <p>Wen</p>
                <p>Thu</p>
                <p>Fri</p>
                <p>Sat</p>
            </div>
        </div>
    )
}
export default CalenderBar;