import React, { Component } from "react";
import '../App.css';
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Torus from "@toruslabs/torus-embed";
import Fortmatic from "fortmatic";
import Portis from "@portis/web3";
import * as faIcons from "react-icons/fa";


class Navbar extends Component {

/*
  constructor(){
      super()
      this.state = {
        address : false
      }
    }
*/


  render(){

    async function btnCall() {

      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            infuraId: "INFURA_ID" // required
          }
        },

       fortmatic: {
     package: Fortmatic, // required
     options: {
       key: "FORTMATIC_KEY" // required
         }
       },

       portis: {
      package: Portis, // required
      options: {
        id: "PORTIS_ID" // required
      }
     },

     torus: {
    package: Torus, // required
    options: {
      networkParams: {
        host: "https://localhost:8545", // optional
        chainId: 1337, // optional
        networkId: 1337 // optional
      },
      config: {
        buildEnv: "development" // optional
      }
    }
  }


      };



      const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
      });


      const provider = await web3Modal.connect(); //set the provider (type of connection)
      const web3 = new Web3(provider); //create web3 instance
      const account = await web3.eth.getAccounts();
      console.log(account);

    };




    return(

      <div className="App-header">
       <h2 className="text pt-2"> Launchpad  </h2>

       <a href="#pool" className="links pt-3"> Pool </a>
       <a href="#stake" className="links pt-3"> Staking </a>
       <a href="#buy" className="links pt-3"> Buy Token </a>

      <div className="cont">
       <button className="button-connect" onClick={btnCall}> <faIcons.FaWallet /> </button>
      </div>

      </div>


    )
  }
}


export default Navbar
