import React from 'react'

const Adopt = (props) => {

  return (
    <div className="adopt-adog">



      <img src={props.dog.image} />
      <h3>
        {props.dog.name}
      </h3>
      Age:
        {props.dog.age}

      <h5>
        Days in Sanctuary:
        {props.dog.daysIn}
        <br />
        Breed:
        {props.dog.breed}
        <br />
      </h5>

      <button>
        More on this pooch
        </button>
    </div>

  )
}
export default Adopt
