import React, {useState, useEffect} from 'react';
import '../App.css';
import * as faIcons from "react-icons/fa";
import { useParams, useRouteMatch, useHistory  } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';






export default function Markettype(props) {

  const history = useHistory();
  const responsiveMobile = useMediaQuery('(max-width: 500px)');


  const toggle = () => {
    
    if(!responsiveMobile) {
      props.toggle();
    }

    //console.log(this.props.toggle())
  }



  const home = () => {
    history.push({ pathname:`/`});
    props.setAma(false);
    props.setAbout(false);
 }


  
  const ama = () => {
    history.push({ pathname:`/ama`});
    props.setAma(true);
    props.setAbout(false);
 }



 const about = () => {
   console.log('logged');
  history.push({ pathname:`/about`});
  props.setAma(false);
  props.setAbout(true);
}










    return(

      <div className="App-side-Left">
      <div className="nav-left">
      <faIcons.FaBars onClick={toggle} className="icons-text"/>
      </div>

       <div className={ props.empty && !responsiveMobile ? "nav-contain" :  "nav-contain-nactive"}>



        <div className="list">

          <div className="left-contains" onClick={home} >
            {
              props.empty && !responsiveMobile ?
               <>
                <faIcons.FaHome  />  
                <p>Home</p>
               </>
              : responsiveMobile && !props.empty ?
                <faIcons.FaHome  /> 
              :
                <faIcons.FaHome  /> 
            }           


          </div>

          <div className="left-contains"  onClick={ama} > 

          {
              props.empty && !responsiveMobile ?
               <>
                <faIcons.FaHive  /> 
                <p>AmA</p>
               </>
              : responsiveMobile && !props.empty ?
               <faIcons.FaHive  />
              :
              <faIcons.FaHive  /> 
            }           



          </div>

          <div className="left-contains" onClick={about}> 
            
           {
              props.empty && !responsiveMobile ?
               <>
                <faIcons.FaBuffer  /> 
                <p>Buy</p>
               </>
              : responsiveMobile && !props.empty ?
               <faIcons.FaBuffer  />
              :
               <faIcons.FaBuffer  />
            }           


          </div>

        </div>



      </div>

      </div>


    )
  
}


