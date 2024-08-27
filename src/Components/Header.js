import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
        <ul>
           <Link to='/Dashboard'><li>Home</li></Link>
           <Link to='/about' ><li>About</li></Link>
           <Link to='/services'><li>Services</li></Link>
           <Link to='/Main'><li>Main</li></Link>
           <Link to='/'><li>logout</li></Link>
        </ul>
    </div>
  )
}

export default Header
