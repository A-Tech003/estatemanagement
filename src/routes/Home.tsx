import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/herobanner/Hero';
import Intro from '../components/intro/ProperLand'
import Property1 from '../components/property1/Property1';
import Why from "../components/why/Why";
import About from "../components/about/About"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Intro/>
      <Property1/>
      <Why/>
      <About/>
    </div>
  )
}

export default Home