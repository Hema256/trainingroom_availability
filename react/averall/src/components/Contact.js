import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import { Link } from "react-router-dom";
// import {Modal} from reactstrap;
import Modal from 'react-bootstrap/Modal';
function Contact(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
    //     <div>
    //   {/* {/* <meta charSet="utf-8" />
    //   <meta name="viewport" content="width=device-width, initial-scale=1" />
    //   <title>Floor</title>
    //   <link rel="stylesheet" type="text/css" href="Floor.css" />
    //   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    //   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
    //   {/* jQuery library */}
    //   Latest compiled JavaScript */
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-sm-3">
    //         <div className="card1">
    //           <h2 className="text">Second Floor</h2>
    //           <div className="dropdown">
    //             <button className="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">click here
    //               <span className="caret" /></button>
    //             <ul className="dropdown-menu">
    //               <li><a href="secondhallone.html">2nd_hallone</a></li>
    //               <li><a href="secondhalltwo.html">2nd_halltwo</a></li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-sm-3">
    //         <div className="card1">
    //           <h2 className="text">Third floor</h2>
    //           <div className="dropdown">
    //             <button className="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">click here
    //               <span className="caret" /></button>
    //             <ul className="dropdown-menu">
    //               <li><a href="bay1.html">Bay one</a></li>
    //               <li><a href="bay2.html">Bay two</a></li>
    //               <li><a href="bay3.html">Bay three</a></li>
    //               <li><a href="bay4.html">Bay four</a></li>
    //               <li><a href="bay5.html">Bay five</a></li>
    //               <li><a href="https://technicalhub.io/">Thub info</a></li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-sm-3">
    //         <div className="card1">
    //           <h2 className="text">Fourth floor</h2>
    //           <div className="dropdown">
    //             <button   className="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">click here
    //               <span className="caret" /></button>
    //             <ul className="dropdown-menu">
    //               <li><a href="fourthhallone.html">fourth_hallone</a></li>
    //               <li><a href="fourthhalltwo.html">fourth_halltwo</a></li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-sm-3">
    //         <div className="card1">
    //           <h2 className="text">Fifth floor</h2>




    //           <div className="dropdown">
    //             {/* <button className="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">click here
    //               <span className="caret" /></button> */}
    //               <button variant="primary" onClick={handleShow}>
    //                 click Here
    //           </button>

    //           <Modal show={show} onHide={handleClose}>
    //             <Modal.Header closebutton>
    //               <Modal.Title>Modal heading</Modal.Title>
    //             </Modal.Header>
    //             <Modal.Body>
    //               {/* modal body */}
    //               <div className="container">
                  
    //                 <div className="row">
    //               <div className="col-md-12" >
    //                 <div className="card" style={{background:"red"}}>
    //                   <div className="card-body">
    //                     <h5 className="card-title">Available Halls    </h5>
    //                     <p className="card-text"></p>
    //                   <big>20</big></div></div></div></div></div>
                  
                  
    //               </Modal.Body>
    //             <Modal.Footer>
    //               <button variant="secondary" onClick={handleClose}>
    //                 Close
    //               </button>
    //               <button variant="primary" onClick={handleClose}>
    //                 Submit
    //               </button>
    //             </Modal.Footer>
    //           </Modal>


    

    //             <ul className="dropdown-menu">
    //               <li><a href="fifthhallone.html">fifth_hallone</a></li>
    //               <li><a href="fifthhalltwo.html">fifth_halltwo</a></li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div> */}



    <div>
        {/* <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Main</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" /> */}
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> 
        {/* <div className="container" style={{background: 'black', marginTop: '10px', marginRight: '100px', borderRadius: '30px', textAlign: 'center'}}> */}
          {/* <div className="row" style={{height: '100px'}}>
            <div className="col-md-12"><h2>TECHNICAL HUB</h2><h4>BAYS</h4></div>
          </div> */}
          {/* 2nd floor */}
          <div className="row">
            <div className="col-md-6">
              <div style={{height: '150px', background: 'white', padding: '20px', margin: '20px', boxShadow: '3px 3px 0px 0px', borderRadius: '15px'}}>
                <span style={{float: 'left'}}>
                  <i className="fa fa-home" aria-hidden="true" style={{fontSize: '50px', color: 'darkblue'}} />
                </span>
                <span></span>
                <span style={{float: 'right', color: 'red'}}><p>2nd Floor</p><button type="button" className="btn btn-primary" style={{fontSize: '15px'}}>Hall 1</button></span>
              </div>
            </div>
            <div className="col-md-6">
              <div style={{height: '150px', background: 'white', padding: '20px', margin: '20px', boxShadow: '3px 3px 0px 0px', borderRadius: '15px'}}>
                <span style={{float: 'left'}}>
                  <i className="fa fa-home" aria-hidden="true" style={{fontSize: '50px', color: 'darkgoldenrod'}} />
                </span>
                <span style={{float: 'right', color: 'red'}}><p>2nd Floor</p>
                <Link to="/attendence">
                  <button type="button" className="btn btn-primary" style={{fontSize: '15px'}}>Hall 2</button>
                </Link>

                </span>

              </div>
            </div>
          </div>
          {/* 3rd floor */}
          <div className="row">
            <div className="col-md-2">
            <div style={{height: '150px', background: 'white', padding: '20px', margin: '10px', boxShadow: '3px 3px 0px 0px', borderRadius: '15px'}}>
                <span style={{float: 'left'}}>
                  <i className="fa fa-home" aria-hidden="true" style={{fontSize: '45px', color: 'darkslategrey',}} />
                </span>
                <span style={{float: 'right', color: 'red'}}><p>2nd Floor</p><button type="button" className="btn btn-primary" style={{fontSize: '10px'}}>Hall 1</button></span></div>
            </div>
            <div className="col-md-2">
              <div style={{height: '150px', background: 'white', padding: '20px', margin: '10px', boxShadow: '3px 3px 0px 0px', borderRadius: '15px'}}>
                <span style={{float: 'left'}}>
                  <i className="fa fa-home" aria-hidden="true" style={{fontSize: '45px', color: 'darkslategrey',}} />
                </span>
                <span style={{float: 'right', color: 'red'}}><p>2nd Floor</p><button type="button" className="btn btn-primary" style={{fontSize: '10px'}}>Hall 2</button></span>
                {/* <span><button type="button" className="btn btn-primary" style={{fontSize: '8px', marginTop: '-10px'}}>Primary</button></span> */}
              </div>
            </div>
            <div className="col-md-2">
            <div style={{height: '150px', background: 'white', padding: '20px', margin: '10px', boxShadow: '3px 3px 0px 0px', borderRadius: '15px'}}>
                <span style={{float: 'left'}}>
                  <i className="fa fa-home" aria-hidden="true" style={{fontSize: '45px', color: 'darkslategrey',}} />
                </span>
                <span style={{float: 'right', color: 'red'}}><p>2nd Floor</p><button type="button" className="btn btn-primary" style={{fontSize: '10px'}}>Hall 3</button></span></div>
            </div>
            <div className="col-md-2">
            <div style={{height: '150px', background: 'white', padding: '20px', margin: '10px', boxShadow: '3px 3px 0px 0px', borderRadius: '15px'}}>
                <span style={{float: 'left'}}>
                  <i className="fa fa-home" aria-hidden="true" style={{fontSize: '45px', color: 'darkslategrey',}} />
                </span>
                <span style={{float: 'right', color: 'red'}}><p>2nd Floor</p><button type="button" className="btn btn-primary" style={{fontSize: '10px'}}>Hall 4</button></span></div>
            </div>
            <div className="col-md-2">
            <div style={{height: '150px', background: 'white', padding: '20px', margin: '10px', boxShadow: '3px 3px 0px 0px', borderRadius: '15px'}}>
                <span style={{float: 'left'}}>
                  <i className="fa fa-home" aria-hidden="true" style={{fontSize: '45px', color: 'darkslategrey',}} />
                </span>
                <span style={{float: 'right', color: 'red'}}><p>2nd Floor</p><button type="button" className="btn btn-primary" style={{fontSize: '10px'}}>Hall 5</button></span></div>
            </div>
            <div className="col-md-2">
              <div style={{height: '150px', background: 'white', padding: '20px', margin: '10px', boxShadow: '3px 3px 0px 0px', borderRadius: '15px'}}>
                <span><p style={{background: 'lightgreen', color: 'darkyellow'}}>T-Hub</p> </span>
                <span style={{float: 'left'}}>
                  <i className="fa fa-home" aria-hidden="true" style={{fontSize: '48px', color: 'green'}} />
                  <span style={{float: 'right', marginLeft: '20px'}}><h5>Office</h5> </span>
                  {/* <button type="button" className="btn btn-primary" style={{fontSize: '6px', marginTop: '-40px', marginLeft: '50px'}}>Primary</button> */}
                </span>
              </div>
            </div>
            {/* 4 th floor */}
            <div className="row">
              <div className="col-md-6">
                <div style={{height: '150px', background: 'white', padding: '20px', margin: '10px', boxShadow: '3px 3px 0px 0px', borderRadius: '15px'}}>
                  <span style={{float: 'left'}}>
                    <i className="fa fa-home" aria-hidden="true" style={{fontSize: '50px', color: 'olivedrab'}} />
                  </span>
                  <span style={{float: 'right', color: 'red'}}><p>4th Floor</p><button type="button" className="btn btn-primary" style={{fontSize: '15px'}}>Hall 1</button></span>
                  {/* <span><button type="button" className="btn btn-primary">Primary</button></span> */}
                </div>
              </div>
              <div className="col-md-6">
                <div style={{height: '150px', background: 'white', padding: '20px', margin: '10px', boxShadow: '3px 3px 0px 0px', borderRadius: '15px'}}>
                  <span style={{float: 'left'}}>
                    <i className="fa fa-home" aria-hidden="true" style={{fontSize: '50px', color: 'darkorchid'}} />
                  </span>
                  <span style={{float: 'right', color: 'red'}}><p>4th Floor</p><button type="button" className="btn btn-primary" style={{fontSize: '15px'}}>Hall 1</button></span>
                  {/* <span><button type="button" className="btn btn-primary">Primary</button></span> */}
                </div>
              </div>
            </div>
            {/* 5th floor */}
            <div className="row">
              <div className="col-md-6">
                <div style={{height: '140px', background: 'white', padding: '20px', margin: '10px', boxShadow: '3px 3px 0px 0px', borderRadius: '15px'}}>
                  <span style={{float: 'left'}}>
                    <i className="fa fa-home" aria-hidden="true" style={{fontSize: '50px', color: 'darkseagreen'}} />
                  </span>
                  <span style={{float: 'right', color: 'red',marginLeft:'20px'}}><h4>Under Construction</h4></span>
                  {/* <span style={{paddingTop:'10px'}}><h4>under Construction</h4></span> */}
                </div>
              </div>
              <div className="col-md-3">
                
                  <div style={{height: '140px', background: 'white', padding: '20px', margin: '10px', boxShadow: '3px 3px 0px 0px', borderRadius: '15px'}}>
                    <span style={{float: 'left'}}>
                      <i className="fa fa-home" aria-hidden="true" style={{fontSize: '50px', color: 'indianred'}} />
                    </span>
                    <span style={{float: 'right', color: 'red'}}><p>5th Floor</p><button type="button" className="btn btn-primary" style={{fontSize: '15px'}}>Hall 1</button></span>
                    {/* <button type="button" className="btn btn-primary" style={{fontSize: '10px', marginTop: '-40px', marginLeft: '50px'}}>Primary</button> */}
                  
                </div>
                </div>
                <div className="col-md-3">
                  <div style={{height: '140px', background: 'white', padding: '20px', margin: '10px', boxShadow: '3px 3px 0px 0px', borderRadius: '15px'}}>
                    <span style={{float: 'left'}}>
                      <i className="fa fa-home" aria-hidden="true" style={{fontSize: '50px', color: 'darkblue'}} />
                    </span>
                     <span style={{float: 'right', color: 'red'}}><p>5th Floor</p><button type="button" className="btn btn-primary" style={{fontSize: '15px'}}>Hall 1</button></span>
                    {/*<button type="button" className="btn btn-primary" style={{fontSize: '10px', marginTop: '-40px', marginLeft: '50px'}}>Primary</button> */}
                  </div>
                </div>
              
            </div>
          </div>
        
      </div>
    )
}
export default Contact;