import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (

    <div className="header">

      <h1> Borky Boys Sanctuary</h1>
    
      <div className="nav"> 
      <Link to="/info" className="nav-links">
       ABOUT US
      </Link>
      
      <Link to="/adopt-a-dog" className="nav-links">
       ADOPT
      </Link>

      <Link to="/pooch-of-the-week" className="nav-links">
      BORKY OF THE WEEK
      </Link>
</div>

    </div>
  )
}
