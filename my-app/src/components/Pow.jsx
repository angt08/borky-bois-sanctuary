import React from 'react';
import field from '../banners/field.jpg';
import robert from '../banners/robert.jpg';
// my-app/public/images/robert.jpg
export default function Pow(props) {

  return (

    <div >
      <img id="field-banner" src={field} />


      <div className="pow">
      <h3> Pooch of the week: </h3>
        <img id="robert" src={robert} />

        <div id="pow-info">
          I have ever seen doggo he made many woofs, noodle horse very jealous pupper doge.
          Big ol pupper what a nice floof h*ck you are doing me the shock heckin good boys and girls boof, corgo you are
          doing me a frighten long water shoob thicc floofs.

        </div>

      </div>
    </div>
  )
}
