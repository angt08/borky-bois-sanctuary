import React from 'react'

const Adopt = (props) => {

  return (
    <div className="adopt-adog">

      {/* <div>
        <h2>Adopt a Borky Boi</h2>
        <h5> All dogs listed are  ready for adoption</h5>
      </div> */}


      <img src={props.dog.image} />
      <h3>
        {props.dog.name}
      </h3>
      Age:
        {props.dog.age}

      <p>
        Days in Sanctuary:
        {props.dog.daysIn}
        <br />
        Breed:
        {props.dog.breed}
        <br />
      </p>

      <button>
        More on this pooch
        </button>
    </div>

  )
}
export default Adopt
