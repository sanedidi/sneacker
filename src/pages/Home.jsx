import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Brands from '../components/Brands/Brands'
import Asics from '../components/Asics/Asics'
import ProductCard from '../components/Product-Card/ProductCard'
import Stepney from '../components/Stepney/Stepney'
const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <Popular />
        <Brands />
        <Asics />
        <ProductCard />
        <Stepney />
    </>
  )
}


export default Home