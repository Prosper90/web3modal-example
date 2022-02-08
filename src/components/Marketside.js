import React, { Component } from "react";
import '../App.css';
import Listedtokens from "./Listedtokens";
import Footer from "./Footer";

//import axios from "axios";


class Marketside extends Component {

/*
  constructor(){
      super()
      this.state = {
        nfts: []
      }
    }


  componentDidMount(){
  axios.get("https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20")
  .then(  (res) => {
    this.setState({ nfts: res.data.assets });
    console.log(res.data)
    console.log(this.state)
  });

  console.log(this.state)
}

*/



  render(){

    return(

      <div className="container-fluid App-side-Right">



      <h1> Getting Started </h1>
       <p className="ml-2">Discover, collect and trade digital assets, hold current <br />
       token, stake and win bigger as we guide you.</p>

       <div className="">
         <button className=" button m-2">Observe</button>
         <button className="button ">Get Info</button>
       </div>


       <h1 className="text-center"> Token Sale Launchpad </h1>



       <div className=" row g-3 launching_tokens" >


        { /*first column */}
         <div className={ this.props.gridchange ? "col-12 col-sm-12 col-md-6 col-xs-12" : "col-12 col-sm-6 col-md-4 "}>
          {/*cardstart*/}
         <div className="card border-0">

         <div className="card-body">
         <h5 className="card-title">Card title</h5>
         <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#link" class="card-link">Card link</a>
         <a href="#dummy" class="card-link">Another link</a>
         </div>
         </div>
         {/* end of card */}
         </div>
         {/* end of first column */}

         {/* second column */}
         <div className={ this.props.gridchange ? "col-12 col-sm-12 col-md-6 col-xs-12" : "col-12 col-sm-6 col-md-4 "}>
          {/* cardstart */}
         <div className="card border-0">

         <div className="card-body">
         <h5 className="card-title">Card title</h5>
         <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#link" class="card-link">Card link</a>
         <a href="#dummy" class="card-link">Another link</a>
         </div>
         </div>
         {/* end of card */}
         </div>
         {/* end of second column */}


         {/* third column */}
         <div className={ this.props.gridchange ? "col-12 col-sm-12 col-md-6 offset-md-3" : " col-12 col-sm-6 col-md-4 "}>
          {/* cardstart */}
         <div className="card border-0">

         <div className="card-body">
         <h5 className="card-title">Card title</h5>
         <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#link" class="card-link">Card link</a>
         <a href="#dummy" class="card-link">Another link</a>
         </div>
         </div>
         {/* end of card */}
         </div>
         {/* end of third column */}



       </div>
        {/* end of row */}

        <div className="d-flex justify-content-center">
         <button className="button">More</button>
        </div>


        <Listedtokens />

        <Footer />


      </div>


    )
  }
}


export default Marketside
