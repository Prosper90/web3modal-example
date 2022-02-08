import React, { Component } from "react";
import '../App.css';
import * as faIcons from "react-icons/fa";





class Markettype extends Component {


  toggle = () => {
    //console.log(this.props);
    this.props.toggle();
    //console.log(this.props.toggle())
  }



  render(){
    return(

      <div className="App-side-Left">
      <div className="nav-left">
      <faIcons.FaBars onClick={this.toggle} className="icons-text"/>
      </div>

       <div className={ this.props.empty ? "nav-contain" : "nav-contain-nactive"}>
        <h2> Hello Left </h2>
      </div>

      </div>


    )
  }
}


export default Markettype
