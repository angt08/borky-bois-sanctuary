import React from 'react'
import { Link } from 'react-router-dom';
// import Adopt from './components/Adopt'

export default function Header() {
  return (
    <div className="header">

      <h1>Angie's Borky Bois Sanctuary</h1>
      <br />
      <Link to="/adopt-a-dog" className="nav-links">
       Adopt
      </Link>

      <Link />


    </div>
  )
}
