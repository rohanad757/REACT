import React from 'react'
import './Card.css'
function Card(props) {    
    console.log(props.name);
  return (
    <div>
        <input type="text" onChange={(e) => props.setName(e.target.value)} />
        <p>Card 1 : {props.name}</p>
    </div>
  )
}

export default Card