import React from 'react'

const Adopt = (props) => {

  return (
    <div className="adopt-adog">

      <img id="all-dogs" src={props.dog.image} alt="dog" />
      
      <p id="dog-name">
        {props.dog.name}
      </p>

      <p id="dog-stats">
        Age: 
        {props.dog.age}
        <br />
        Breed:
         {props.dog.breed}
        <br />
        Days in Sanctuary:
        {props.dog.daysIn}
      </p>
      <button>
        More on this pooch
        </button>
    </div>

  )
}
export default Adopt
