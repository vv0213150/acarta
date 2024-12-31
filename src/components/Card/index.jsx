import React from 'react'

import scls from './index.module.scss'

const Cards = (props) => {

  return (
    <div className={scls.container}>
      <div>
        <img src={props.images} alt="painting" />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button>{props.btn}</button>
      </div>
    </div>
  )
}

export default Cards
