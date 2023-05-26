import React from "react";
import "./Dashboard.css";
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from "react-router-dom"; 
//import Header from "./Header";

function Dashboard(){
    return( 
        <>
        <div className="dash">
          <ul>
             <li><Link to="/" style={{textDecoration:"none",color:"white" }}>Dashboard</Link></li>
             <li><Link to="/Booking" style={{textDecoration:"none",color:"white"}}>Booking</Link></li>
            <li><Link to="/Available" style={{textDecoration:"none",color:"white"}}>Availability</Link></li>
            <li><Link to="/List" style={{textDecoration:"none",color:"white"}}>List</Link></li>
            
            
         </ul>
         
         </div>
         </>
        

        
        
       
    )
}
export default Dashboard;