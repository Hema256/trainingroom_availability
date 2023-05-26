import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./Abt.css";
import Modal from 'react-bootstrap/Modal';
import Logo from "./image/logo1.png";
import axios from "axios";
function About(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [send,setSend] = useState({
    name:"",
    email:'',
    about:"",
  })

  const handleChange = (e) =>{
    setSend((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))

  }


  const postSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:5000/postdata',{send})
    .then((res)=>setSend(res.data.books))
      console.log(send);
  }

    return(
        <div>
        {/* <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="book.css" />
        {/* <LINKS> */}
        {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <title>Book</title>
        
            <div className="row" >
                <div className="col-md-12">
        <h2 style={{textAlign: 'center', color: 'wheat', marginTop: '80px'}}>Available Rooms</h2></div></div>
        <div style={{paddingLeft:"100px"}}>
            

        <div  style={{display: 'flex', marginTop: '100px'}}>
          
          <div className="flip-card" style={{width:"100%"}}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div>
                  <i className="fa-solid fa-house fa-2xl" style={{marginTop: '70px'}} />
                  <h2 style={{marginTop:'100px'}}>3 Floor</h2>
                  <p>Hall 1</p>
                  <p>Bay 5</p>
                </div>
              
              </div>
              
              <div className="flip-card-back">
                <h1>Available</h1>
                <p>Are you ready to book ?</p>
              </div>
            </div>
          </div>
          
          
          <div className="flip-card" style={{marginLeft: '150px',width:"100%"}}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div>
                  <i className="fa-solid fa-house fa-2xl" style={{marginTop: '70px'}} />
                  <h2 style={{marginTop:'100px'}}>4 Floor</h2>
                  <p>Hall 2</p>
                </div>
              </div>
              <div className="flip-card-back">
                <h1>Available</h1>
                <p>Are you ready to book ?</p>
              </div>
            </div>
          
          </div>
          
          
          
       
          <div className="flip-card" style={{marginLeft: '150px',width:"100%"}}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div>
                  <i className="fa-solid fa-house fa-2xl" style={{marginTop: '70px'}} />
                  <h2 style={{marginTop:'100px'}}>5 Floor</h2>
                  <p>Hall 2</p>
                  <p>Bay 2</p>
                </div>
              </div>
              <div className="flip-card-back">
                <h1>Available</h1>
                <p>Are you ready to book ?</p>
              </div>
            </div>
          </div>
          
          </div>
          <div className="row">


            
            <div className="col-md-4" >
            <div style={{display: 'flex', marginLeft: '40px', marginTop: '50px'}}>

<div style={{marginLeft: '30px'}}>
  {/* <button type="button" onClick={()=> {
  // navigate('/form')
  alert('testing1')
}}>Register</button> */}





<button variant="primary" onClick={handleShow} style={{borderRadius:"6px"}}>
          Register
    </button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closebutton>
        <Modal.Title>Register Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* modal body */}
        <div className="container but1" style={{background:"#FDF4F5" ,borderRadius:"8px"}}>
{/* <h1>Vacancy Room Registration Form</h1> */}
<form name="registration" className="registartion-form" onsubmit={postSubmit}>
  <table>
    <tbody><tr>
        <td><label htmlFor="name">Mentor Name :</label></td>
        <td><input type="text" name="name" id="name" placeholder="Please enter your name" onChange={handleChange} /></td>
      </tr>
      <tr>
        <td><label htmlFor="email">LOGIN ID :</label></td>
        <td><input type="text" name="email" id="email" placeholder="Please enter your email" onChange={handleChange} /></td>
      </tr>
 
      <tr>
        <td><label htmlFor="language">Technology Class :</label></td>
        <td>
          <select name="language" id="language">
            <option value>Select Course</option>
            <option value="English">MERN STACK</option>
            <option value="Spanish">MEAN STACK</option>
            <option value="Hindi">SALESFORCE</option>
            <option value="Arabic">AZURE DEVOPS</option>
            <option value="Russian">IOT</option>
          </select>
        </td>
      </tr>
      {/* <tr>
        <td><label htmlFor="floor">Floor:</label></td>
        <td> <input type="radio" name="floor" defaultValue="2nd floor" />2nd
          <input type="radio" name="floor" defaultValue="3rd floor" />3rd
          <input type="radio" name="floor" defaultValue="4th floor" />4th
          <input type="radio" name="floor" defaultValue="5th floor" />5th
        </td>
      </tr>  */}
      <tr>
        <td><label htmlFor="language">Hall :</label></td>
        <td>
          <select name="language" id="language">
            <option value>Select Hall</option>
            <option value="English">Hall - 1</option>
            <option value="Spanish">Hall - 2</option>
          </select>
        </td>
     
        <td><label htmlFor="about">About:</label></td>
        <td><textarea name="about" id="about" placeholder="Write about yourself..." defaultValue={""}  /></td>
      </tr>
     {/* <td colSpan={2}><input type="submit" className="submit" defaultValue="Register" /></td>
      </tr> <tr> */}
        
    </tbody></table>
</form>
</div>

        
        </Modal.Body>
      <Modal.Footer>
        <button variant="secondary"  onsubmit={postSubmit}>
          Close
        </button>
        <button variant="primary" onClick={postSubmit}>
          Submit
        </button>
      </Modal.Footer>
    </Modal>



</div>
</div>
            </div>











            <div className="col-md-4"> <div style={{display: 'flex', marginLeft: '70px', marginTop: '50px'}}>

<div style={{marginLeft: '30px'}}>
  {/* <button type="button" onClick={()=> {
  // navigate('/form')
  alert('testing1')
}}>Register</button> */}





<button variant="primary" onClick={handleShow} style={{borderRadius:"6px"}}>
          Register
    </button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closebutton>
        <Modal.Title>Register Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* modal body */}
        <div className="container but1" style={{background:"#FDF4F5" ,borderRadius:"8px"}}>
{/* <h1>Vacancy Room Registration Form</h1> */}
<form name="registration" className="registartion-form" onsubmit="return formValidation()">
  <table>
    <tbody><tr>
        <td><label htmlFor="name">Mentor Name :</label></td>
        <td><input type="text" name="name" id="name" placeholder="Please enter your name" /></td>
      </tr>
      <tr>
        <td><label htmlFor="email">LOGIN ID :</label></td>
        <td><input type="text" name="email" id="email" placeholder="Please enter your email" /></td>
      </tr>
 
      <tr>
        <td><label htmlFor="language">Technology Class :</label></td>
        <td>
          <select name="language"  id="language">
            <option value>Select Course</option>
            <option value="English">MERN STACK</option>
            <option value="Spanish">MEAN STACK</option>
            <option value="Hindi">SALESFORCE</option>
            <option value="Arabic">AZURE DEVOPS</option>
            <option value="Russian">IOT</option>
          </select>
        </td>
      </tr>
      <tr>
          {/* <td><label htmlFor="floor">Floor:</label></td>
          <td> <input type="radio" name="floor" defaultValue="2nd floor" />2nd
            <input type="radio" name="floor" defaultValue="3rd floor" />3rd
            <input type="radio" name="floor" defaultValue="4th floor" />4th
            <input type="radio" name="floor" defaultValue="5th floor" />5th
          </td> */}
      </tr> 
      <tr>
        <td><label htmlFor="language">Hall :</label></td>
        <td>
          <select  name="language" id="language">
            <option value>Select Hall</option>
            <option value="English">Hall - 1</option>
            <option value="Spanish">Hall - 2</option>
          </select>
        </td>
      </tr>
      {/*       <tr>
<td><label for="zipcode">Zip Code:</label></td>
<td><input type="number" name="zipcode" id="zipcode"></td>
</tr> */}
      <tr>
        <td><label htmlFor="about">About:</label></td>
        <td><textarea name="about" id="about" placeholder="Write about yourself..." defaultValue={""} /></td>
      </tr>
     {/* <td colSpan={2}><input type="submit" className="submit" defaultValue="Register" /></td>
      </tr> <tr> */}
        
    </tbody></table>
</form>
</div>

        
        </Modal.Body>
      <Modal.Footer>
        <button variant="secondary" onClick={handleClose}>
          Close
        </button>
        <button variant="primary" onClick={handleClose}>
          Submit
        </button>
      </Modal.Footer>
    </Modal>



</div>
</div></div>








            <div className="col-md-4" > <div style={{display: 'flex', marginLeft: '110px', marginTop: '50px'}}>

<div style={{marginLeft: '30px'}}>
  {/* <button type="button" onClick={()=> {
  // navigate('/form')
  alert('testing1')
}}>Register</button> */}







{/* third */}

<button variant="primary" onClick={handleShow} style={{borderRadius:"6px"}}>
          Register
    </button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closebutton>
        <Modal.Title>Register Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* modal body */}
        <div className="container but1" style={{background:"#FDF4F5" ,borderRadius:"8px"}}>
{/* <h1>Vacancy Room Registration Form</h1> */}
<form name="registration" className="registartion-form" onsubmit="return formValidation()">
  <table>
    <tbody><tr>
        <td><label htmlFor="name">Mentor Name :</label></td>
        <td><input type="text" name="name" id="name" placeholder="Please enter your name" onChange={handleChange} /></td>
      </tr>
      <tr>
        <td><label htmlFor="email">LOGIN ID :</label></td>
        <td><input type="text" name="email" id="email" placeholder="Please enter your email" onChange={handleChange} /></td>
      </tr>
 
      <tr>
        <td><label htmlFor="language">Technology Class :</label></td>
        <td>
          <select name="language" id="language">
            <option value>Select Course</option>
            <option value="English">MERN STACK</option>
            <option value="Spanish">MEAN STACK</option>
            <option value="Hindi">SALESFORCE</option>
            <option value="Arabic">AZURE DEVOPS</option>
            <option value="Russian">IOT</option>
          </select>
        </td>
      </tr>
    
      <tr>
        <td><label htmlFor="language">Hall :</label></td>
        <td>
          <select name="language" id="language">
            <option value>Select Hall</option>
            <option value="English">Hall - 1</option>
            <option value="Spanish">Hall - 2</option>
          </select>
        </td>
      </tr>
      
      <tr>
        <td><label htmlFor="about">About:</label></td>
        <td><textarea name="about" id="about" placeholder="Write about yourself..." defaultValue={""} onChange={handleChange} /></td>
      </tr>
     {/* <td colSpan={2}><input type="submit" className="submit" defaultValue="Register" /></td>
      </tr> <tr> */}
        
    </tbody></table>
</form>
</div>

        
        </Modal.Body>
      <Modal.Footer>
        <button variant="secondary" onClick={handleClose}>
          Close
        </button>
        <button variant="primary" onClick={postSubmit} >
          Submit
        </button>
      </Modal.Footer>
    </Modal>



</div>
</div></div>






          
         



          
          
          {/* third */}
          
          </div>
          </div>
          </div>
          
          
    )
}
export default About;