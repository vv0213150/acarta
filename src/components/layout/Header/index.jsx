import React from 'react'

import cls from './index.module.css'

const Header = () => {
  return (
    <div className={cls.main}>
      <div className={cls.logo}>
        <h1>arcarta</h1>
      </div>
      <div className={cls.info}>
        <ul>
          <li>What is arcarta?</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>FAQs</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default Header
