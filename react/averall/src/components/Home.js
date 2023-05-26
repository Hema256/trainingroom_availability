import React from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
function Home(){
    
    
    return(

        <>
        <div className="row">
        <div className="col-md-3" style={{paddingTop:"20px"}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Available Halls    </h5>
              <p className="card-text"></p>
             <big>20</big>

              {/* <a href="#" className="btn btn-primary"  ></a> */}
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-3"style={{paddingTop:"20px"}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Booked Halls</h5>
              <p className="card-text"></p>
              <big>30</big>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{paddingTop:"50px"}}>
        <div className="col-md-3" style={{paddingTop:"20px"}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Trainers</h5>
              <p className="card-text"></p>
             <big>50</big>

              {/* <a href="#" className="btn btn-primary"  ></a> */}
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-3"style={{paddingTop:"20px"}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Trainees</h5>
              <p className="card-text"></p>
              <big>300</big>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      </div>
      
  
  </>

    )
}
export default Home;
