import React, {useState, useEffect} from 'react';
import { useParams, useRouteMatch, useHistory  } from 'react-router-dom';
import Clock from './Clock';
import axios from "axios";
import "../App.css"



export default function Ama(props) {

    const history = useHistory();
    const [upcomingAma, setupcomingAma] = useState([]);






  const checkNearest = (date) => {

    const countDownDate = new Date(date).getTime();

      const now = new Date().getTime();

      const distance = countDownDate - now;


      const days = Math.floor(distance/(24*60*60*1000));
      const hours = Math.floor(distance % (24*60*60*1000)/(1000*60*60));
      const minutes = Math.floor(distance % (60*60*1000)/(1000*60));
      const seconds = Math.floor(distance % (60*1000)/(1000));

      if(days === 0) {
        return 1;
      } else if( days === 0 && hours === 0) {
        return 2;
      } else if(days === 0 && hours === 0 && minutes === 0) {
        return 3
      }

  }







    useEffect(() => {
          

        //console.log("Running");
        axios.get("https://web3-launchpad.herokuapp.com/ama")
        .then(  (res) => {
            //console.log(res.data);
            setupcomingAma(res.data);
        });


/*
        if(upcomingAma) {
          upcomingAma.map((data) => {
            console.log(data.ama);
            startTimer(data.ama);
          })
        }

  */
  
          return history.listen(location => {
              if (history.action === 'POP') {
                  props.setAma(false);
              }
            })
        
  
      }, []);

      //console.log(upcomingAma);



  return (
      <div className='ama-cover-main'>
        { upcomingAma.length !== 0

        ?

        upcomingAma.map((data) => {

          //const getstarted = startTimer(data.ama);
          //console.log(getstarted);
 
         return(  

           <div className={ checkNearest(data.ama) === 1 ? 'ama-cover-1' : checkNearest(data.ama) === 2 ? 'ama-cover-2' : checkNearest(data.ama) === 3 ? 'ama-cover-3'  : 'ama-cover' }>

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
                        amadate={data.ama}
                      />

                   <div className='ama-vote-container'>
                     <div className='ama-vote' style={{marginRight: "5px", display: "flex"}}> votes : </div> <div className='ama-vote-count'>{data.votes} </div>
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
