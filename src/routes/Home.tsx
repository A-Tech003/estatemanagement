import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/herobanner/Hero';
import Intro from '../components/intro/ProperLand'
import Property1 from '../components/property1/Property1';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Intro/>
      <Property1/>
    </div>
  )
}

export default Home