import React from 'react'
import cls from'./app.module.css'
import Header from './components/layout/Header'
import Main from './page/Main'
import Banner from './components/Banner'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <>
      <div className={cls.main}>
        <Header/>
        <Banner />
      </div>
      <Main />
      <div>
        <Footer/>
      </div>
    </>
    
  )
}

export default App;
