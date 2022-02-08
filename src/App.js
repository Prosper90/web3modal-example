import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Marketside from "./components/Marketside";
import Markettype from "./components/Markettype";






class App extends Component {


  constructor(){
      super()
      this.state = {
        toggle : false,
      }
    }


    togglebtn = () => {
     this.setState({ toggle : !this.state.toggle});
   }




render(){


  return (
    <div className="App">
     <Navbar />

     <div className={ this.state.toggle ? "hold-contain" : "hold-contain-nactive"} >

     <Markettype toggle={this.togglebtn} empty={this.state.toggle} />
     <Marketside gridchange={this.state.toggle}/>

     </div>


    </div>
  );
}

}

export default App;
