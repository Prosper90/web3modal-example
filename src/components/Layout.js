import React from 'react';
import '../App.css';
import Marketside from './Marketside';
import Markettype from './Markettype';
import Navbar from './Navbar';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Layout(props) {

    const responsiveMobile = useMediaQuery('(max-width: 500px)');


  return (
    <div className="App">
            <Navbar />

            <div className={ props.toggle && !responsiveMobile ? "hold-contain" : !props.toggle && !responsiveMobile ?  "hold-contain-nactive" : "hold-contain-nactive-mobile" } >

                <Markettype toggle={props.togglebtn} empty={props.toggle} ama={props.ama} setAma={props.setAma} about={props.about} setAbout={props.setAbout} />
                <Marketside gridchange={props.toggle} ama={props.ama} setAma={props.setAma} about={props.about} setAbout={props.setAbout} />
                

            </div>
     </div>
  )
}
