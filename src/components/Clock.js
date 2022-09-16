import React, { useEffect, useState } from 'react';
import "../App.css"

export default function Clock(props) {

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

    
  const startTimer = (date) => {
    //console.log("called time");
    //console.log(date);
    const countDownDate = new Date(date).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;


      const days = Math.floor(distance/(24*60*60*1000));
      const hours = Math.floor(distance % (24*60*60*1000)/(1000*60*60));
      const minutes = Math.floor(distance % (60*60*1000)/(1000*60));
      const seconds = Math.floor(distance % (60*1000)/(1000));


      if(distance < 0 ) {
        //clear timer
        //show message

        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        //let arrreturn = [days, hours, minutes, seconds];
        //console.log(arrreturn);
       // return [days, hours, minutes, seconds];

      }

    })
  }


  useEffect(() => {

    startTimer(props.amadate);
    //console.log(props.amadate);

  }, [])





  return (
    <div className='timer-container'>

      <div className='timer'>

        <div className='contain-count'>
          <p>{timerDays}</p>
          <small>Days</small>
        </div>

        <span>:</span>

        <div className='contain-count' >
          <p>{timerHours}</p>
          <small>Hours</small>
        </div>

        <span>:</span>

        <div className='contain-count' >
          <p>{timerMinutes}</p>
          <small>Minutes</small>
        </div>

        <span>:</span>

        <div className='contain-count' >
          <p>{timerSeconds}</p>
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
