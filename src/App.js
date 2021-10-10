import './App.css';
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Torus from "@toruslabs/torus-embed";
import Fortmatic from "fortmatic";
import Portis from "@portis/web3";


function App() {


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


    const provider = await web3Modal.connect();


    const web3 = new Web3(provider);

  };





  return (
    <div className="App">

    <div className="App-header">
     <h3 className="text"> Test Web3Modal </h3>
     <button className="button" onClick={btnCall}> Connect </button>
    </div>

    </div>
  );
}

export default App;
