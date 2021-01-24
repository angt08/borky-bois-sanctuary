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
          <i id="paw" className="fas fa-paw"></i>
          {props.dog.name}
          {/* <i id="paw" className="fas fa-paw"></i> */}
        </h3>

       

       


        <p id="dog-breed-days">
         Breed : {props.dog.breed}
        <br />
        Days in Sanctuary : 
        {props.dog.daysIn}
        </p>

      <button>
          More
          <i id="info"className="fas fa-info-circle"></i>
      </button>
        
      </div>
    </div>
  )
}
export default Adopt