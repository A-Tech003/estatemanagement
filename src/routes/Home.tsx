import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/herobanner/Hero';
import { FaHome } from 'react-icons/fa';
import ImageHome from '../assests/Imagehome.png';
import Intro from '../components/intro/ProperLand'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero
      mainContainer='hero'
      cName = "homeHero"
      Content='homeLContent'
      subHead='homeSubHead'
      icon={<FaHome size={20}/>}
      title='REAL ESTATE AGENCY'
      lImg={ImageHome}
      cLImg='lImg'
      Head1='Find the perfect place to live with your family'
      headPara='Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate.'
      />
      <Intro/>
    </div>
  )
}

export default Home