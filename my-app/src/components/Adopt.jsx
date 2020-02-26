import React from 'react'

const Adopt = (props) => {

  return (
    <div className="adopt">

      <img id="" src={props.dog.image} /> 


        <div>
      <h3>
         {props.dog.name}
      </h3>
      <p>
        {props.dog.breed}
        <br/>
        Age:
        {props.dog.age}
        <br/>
        Days in Sanctuary:
        {props.dog.daysIn}
        <br/>
      </p>
        </div>
    </div>
  )
}
export default Adopt
