import React from 'react'

import { 
    BADALogo,
    LAWLogo,
    People
} from '../../../assets/img'

import { 
    FaTwitter,
    FaInstagram,
    FaYoutube 
} from "react-icons/fa"

import cls from './index.module.css'

const Footer = () => {
  return (
    <>
        <div className={cls.footer}>
            <div className={cls.warp}>
                <h1>acarta</h1>
                <p>Our Customer Due Diligence platform helps you avoid fines or losing clients due to AML while protecting you from cybercrime.</p>
                <h2>Approved Service Provider</h2>
                <img src={BADALogo} alt="BADALogo" />
                <h2>In Partnership with</h2>
                <img src={LAWLogo} alt="LAWLogo" />
                <h3>Registered with the Information Commissioner's Office (ICO) Registration number: ZA679248</h3>
                <h3>© Arc-Pay Ltd 2021</h3>
            </div>
            <div className={cls.infoList}>
                <ul>
                    <h1>Links</h1>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Why arcarta</li>
                    <li>Success Stories</li>
                    <li>FAQ's</li>
                    <li>Contact Us</li>
                    <li>Join</li>
                    <li>Invite</li>
                    <li>Compliance Quiz</li>
                    <li>ID Document Quiz</li>
                </ul>

                <ul>
                    <h1>Solutions</h1>
                    <li>For Galleries</li>
                    <li>For Advisors</li>
                    <li>For Auctioneers</li>
                    <li>For Secure Payments</li>
                    <li>For Buyers & Collectors</li>
                    <li>Online AML Training</li>
                </ul>

                <ul>
                    <h1>Resources</h1>
                    <li>Articles</li>
                    <li>Resources</li>
                    <li>Help Centre</li>
                    <li>The Bigger Picture</li>
                    <li>Login</li>
                    <li>Brand Assets</li>
                    <li>The Art Market Report<button className={cls.btn}>New</button></li>
                </ul>
            </div>
        </div>
        <div className={cls.and}>
            <img src={People} alt="People" />
            <div className={cls.icons}>
                <p>Privacy & Terms</p>
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
            </div>
        </div>
    </>
  )
}

export default Footer