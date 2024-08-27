import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='signup'>
      
        <h1>SIGNUP NOW</h1><br/>
        <h6>Please Enter Your Details</h6>
        <input type='text' placeholder= 'Enter Your First Name'/>
        <input type='text' placeholder= 'Enter Your Last Name'/><br/><br/>
        <input type='text' placeholder= 'Enter Your Email'/>
        <input type='number' placeholder= 'Enter Your Phone No'/><br/><br/>
        <input type='text' placeholder= 'Create Username'/>
        <input type='number' placeholder= 'Create Password'/><br/><br/>
        <Link to='/'><button className= 'btn btn-primary'>SUBMIT</button></Link><br/><br/>
        <Link to='/'><p>Back To Login</p></Link>
      
    </div>
  )
}

export default Signup
