import React, {useState, useEffect, useRef} from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Button from '@mui/material/Button';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

export default function Adminpage() {

    const [toggleMenuLeft, settoggleMenuLeft] = useState(false);
    const [menuSelect, setMenuSelect] = useState("create");
    const [results, setResults] = useState([]);
  

    const responsiveMobile = useMediaQuery('(max-width: 859px)');
    const responsiveextraMobile = useMediaQuery('(max-width: 634px)');

    //ref
   const myRef = useRef(null);



    const toggleMenu = () => {
        console.log("toggling menu");
        settoggleMenuLeft(!toggleMenuLeft);
    }


    const selectmenu = (data) => {
       if(data === "create") {
         setMenuSelect("create");
       } else if(data === "projects"){
          setMenuSelect("projects");
       } else {
          setMenuSelect("funds");
       }
    }


   const submitToken = async (e) => {
       e.preventDefault();
       
       const projectname = e.target.projectname.value;
       const symbol = e.target.symbol.value;
       const imgurl = e.target.imgurl.value;
       const description = e.target.description.value;
       const website = e.target.website.value;
       const votes = e.target.votes.value;
       const ama = e.target.ama.value;
       const facebook = e.target.facebook.value;
       const twitter = e.target.twitter.value;
       const instagram = e.target.instagram.value;
       const contract = e.target.contract.value;


        //make a call to the database and save the new token
       //save the amount transfered to the database
      const addToken = await fetch(`https://web3-launchpad.herokuapp.com/project`, 
      {
        method: 'POST',   
         headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
       },
       body: JSON.stringify({ 
            name: projectname,
            symbol: symbol,
            imgurl: imgurl,
            description: description,
            website: website,
            ama: ama,
            votes: votes,
            facebook: facebook,
            twitter: twitter,
            instagram: instagram,
            contract: contract
        })
     }
     );
     const checkprojectsaved = await addToken.json();
     /* use checkpoolsaved to notify the user that their transaction has been saved it returns true if it was successfull or false if it was bad*/
     console.log(checkprojectsaved);


     e.target.projectname.value = "";
     e.target.symbol.value = "";
     e.target.description.value = "";
     e.target.website.value = "";
     e.target.ama.value = "";
     e.target.votes.value = "";
     e.target.facebook.value = "";
     e.target.twitter.value = "";
     e.target.instagram.value = "";
     e.target.contract.value = "";
     e.target.imgurl.value = "";



    }


    const submitAma = async (e) => {
        e.preventDefault();
        const ama = e.target.ama.value;
        const id = e.target.id.value;


                //make a call to the database and save the new token
       //save the amount transfered to the database
      const addToken = await fetch(`https://web3-launchpad.herokuapp.com/ama`, 
      {
        method: 'POST',   
         headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
       },
       body: JSON.stringify({ 
            ama: ama,
            id: id
        })
     }
     );
     const checkprojectsaved = await addToken.json();
     /* use checkpoolsaved to notify the user that their transaction has been saved it returns true if it was successfull or false if it was bad*/
     console.log(checkprojectsaved);


     e.target.ama.value = "";
     e.target.id.value = "";


    }





//useEffects
useEffect(() => {


    const handleClickOutside = (event) => {
      //console.log(myRef);
     if(myRef.current === null){
  
    } else if( Object.keys(myRef).length !== 0 ) {
    
     // console.log("In here");
      if (!myRef.current.contains(event.target)) {
        settoggleMenuLeft(false);
         //console.log("called");
      }
  
    }
  
  
  
    };



    const getTokens = async () => {
        //make a call to the database and get all projects available
        const res = await axios.get(`https://web3-launchpad.herokuapp.com/projects`);
        console.log(res.data);
        setResults(res.data);

      }



      getTokens();






    
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
   



  return (

      <Grid className='overall' container spacing={1}>

        { responsiveMobile  ?
        
        <Grid item xs={ toggleMenuLeft ? 7 : 1.5} className={responsiveMobile ? "mobile-grid" : "main-grid"} >
            { !toggleMenuLeft ?

            <DehazeIcon className="menuIcon"  onClick={toggleMenu} />
            :
            <div className="contain-menuMobile"  ref={myRef}>


                    <div className={ menuSelect === "create" ? 'each-left-active' : 'each-left' } onClick={() => selectmenu("create")}>create project</div>
                    <div className={ menuSelect === "projects" ? 'each-left-active' : 'each-left' } onClick={() => selectmenu("projects")}>projects</div>
                    <div className={ menuSelect === "funds" ? 'each-left-active' : 'each-left' } onClick={() => selectmenu("funds")}>Add AmA</div>

            </div>
            }
        </Grid>

        : 

        <Grid className='leftside-pc' item xs={   3 } >
            <div className='leftside-menu'>

                <div className={ menuSelect === "create" ? 'each-left-active' : 'each-left' } onClick={() => selectmenu("create")}>create project</div>
                <div className={ menuSelect === "projects" ? 'each-left-active' : 'each-left' } onClick={() => selectmenu("projects")}>projects</div>
                <div className={ menuSelect === "funds" ? 'each-left-active' : 'each-left' } onClick={() => selectmenu("funds")}>Add AmA</div>

            </div>
        </Grid>
        }



        <Grid className='right-side' item xs={ !responsiveMobile ?  9 :  12  }>
            
            {
             menuSelect === "create" 
             ?
                <form className='loginForm2' onSubmit={submitToken} >
                        <div className="form-row">
                        <div className="form-group">
                            <label for="inputEmail4">Project name</label>
                            <input name='projectname' type="text" className="form-control"  placeholder='Project name' />
                        </div>
                        <div className="form-group">
                            <label for="inputPassword4">symbol</label>
                            <input name='symbol' type="text" className="form-control"  placeholder="symbol" />
                        </div>
                        </div>
                        <div className="form-group">
                        <label for="inputAddress">Logo url</label>
                        <input name='imgurl' type="text" className="form-control"  placeholder='logo url' />
                        </div>
                        <div className="form-group">
                        <label for="inputAddress2">description</label>
                        <input name='description' type="text" className="form-control" placeholder="description" />
                        </div>
                        <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">website</label>
                            <input name='website' type="text" className="form-control" placeholder='website' />
                        </div>

                        <div className="form-group col-md-2">
                            <label for="inputZip">ama</label>
                            <input name='ama' type="datetime-local" className="form-control" id="inputZip" placeholder='AmA'  />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputZip">facebook</label>
                            <input name='facebook' type="text" className="form-control" id="inputZip" placeholder='facebook' />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputZip">twitter</label>
                            <input name='twitter' type="text" className="form-control" id="inputZip" placeholder='twitter' />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputZip">instagram</label>
                            <input name='instagram' type="text" className="form-control" id="inputZip" placeholder='instagram' />
                        </div>


                        <div className="form-group col-md-6">
                            <label for="inputZip">Contract address</label>
                            <input name='contract' type="text" className="form-control" id="inputZip" placeholder='contract address' />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputZip">Votes</label>
                            <input name='votes' type="number" className="form-control" id="inputZip" placeholder='votes, set to zero' />
                        </div>

                        </div>

                        <Button type='submit' variant="outlined">Sumbit</Button>
            </form>

             : menuSelect === "projects" 
              ?
              <div className='more-container-admintwo'>
                   {results.map((data) => {

                      return (
                         <div className='header-logo-admin'>
                               <div className='token-logo'>
                                  <img src={data.logo_url} alt="token-image"  />
                               </div>
                   
                               <div className='contain-name-symbol'>
                                   <div>{data.name}</div>
                                   <div>{data.symbol}</div>
                               </div>
                         </div>
                            )
                   })}
                </div>

             :

                <div className='more-container-admintwo'>
                    {results.map((data) => {

                        return (
                        <div className='header-logo-admin'>
                                <div className='token-logo'>
                                    <img src={data.logo_url} alt="token-image"  />
                                </div>
                    
                                <div className='contain-name-symbol'>
                                    <div>{data.name}</div>
                                    <div>{data.symbol}</div>
                                </div>

                                <form className='loginFormthree' onSubmit={submitAma} >
                                    <div className="form-group col-md-2">
                                        <label for="inputZip">ama</label>
                                        <input name='ama' type="datetime-local" className="form-control" id="inputZip" placeholder='AmA'  />
                                        <input name='id' type="hidden" className="form-control" id="inputZip" value={data._id}  />
                                    </div>
                                    <Button type='submit' variant="outlined">Sumbit</Button>
                                </form>
                        </div>
                            )
                    })}
                </div>




            }
           
 


        </Grid>




        </Grid>

  )
}

