import React from 'react'

import {
    brandOne,
    brandTwo,
    brandThree,
    brandFour
} from '../../assets/img'
import { HiArrowCircleRight } from "react-icons/hi"
import scls from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={scls.main}>
        <div className={scls.banner}>
            <div className={scls.twoDiv1}>New</div>
            <div className={scls.twoDiv}>The Art Market Report</div>
        </div>
        <h1>Rely on us</h1>
        <p>Our Customer Due Diligence platform helps you avoid fines or losing clients due to AML while protecting you from cybercrime.</p>
        <button>Learn More</button>
        <div className={scls.img}>
            <img src={brandOne} alt="brand" />
            <img src={brandTwo} alt="brandTwo" />
            <img src={brandThree} alt="brandThree" />
            <img src={brandFour} alt="brandFour" />
        </div>
        <div className={scls.whatIs}>
            <h2>What is arcarta?</h2>
            <HiArrowCircleRight />
        </div>
    </div>
  )
}

export default Banner
