import React from 'react';
import dogbeach from '../banners/dogbeach.jpg'




export default function Banner() {
  return (
    
    <div className="banner">
    <img  id="borky-banner"  src={dogbeach} />
    <p>Adopt a Borky Boy</p>
    <h4> All dogs listed are  ready for adoption</h4>
    </div> 
  )
}
