import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./image/logo1.png";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

function Header(){
  const handleClick = () =>{
    window.location.href='/Login';
  }
    return(
         <div   className="row" style={{background:'grey',top:0}}>
            
        <nav className="navbar navbar-light bg-green" >
            
        <span><a className="navbar-brand" href="#">
          <img src={Logo} width="50%" style={{paddingLeft:"20px"}}className="d-inline-block align-top" alt="" />
        
        </a></span>
        {/* "#ABC4AA" */}
        
        <span> <h4><b>TRAINING ROOM AVAILABILITY</b></h4></span>
        <span>
         <Link to="/login">
                  <button type="button" className="btn btn-primary" style={{fontSize: '15px'}} onClick={handleClick}>Logout</button>
                </Link></span> 
        
       
      </nav></div>
    )
}   
export default Header;