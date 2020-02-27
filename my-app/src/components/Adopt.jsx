import React from 'react'

const Adopt = (props) => {

  return (
    <div className="adopt-adog">
      <img src={props.dog.image} />


      <div className="dog-stats">

        <br />
        <h3>
          {props.dog.name}
        </h3>
        <p>
          Breed:
        {props.dog.breed}
          <br />
          Age:
        {props.dog.age}
          <br />
          Days in Sanctuary:
        {props.dog.daysIn}
          <br />
        </p>

        <button>
          More on this pooch
        </button>
      </div>


    </div>

  )
}
export default Adopt
