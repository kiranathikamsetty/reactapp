import React from 'react'
import './App.css'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Dashboard from './Components/Dashboard'
import Services from './Components/Services'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
   
   <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/service' element={<Services/>} />
        </Routes>
   </Router>
     
    </div>
  )
}

export default App
