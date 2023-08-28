import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/herobanner/Hero';
import Intro from '../components/intro/ProperLand'
import Property1 from '../components/property1/Property1';
import Why from "../components/why/Why";
import About from "../components/about/About";
import Services from '../components/services/Services';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Intro/>
      <Property1/>
      <Why/>
      <About/>
      <Services/>
    </div>
  )
}

export default Home