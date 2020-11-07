import React from "react";
import "./css/Navbar.css";
import { NavLink } from "react-router-dom";
import slogo from "./images/112233.png";

function Navbar(){
    return(
        <>

            <div className="container">           

            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand" to="/">  
                       <img src={slogo} alt="logo"/>
                 </NavLink>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <NavLink className="nav-link" exact activeClassName="active_nav" to="/">Home </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" exact activeClassName="active_nav" to="/about">About Me </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact activeClassName="active_nav" to="/project">Projects </NavLink>
                    </li>
 
                    <li className="nav-item">
                        <NavLink className="nav-link" exact activeClassName="active_nav" to="/contact"> Contact </NavLink>
                    </li>
                    </ul>
       
                </div>
            </nav>


            </div>
        </>
    );
}

export default Navbar;