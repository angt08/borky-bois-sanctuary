import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (

    <div className="header">

      <Link to="/">
      <h1> Borky Boys Sanctuary</h1>
      </Link>
    
      <div className="nav-flexbox"> 
      <Link to="/adopt-a-dog" className="nav-links">
      adopt
      </Link>

      <Link to="/pooch-of-the-week" className="nav-links">
     dog of the week
      </Link>
</div>

    </div>
  )
}
