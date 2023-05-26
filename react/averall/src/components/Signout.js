import React from "react";
import Logo from "./image/logo2.png";
import 'bootstrap/dist/css/bootstrap.min.css'; 
function Signout(){
    return(
        <div>
        {/* <title>List</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" /> */}
        <div className="container">
          <div align="center">
            <h3>List Of Room Booked</h3>
          </div><br />
          <div className="row">
            <div className="col-md-3>"></div>
            <div className="col-md-3">
              <div className="input-group">
             <span className="input-group-addon"><img src={Logo} style={{height: '40px', width: '20px', marginTop: '0px'}} /></span>	
                <input type="text" placeholder="Search.." style={{height: '40px' }} /> 
                {/* <input
                  type="text"
                  placeholder="Search here"
                  onChange={handleChange}
                  value={searchInput} /> */}
              </div>
            </div>
          </div>
          <br />
         <div className="row" style={{paddingLeft:"20px"}}>
          <table className=" table table-bordered table table-hover table table-dark" align="center">
            <thead style={{fontSize: '25px'}} className="thead-dark">
              <tr>
                <td>Trainer</td>
                <td>Technology</td>
                <td>Timings</td>
              </tr>
            </thead>
            <tbody><tr style={{fontSize: '15px'}}>
                <td>Simhadri</td>
                <td>FSD</td>
                <td>9.30 AM-12.50 PM</td>
              </tr>
              <tr style={{fontSize: '15px'}}>
                <td>NDP</td>
                <td>Mean Stack</td>
                <td>2.00 PM-4.20 PM</td>
              </tr>
              <tr style={{fontSize: '15px'}}>
                <td>NDP</td>
                <td>Mean Stack</td>
                <td>2.00 PM-4.20 PM</td>
              </tr>
              <tr style={{fontSize: '15px'}}>
                <td>NDP</td>
                <td>Mean Stack</td>
                <td>2.00 PM-4.20 PM</td>
              </tr>
              <tr style={{fontSize: '15px'}}>
                <td>Simhadri</td>
                <td>FSD</td>
                <td>9.30 AM-12.50 PM</td>
              </tr>
              <tr style={{fontSize: '15px'}}>
                <td>Simhadri</td>
                <td>FSD</td>
                <td>9.30 AM-12.50 PM</td>
              </tr>
              <tr style={{fontSize: '15px'}}>
                <td>Simhadri</td>
                <td>FSD</td>
                <td>9.30 AM-12.50 PM</td>
              </tr>
              

              











            </tbody></table>
        </div>
        </div>
        </div>
      
    )
}
export default Signout;