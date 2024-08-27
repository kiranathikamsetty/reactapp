import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
          <div id='logdata'>
                <h1>LOGIN NOW</h1><br/>
                <form>
                <input type='text'placeholder='Username'/><br/>
                <input type='number'placeholder='Password'/>
                </form><br/>
                <p>Click Here For <b/><b/><Link>Forgot Password?</Link></p>
                <Link to='/dashboard'><button className='btn btn-primary'>Login</button></Link><br/><br/>
                <p>Don't have an Account?  <Link to='/signup'>Sign up</Link> </p>
          </div>
    </div>
  )
}



export default Login
