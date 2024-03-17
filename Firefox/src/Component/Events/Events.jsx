import React from 'react'
import './Event.css'
import event1 from './ev1.png'
import event2 from './ev22.png'
import event3 from './ev3.jpg'


function Events() {
  return (
    <div className="event">
        <div className="header">OUR EVENTS</div>
        <div className="straightline"></div>
        <div className="cards">
            <div className="eventimg">
                <img src={event1}  />
            </div>
            <div className="eventimg2">
            <img src={event2} />
            </div>
            <div className="eventimg">
            <img src={event3}  />
            </div>
        </div>
    </div>
  )
}

export default Events