import React from 'react'
import { Link } from 'react-router-dom';
// import Adopt from './components/Adopt'

export default function Header() {
  return (

    <div className="header">

       <br/>
      <h1>Angie's Borky Boys Sanctuary</h1>
      <br />
      <Link to="/info" className="nav-links">
     INFO
      </Link>
      <Link to="/adopt-a-dog" className="nav-links">
       ADOPT
      </Link>

      <Link to="/pooch-of-the-week" className="nav-links">
      POW
      </Link>

    </div>
  )
}
