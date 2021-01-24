import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
export default function Header() {
  return (

    <div className="header">

      
      
      <div className="logo">

      <img  id="logo" src={logo} />
      <Link to="/">
        <h1> Borky Boys Sanctuary</h1>
      </Link>

      </div>

      

      <Link to="/adopt-a-dog" className="nav-links">
      adopt
      <i className="fas fa-paw"></i>
      </Link>

      <Link to="/pooch-of-the-week" className="nav-links">
        dog of the week 
      </Link>
      
      {/* <Link to=" " className="nav-links">
          community
      </Link> */}
        
     


    </div>
  )
}
