import React from 'react'

import { Art } from '../../assets/img'
import { FaArrowCircleRight } from "react-icons/fa"

import scls from './Mail.module.scss'

const Mail = () => {
  return (
    <div className={scls.block}>
      <img src={Art} alt="art" />
      <div>
        <h1>Art world insight.</h1>
        <p>Receive our newsletter direct to your inbox to follow updates to legislation and the EU art-market's response.</p>
        <div className={scls.typeInput}>
          <input type="email" placeholder='Your email'/>
          <FaArrowCircleRight className={scls.icon}/>
        </div>
      </div>
    </div>
  )
}

export default Mail
