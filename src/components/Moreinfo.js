import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from "axios";
import { useParams, useRouteMatch, useHistory  } from 'react-router-dom';
import * as faIcons from "react-icons/fa";
import parse from 'html-react-parser';




export default function Moreinfo(props) {
  
    const [eachToken, setEachToken] = useState({});
    const history = useHistory();
    let params = useParams();
    
    console.log(params);


    const match = useRouteMatch('/projects/:token');
    const { token } = {
      token: match?.params.token,
    };

    

    const listedprojects = useRouteMatch('/listedprojects/:token');
    const { listedtoken } = {
      listedtoken: listedprojects?.params.token,
    };


    console.log(token);
    console.log(typeof(token))





    const voteToken = async (data) => {
      //make a call to the database and save the new token
      //save the amount transfered to the database
      const vote = await fetch(`http://localhost:8000/projects/vote`, 
      {
      method: 'POST',   
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
       body: JSON.stringify({ 
       id: data, 
      })
    }
      );
      const checkvote = await vote.json();
      console.log(checkvote);
}




    const goBack = () => {
        props.setGetmore(false);
    }



    const convertReadableDate = (unixTime) => {
      let unix_timestamp = unixTime;
      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      var date = new Date(unix_timestamp * 1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();

      // Will display time in 10:30:23 format
      const formattedTime = hours + ':' + minutes.slice(-2) + ':' + seconds.substr(-2);

      return formattedTime;
    }



    useEffect(() => {
         

     if(props.getMore) {

          if(token) {
            console.log("big boy very big boy")
            axios.get("https://z3pnrddfl7.execute-api.us-east-1.amazonaws.com/Stage/cryptos?id="+ token +" ")
            .then(  (res) => {
                setEachToken(res.data.results[0])
            });

          } else if(listedtoken){

            console.log("this guy is running");
            axios.get("https://web3-launchpad.herokuapp.com/projects/"+ listedtoken +" ")
            .then(  (res) => {
              console.log(res.data);
              console.log("called");
                setEachToken(res.data);
            });
      
          }

     }

       





        return history.listen(location => {
            if (history.action === 'POP') {
                props.setGetmore(false);
            }
          })
      

    }, [props.getMore]);






   const goto = (media) => {
    window.location.href = media; 
    return null;
   }


    


    console.log(eachToken);



  return (
    <div className='more-container'>

        <div className='header-logo'>
            <div className='token-logo'>
               <img src={eachToken.logo_url} alt="token-image"  />
            </div>

            <div className='contain-name-symbol'>
                <div>{eachToken.name}</div>
                <div>{eachToken.symbol}</div>
            </div>
        </div>

    <div className='contain-socialsandcontract address'>

        <div className='token-socials'>
             <div>{ eachToken.facebook === "" ? "NA" :  <faIcons.FaFacebookSquare onClick={ () => goto(eachToken.facebook) } /> }</div>
             <div>{ eachToken.instagram === "" ? "NA" : <faIcons.FaInstagram onClick={ () => goto(eachToken.instagram) } /> }</div>
             <div>{ eachToken.twitter === "" ? "NA" : <faIcons.FaTwitter onClick={ () => goto(eachToken.twitter) } /> }</div>
        </div>

        <div className='launched-date'>
             <div style={{marginRight: "5px"}}>Contract : </div> <div> { !eachToken.contract ? "NA" : eachToken.contract } </div>
        </div>

     </div>

        <div className='token-body-section'>
            
             

             <div className='details-section'>
               { parse(`${eachToken.description}`) }
             </div>



             <div className='right-section'>
                <div className='website'> {eachToken.website} </div>

                <div className='launched-date-vote'>
                    <div style={{marginRight: "5px"}}> votes : </div> <div>{eachToken.votes} </div>  { listedtoken ? <faIcons.FaVoteYea className='voteclass' onClick={() => voteToken(eachToken._id) }  /> : <div></div> }  
                </div>

                <div className='launched-date'>
                  <div style={{marginRight: "5px"}}> AMA : </div> <div> { !eachToken.ama ? "None" : eachToken.ama } </div>
                </div>
             </div>




        </div>






    </div>
  )
}
