import React from 'react';
import "../App.css"

export default function Clock(props) {
  return (
    <div className='timer-container'>

      <div className='timer'>

        <div className='contain-count'>
          <p>{props.timerDays}</p>
          <small>Days</small>
        </div>

        <span>:</span>

        <div className='contain-count' >
          <p>{props.timerHours}</p>
          <small>Hours</small>
        </div>

        <span>:</span>

        <div className='contain-count' >
          <p>{props.timerMinutes}</p>
          <small>Minutes</small>
        </div>

        <span>:</span>

        <div className='contain-count' >
          <p>{props.timerSeconds}</p>
          <small>Seconds</small>
        </div>


      </div>

    </div>
  )


}


Clock.defaultProps = {
  timerDays:10,
  timerHours:10,
  timerMinutes:10,
  timerSeconds:10
}
