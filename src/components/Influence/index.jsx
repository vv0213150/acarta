import React from 'react'

import { computer } from '../../assets/img'
import { FaArrowRight } from "react-icons/fa6"

import scls from './Influence.module.scss'

const Influence = () => {
  return (
    <div className={scls.main}>
        <div className={scls.new}>New</div>
        <div className={scls.container}>
            <div className={scls.card}>
                <p>01</p>
                <img src={computer} alt="computer" />
                <h2>Compliance Quiz</h2>
                <div></div>
                <div>
                    <h4>Begin</h4>
                    <FaArrowRight />
                </div>
            </div>
            <div className={scls.cardTwo}>
                <p>01</p>
                <img src={computer} alt="computer" />
                <h2>Compliance Quiz</h2>
                <div className={scls.line}></div>
                <div>
                    <h4>Begin</h4>
                    <FaArrowRight />
                </div>
            </div>
            <div className={scls.test}>
                <h1>Does Anti-money Laundering affect you?</h1>
                <p>A short, interactive quiz to check if your art business is affected by 5AMLD regulation.</p>
                <button>Take the Quiz</button>
            </div>
        </div>
    </div>
  )
}

export default Influence
