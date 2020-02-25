import React from 'react'

const Adopt = (props) => {

  return (
    <div className="adopt">

      <h3>
         {props.dog.name}
      </h3>
      <p>
        {props.dog.breed}
      </p>
      <p>
        Age:
        {props.dog.age}
      </p>
      <p>
        Days in Sanctuary:
        {props.dog.daysIn}
      </p>
      <img id="" src={props.dog.image}/> 
    </div>
  )
}
export default Adopt
