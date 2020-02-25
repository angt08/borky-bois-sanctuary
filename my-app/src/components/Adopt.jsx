import React from 'react'

const Adopt = (props) => {

  return (
    <div className="adopt">


      <p>
      </p>

      <h3>Name:
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
        {props.dog.days}
      </p>

    </div>
  )
}
export default Adopt
