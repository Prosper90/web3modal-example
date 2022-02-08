import React, { Component,  Fragment } from "react";
import '../App.css';
import axios from "axios";


class Listedtokens extends Component {


  constructor(){
      super()
      this.state = {
        results: [],
        next : 1,
        prev : 0,
        pages: 2
      }

    }


  componentDidMount(){
  axios.get("https://z3pnrddfl7.execute-api.us-east-1.amazonaws.com/Stage/cryptos?items_per_page=50&page=1&orderby=votes&ordertype=DESC")
  .then(  (res) => {
    this.setState({ results: res.data.results });
  });

}







changePage = (data) => {

 if(data === this.state.next) {
   axios.get("https://z3pnrddfl7.execute-api.us-east-1.amazonaws.com/Stage/cryptos?items_per_page=50&page=" + this.state.pages+"+&orderby=votes&ordertype=DESC")
   .then(  (res) => {
     this.setState({ results: res.data.results, pages : this.state.pages + 1 });
   });



 } else if(data === this.state.prev && this.state.pages !== 1) {

   axios.get("https://z3pnrddfl7.execute-api.us-east-1.amazonaws.com/Stage/cryptos?items_per_page=50&page=" +this.state.pages+"+&orderby=votes&ordertype=DESC")
   .then(  (res) => {
     this.setState({ results: res.data.results, pages : this.state.pages - 1 });
   });


 }


 }







  render(){


        return (
          <Fragment>

          <h2> Promoted </h2>
          <div className="container listed-tokens">
          <div className="d-flex justify-content-between">
           <p className="pl-2">Token</p>
           <p className="pr-2">Votes</p>
          </div>

        <div className="listed-tokens-hold">

          { this.state.results.map((item) => {

        return( <a href="open-modal" id="created-html" className="w-100" data-toggle="modal" data-target="#popup_bid">
         <div id="inside-div">
         <div id="inside-inside-div" className="creators space-x-3">
         <div className="-space-x-20 pl-1 avatars">
         <img className="avatar avatar-sm" alt="logo" src={item.logo_url} />
         </div>
         <p className="avatars_name txt_sm pt-2 ">{item.name}</p>
         </div>
         <div className="pr-2">
         <p className="avatars_name txt_sm pt-1">{item.votes}</p>
         </div>
         </div>
         </a>)

       }) }


       <div aria-label="..." className="pagin">
        <ul className="pagination">
         <li className="page-item ">
         <a className="page-link " onClick={() => this.changePage(this.state.prev)} href="#prev">Previous</a>
         </li>

         <li className="page-item ">
         <a className="page-link " onClick={() => this.changePage(this.state.next)} href="#next">Next</a>
         </li>
        </ul>
       </div>


         </div>






          </div>



          </Fragment>
        );
  }
}


export default Listedtokens;
