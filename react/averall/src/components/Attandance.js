import React from "react";


const Attendance =() =>{
    return (
        <div>
        {/* // <meta charSet="utf-8" />
        // <meta name="viewport" content="width=device-width, initial-scale=1" />
        // <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        // <link rel="stylesheet" type="text/css" href="att.css" /> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <title>Attedance</title>
        <div className="container" style={{marginTop: '50px', borderRadius: '30px'}}>
          <div className="row">
            <h2 style={{textAlign: 'center', color: 'black', backgroundColor: 'skyblue', borderRadius: '30px'}}>Attendance Report</h2><br />	
          </div>
          <div className="row">
            <div className="col-md-6">
              <div style={{display: 'flex'}}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
                      <span><h3>Total Count</h3> </span><br />
                      <span><i className="fa fa-users" aria-hidden="true" style={{fontSize: '80px'}} /></span>
                    </div>
                    <div className="flip-card-back">
                      <h1>Total Count</h1>
                      <h3>60</h3>
                      <p>CSE , IT</p>
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
                      <span><h3>Today Presents</h3> </span><br />
                      <span><i className="fa fa-user-circle" aria-hidden="true" style={{fontSize: '80px'}} /></span>
                    </div>
                    <div className="flip-card-back">
                      <h1>Today Presents</h1>
                      <h3>40</h3>
                      <p>CSE , IT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div style={{display: 'flex'}}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
                      <span><h3>Today Absents</h3> </span><br />
                      <span><i className="fa fa-user-times" aria-hidden="true" style={{fontSize: '80px'}} /></span>
                    </div>
                    <div className="flip-card-back">
                      <h1>Today Absents</h1>
                      <h3>20</h3>
                      <p>CSE , IT</p>
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
                      <span><h3>Permissions Taken</h3> </span><br />
                      <span><i className="fa fa-thumbs-up" aria-hidden="true" style={{fontSize: '80px'}} /></span>
                    </div>
                    <div className="flip-card-back">
                      <h1>Permission Granted</h1>
                      <p>5 Trainees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div>
              <br /><br />
            </div>
          </div>
          {/* 2 nd row */}
          <div className="row">
            <div className="col-md-6">
              <div className="flip-card" style={{marginLeft: '150px'}}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
                    <span><h3>Technology Going on</h3> </span><br />
                    <span><i className="fa fa-anchor" aria-hidden="true" style={{fontSize: '80px'}} /></span>
                  </div>
                  <div className="flip-card-back">
                    <h1>Mean Stack</h1>
                    <p>Drive Ready</p>
                    <p>Afternoon Batch</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="flip-card" style={{marginLeft: '150px'}}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
                    <span><h3>Mentor</h3> </span><br />
                    <span><i className="fa fa-user" aria-hidden="true" style={{fontSize: '80px'}} /></span>
                  </div>
                  <div className="flip-card-back">
                    <h1>SIMHADRI</h1>
                    <p>NDP</p>
                    <p>JDP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>

    )
}
export default Attendance