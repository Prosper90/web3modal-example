import React, {useState, useEffect, Fragment} from 'react';
import '../App.css';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



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

             <div className="listed-tokens table-responsive">
                <table id="table-fix" className="table">
                    <thead>
                      <tr>
                        <th scope="col">Token</th>
                        <th scope="col">24h</th>
                        <th scope="col">MC</th>
                        <th scope="col">LP</th>
                        <th scope="col">Votes</th>
                      </tr>
                    </thead>
                    <tbody>

                { results.length === 0 
                 ?
                   <div>Loading ...</div>
                 :
                  results.map((item) => {

                    return(
                      <tr onClick={ () => getMore(item._id) } key={item._id}  id="created-html"  className="w-100">


                          <th id="inside-inside-div" className="creators space-x-3">
                                  <div className="-space-x-20 pl-1 avatars">
                                      <img className="avatar avatar-sm" alt="logo" src={item.logo_url} />
                                  </div>
                                  <p className="avatars_name txt_sm pt-2 ">{item.name}</p>
                          </th>

                          <td>
                            35.36%
                          </td>

                          <td>
                            $6.36M
                          </td>
                          <td>
                            $417,216
                          </td>

                          <td>
                            {item.votes}
                          </td>

                    </tr>
                    )

                  })
             }

                    </tbody>
                </table>


              </div>





          </div>
        );
  }




