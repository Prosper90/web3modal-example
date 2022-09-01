import React, {useState, useEffect} from 'react';
import { useParams, useRouteMatch, useHistory  } from 'react-router-dom';
import Clock from './Clock';
import axios from "axios";
import "../App.css"



export default function Ama(props) {

    const history = useHistory();
    const [upcomingAma, setupcomingAma] = useState([]);

    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();


    let interval;

    const startTimer = (date) => {
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

        }

      })
    }



    useEffect(() => {
          

        //console.log("Running");
        axios.get("https://web3-launchpad.herokuapp.com/ama")
        .then(  (res) => {
            console.log(res.data);
            setupcomingAma(res.data);
        });



        if(upcomingAma) {
          upcomingAma.map((data) => {
            startTimer(data.ama);
          })
        }

  
  
          return history.listen(location => {
              if (history.action === 'POP') {
                  props.setAma(false);
              }
            })
        
  
      });

      console.log(upcomingAma);



  return (
      <div className='ama-cover-main'>
        { upcomingAma.length !== 0

        ?

        upcomingAma.map((data) => {
 
         return(

           <div className='ama-cover'>

                <div className='first-contain'>

                    <div className='token-logo'>
                    <img src={data.logo_url} alt="token-image"  />
                    </div>

                    <div className='contain-name-symbol'>
                        <div>{data.name}</div>
                        <div>{data.symbol}</div>
                    </div>

                </div>


                <div className='second-contain'>

                   <Clock 
                      timerDays={timerDays} 
                      timerHours={timerHours} 
                      timerMinutes={timerMinutes} 
                      timerSeconds={timerSeconds} 
                      />

                   <div>
                     <div className='ama-vote' style={{marginRight: "5px", display: "flex"}}> votes : </div> <div>{data.votes} </div>
                   </div>
               </div>

           </div>
             )
        })


        :

        <div>No Upcoming AMA</div>

        }
      </div>
  )
}
