import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
export default function Header() {
  return (

    <div className="header">

      <div className="logo-div">
      <img  id="logo" src={logo} />
      <Link to="/">
      <h1>Borky Boys Sanctuary</h1>
      </Link>
      </div>


      <div className="nav-menu">
        <ul>  
          <li>
      <Link to="/adopt-a-dog" >
     Our Dogs
      <i className="fas fa-paw"></i>
      </Link>
          </li>  

          <li>

      <Link to="/pooch-of-the-week">
      Spotlight
      </Link>
          </li>
      
          <li>

      <Link to=" " >
      Contact
      </Link>
          </li>
     </ul>
      </div>

      <button id="menu-search">
      <i class="fas fa-search-location"></i>
      search
      </button>

    </div>
  )
}
