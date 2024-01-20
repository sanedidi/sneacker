import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Brands from '../components/Brands/Brands'
import Card from '../components/Card/Card'
import Shop from '../components/Shop/Shop'
import Trends from '../components/Trends/Trends'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <Popular />
        <Brands />
        <Card  />
        <Shop />
        <Trends />
        <About />
        <Footer />
    </>
  )
}


export default Home