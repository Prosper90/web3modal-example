import React, { Component } from "react";
import '../App.css';
import * as faIcons from "react-icons/fa";





class Footer extends Component {


  toggle = () => {
    //console.log(this.props);
    this.props.toggle();
    //console.log(this.props.toggle())
  }



  render(){
    return(

      <div className="footer">
      <div>
         Crypto Master Copyright © 2022.
      </div>
      </div>


    )
  }
}


export default Footer
