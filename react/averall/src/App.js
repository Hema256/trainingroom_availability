//import { Space } from "antd";
import "./App.css";
import Attendance from "./components/Attandance";
//import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signout from "./components/Signout";
import Header from "./components/Header";
//import Login from "./components/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Login from "./components/Login";
function App() {
  return (
    <BrowserRouter>
  
    
      <div className="row"><Header/></div>
      <div className="row">
        <div className="col-md-2">
      <Dashboard/>
      </div>
      <div className="col-md-8">
    <>
      <Routes >
         {/* <Route path="/" element={<Login/>}/>  */}
         <Route path="/attendence" element={<Attendance/>} />
        
        <Route path="/" element={<Home/>}/>
        <Route path="/Booking" element={<About/>}/>
        <Route path="/Available" element={<Contact/>}/>
        <Route path="/List" element={<Signout/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
      
      
      </>
      </div>
      </div>
    
    


    </BrowserRouter>
 
     );
}
export default App;