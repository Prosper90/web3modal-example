import React from 'react';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import '../App.css';

export default function About() {



    const buy = () => {
        console.log("buying");
    }




  return (

    <div className='about-container'>



            <form className='maincontent-container' onSubmit={buy}> 

            <h6 className='header'>Buy our Token</h6>

            <div className='from'>

                <div className='top-layer'>from : Busd</div>
                <div className="inputform" >
                    <input name="transfer"  className="input" placeholder="0.0"  />Busd
                </div>
            
            </div>

            <SwapVertIcon className='icon-swap' />

            <div className='from'>

                <div className='top-layer' >To : Cpl</div>
                <div className="inputform" >
                    <input name="recieve"  className="input" placeholder="0.0"  />Cpl
                </div>

            </div>


            <div className='third-div'>
                <button className='bridge-connect' type='submit'> Buy </button>
            </div>



            </form>




    </div>

  )
}
