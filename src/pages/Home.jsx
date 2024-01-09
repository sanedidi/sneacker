import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Brands from '../components/Brands/Brands'
import Card from '../components/Card/Card'
const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <Popular />
        <Brands />
        <Card />
    </>
  )
}


export default Home