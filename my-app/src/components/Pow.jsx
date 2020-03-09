import React from 'react';
import field from '../banners/field.jpg';
import robert from '../banners/robert.jpg';
// my-app/public/images/robert.jpg
export default function Pow(props) {

  return (

    <div>
      <img id="field-banner" src={field} />
      <h3 id="pow-h3"> Pooch of the week: </h3>


      <div className="pow">
        <img id="robert" src={robert} />

        <div id="pow-info">
          <h5 id="pooch-description">
          I have ever seen doggo he made many woofs, noodle horse very jealous pupper doge.
          Big ol pupper what a nice floof h*ck you are doing me the shock heckin good boys and girls boof, corgo you are
          doing me a frighten long water shoob thicc floofs.
          
        <br />
        
          Age:7
    
        <br />
        Breed: Black Lab
    
        <br />
        Days in Sanctuary: 52
   
           </h5>

        </div>

      </div>
    </div>
  )
}
