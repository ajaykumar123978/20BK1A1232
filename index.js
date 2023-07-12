import React from 'react'
import './index.css';
function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default Card