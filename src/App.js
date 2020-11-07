import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from "jquery";
import Home from "./Home";
import Contact from './Contact';
import Project from "./Project";
import Navbar from "./Navbar";
import About from "./About";
import './css/App.css';
import "./css/Style.css";

function App() {

  return (
    <>

      <Navbar />
        <Switch>
          <Route exact  path="/"  component={Home} />
          <Route exact  path="/about"  component={About} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
    </>
  );
}

export default App;
