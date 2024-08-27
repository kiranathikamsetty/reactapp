import React from 'react'
import Header from './Header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>
      <Row>
        <Col sm={2}>
        <Header/>
        <div className='header'>
        <ul>
           <Link to='/Dashboard'><li>Home</li></Link>
           <Link to='/about' ><li>About</li></Link>
           <Link to='/services'><li>Services</li></Link>
           <Link to='/Main'><li>Main</li></Link>
           <Link to='/'><li>logout</li></Link>
        </ul>
        </div>
        </Col>
        <Col sm={10}>
          <h1>Services Page</h1>
        </Col>
      </Row>
        
        
    </div>
  )
}

export default Services