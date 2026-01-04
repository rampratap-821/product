import React from 'react'
import Our_Product from '../Home/Our_Product'
import HeroSection from '../OurProduct/HeroSection'

const Products = ({ card, setCard }) => {
  return (
    <>
    <HeroSection/>
    <Our_Product  card ={card} setCard={setCard} />
    </>
  )
}

export default Products