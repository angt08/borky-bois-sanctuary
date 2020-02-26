import React from 'react'

const Adopt = (props) => {

  return (
    <div  className="adopt-adog">
      <img src={props.dog.image} /> 
        <br/>
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
        <button>
          About this pooch
        </button>

       </div>
  
  )
}
export default Adopt
