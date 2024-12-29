import React from 'react'
import Cards from '../../components/Card'
import Mail from '../../components/Mail'

import { 
  Frame,
  ArtDealers,
  Advisor,
  Auctioneer,
  BuyersAndCollectors
} from '../../assets/img'

import cls from './Main.module.css'
import Influence from '../../components/Influence'

const Data = [
  {
    images: ArtDealers,
    title: 'For Art Dealers',
    description: 'Galleries and independent art dealers',
    btn: 'Learn More' 
  },
  {
    images: Advisor,
    title: 'For Advisors',
    description: 'Advisors, agents and consultants',
    btn: 'Learn More' 
  },
  {
    images: Auctioneer,
    title: 'For Auctioneers',
    description: 'Online and offline auctioneers',
    btn: 'Learn More' 
  },
  {
    images: BuyersAndCollectors,
    title: 'For Buyers & Collectors',
    description: 'Receiving Invoices, making card payments and sending your ID and address documents',
    btn: 'Learn More' 
  },
]

const Main = () => {
  return (
    <>
      <div className={cls.img}>
        <img src={Frame} alt='frame' />
      </div>
      <div className={cls.main}>
        <div className={cls.container}>
          {Data.map((item) => <Cards
            images={item.images}
            title={item.title}
            description={item.description}
            btn={item.btn}
          />)}
        </div>
      </div>
      <div className={cls.padding}>
        <Influence />
        <Mail/>
      </div>
      
    </>
  )
}

export default Main
