import React from 'react'

const Adopt = (props) => {

  return (
    // <div className="adopt-adog">
    <div className="dog-flexbox-item-1">

      <img 
        src={props.dog.image}
        alt="dog"
      />
      

      <div id="dog-stats">
     
        <h3 id="dog-name">

        {props.dog.name}
        </h3>

         Breed : {props.dog.breed}
        <br />
      
        Days in Sanctuary : 
        {props.dog.daysIn}
        <br />

      <button>
          More on this pooch
      </button>
        
      </div>

      
    </div>

  )
}
export default Adopt
