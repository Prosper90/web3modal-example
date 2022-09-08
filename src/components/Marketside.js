import React, { useState, useEffect } from "react";
import '../App.css';
import Listedtokens from "./Listedtokens";
import Ourlisted from "./Ourlisted";
import Footer from "./Footer";
import Moreinfo from "./Moreinfo";
import Ama from "./Ama";

//import axios from "axios";


export default function Marketside(props) {


    const [getMore, setGetmore] = useState(false);



  useState(() => {

    console.log(props.ama);

  }, [props.ama]);




  return(

  <div className="App-side-Right">

    { !getMore && !props.ama ?
    <>  

        <div className="header-welcome">

            <h1> Crypto Tokens LaunchPad </h1>
            <p className="ml-2">Discover new Investmensts</p>

            <div className="">
              <button className=" button m-2">Observe</button>
              <button className="button ">Get Info</button>
            </div>

        </div>


        <h1 className="text-center token-sale"> Token Sale Launchpad </h1>
    

          <Ourlisted  setGetmore={setGetmore} />

          <Listedtokens setGetmore={setGetmore} />


      </>

       : getMore && !props.ama ?

        <Moreinfo setGetmore={setGetmore} getMore={getMore} />

       : !getMore && props.ama ?
         
         <Ama ama={props.ama} setAma={props.setAma} />

         :

         <div></div>
       
      }
     

        <Footer />

      </div>


    )

}



