import React, {useState, useEffect, Fragment} from 'react';
import '../App.css';
import axios from "axios";
import { useHistory } from 'react-router-dom';


export default function Ourlisted(props) {


  const [results, setResults] = useState([]);
  const [next, setNext] = useState(1);
  const [prev, setPrevious] = useState(0);
  const [pages, setPages] = useState(2);






  const history = useHistory();



 


  const getMore = (data) => {
    history.push({ pathname:`/listedprojects/${data}`});
    props.setGetmore(true);
    console.log(data);
 }





 

  useEffect(() => {

          /*
          axios.get("https://z3pnrddfl7.execute-api.us-east-1.amazonaws.com/Stage/cryptos?items_per_page=50&page=1&orderby=votes&ordertype=DESC")
          .then(  (res) => {
            this.setState({ results: res.data.results });
          });
          */


          const getTokens = async () => {
            //make a call to the database and get all projects available
            const res = await axios.get(`https://web3-launchpad.herokuapp.com/projects`);
            console.log(res.data);
            setResults(res.data);

          }



          getTokens();

  }, []);

















const changePage = (data) => {




 }










   return (
          <div className='ourlisted'>

                <h2 className='infofix' > Listed </h2>
                <div className="container listed-tokens">
                <div className="head-seperate">
                  <p className="pl-2">Token</p>
                  <p className="pr-2">Votes</p>
                </div>

              <div className="listed-tokens-hold">

                { results.length === 0 
                 ?
                   <h5>No Project Listed</h5>
                 :
                  results.map((item) => {

                    return( 
                    <div  onClick={ () => getMore(item._id) } key={item._id} id="created-html" className="w-100">
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
                    </div>)

                  })
             }




              </div>






                </div>



          </div>
        );
  }




