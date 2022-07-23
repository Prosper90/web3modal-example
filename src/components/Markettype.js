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

        <div className="choosechain">
         <span>ETHEREUM</span>
         <span>BINANCE</span>
        </div>


        <div className="list">
         <ul className="list-ul">
         <li>LaunchPads</li>
         <li>Airdrops</li>
         <li>KYC</li>
         <li>Claim Tokens</li>
         <li>Personal Stats</li>
         </ul>
        </div>

      </div>

      </div>


    )
  }
}


export default Markettype
