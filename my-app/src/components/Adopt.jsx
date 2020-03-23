import React from 'react'

const Adopt = (props) => {

  return (
    <div className="adopt-adog">

      <img id="all-dogs" src={props.dog.image} alt="dog" />
      <h3>
        {props.dog.name}
      </h3>

      <h5>
        Age:
        {props.dog.age}
        <br />
        Breed:
         {props.dog.breed}
        <br />
        Days in Sanctuary:
        {props.dog.daysIn}
      </h5>
      <button>
        More on this pooch
        </button>
    </div>

  )
}
export default Adopt
