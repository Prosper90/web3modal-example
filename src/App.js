import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Marketside from "./components/Marketside";
import Markettype from "./components/Markettype";
import Moreinfo from "./components/Moreinfo";
import Admin from "./components/Admin";
import Ama from './components/Ama';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import Layout from './components/Layout';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import { useParams } from 'react-router-dom';







export default function App(props) {




    const [toggle, setToggle] = useState(true);
    const [ama, setAma] = useState(false);
    const [about, setAbout] = useState(false);
    const responsiveMobile = useMediaQuery('(max-width: 500px)');

  


    const togglebtn = () => {
     setToggle(!toggle);
   }




  return (
  <Router>
        <Switch>

        <div className="App">

             <Route exact path="/admin">
                  <Admin  />
              </Route>


              <Route path="/">
                  <Layout toggle={toggle} togglebtn={togglebtn} ama={ama} setAma={setAma} setAbout={setAbout} about={about} />
              </Route>

              <Route path="/projects/:token">
                  <Layout toggle={toggle} togglebtn={togglebtn} ama={ama} setAma={setAma} setAbout={setAbout} about={about} />
              </Route>

              <Route path="/listedprojects/:token">
                  <Layout toggle={toggle} togglebtn={togglebtn} ama={ama} setAma={setAma} setAbout={setAbout} about={about} />
              </Route>

              <Route path="/ama">
                  <Layout toggle={toggle} togglebtn={togglebtn} ama={ama} setAma={setAma} setAbout={setAbout} about={about} />
              </Route>

              <Route path="/about">
                  <Layout toggle={toggle} togglebtn={togglebtn} ama={ama} setAma={setAma} setAbout={setAbout} about={about} />
              </Route>


     </div>

     </Switch>
</Router>
  )
}



