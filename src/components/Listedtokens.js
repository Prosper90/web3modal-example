import React, {useState, useEffect, Fragment} from 'react';
import '../App.css';
import axios from "axios";
import { useHistory } from 'react-router-dom';


export default function Listedtokens(props) {

  const [results, setResults] = useState([]);
  const [next, setNext] = useState(1);
  const [prev, setPrevious] = useState(0);
  const [pages, setPages] = useState(2);

  const history = useHistory();
  



 


  const getMore = (data) => {
    history.push({ pathname:`/projects/${data}`});
    props.setGetmore(true);
    console.log(data);
 }




  const changePage = (data) => {

    console.log("bad guy 2");

    if(data === next) {
      axios.get("https://z3pnrddfl7.execute-api.us-east-1.amazonaws.com/Stage/cryptos?items_per_page=50&page=" +pages+"+&orderby=votes&ordertype=DESC")
      .then(  (res) => {
        setResults(res.data.results);
        setPages(pages + 1);
      });
   
   
   
    } else if(data === prev && pages !== 1) {
   
      axios.get("https://z3pnrddfl7.execute-api.us-east-1.amazonaws.com/Stage/cryptos?items_per_page=50&page=" +pages+"+&orderby=votes&ordertype=DESC")
      .then(  (res) => {
        setResults(res.data.results);
        setPages(pages - 1);
      });
   
   
    }
   
   
    }

    




  useEffect(() => {
  
    
    console.log("bad guy 1");
    axios.get("https://z3pnrddfl7.execute-api.us-east-1.amazonaws.com/Stage/cryptos?items_per_page=50&page=1&orderby=votes&ordertype=DESC")
    .then(  (res) => {
      setResults( res.data.results)
    });
   

  }, [])



  



  return (
    <div className='ourlisted'>

            <h2 className='infofix'> Promoted </h2>
            <div className="listed-tokens">
            <div className="contains_toknes-and-votes">
            <p className="pl-2">Token</p>
            <p className="pr-2">Votes</p>
            </div>

      <div className="listed-tokens-hold">

      { results.length === 0 
         ?
           <div>Loading ...</div>
         :

         results.map((item) => {

          return( 
          <div onClick={ () => getMore(item.id) } key={item.id} className="w-100" id="created-html" >

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


        <div aria-label="..." className="pagin">
          <ul className="pagination">
          <li className="page-item ">
          <a className="page-link " onClick={ () => changePage(prev)}>Previous</a>
          </li>

          <li className="page-item ">
          <a className="page-link " onClick={ () => changePage(next)} >Next</a>
          </li>
          </ul>
        </div>


          </div>






            </div>



    </div>
  )
}
