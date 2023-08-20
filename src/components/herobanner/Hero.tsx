import { FaArrowAltCircleRight, FaHome } from 'react-icons/fa';
import './style.css';
import React from 'react';
import Pattern from '../../assests/Group 22.png';
import Toppattern from '../../assests/patternTop.png';
import ImageHome from '../../assests/Imagehome.png';


const Hero: React.FC = () => {
  return (
    <div className="heroContainer">
      <img className='bottomPattern' src={Pattern} alt='background pattern'/>
      <img className='topPattern' src={Toppattern} alt='background pattern'/>


      <div className="heroContent">
        <div className="heroLeftContent">
          <div className="subHead">
            <h5><FaHome size={20}/></h5>
            <h5>REAL ESTATE AGENCY</h5>
          </div>

          <h1>Find the perfect place to live with your family</h1>
          <p>Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate.</p>

          <button>Explore Property <FaArrowAltCircleRight style={{marginLeft: "0.5rem", color: "#FFBB50"}}/></button>
        </div>

        <div className="heroRightContent">
          <img className="rightImg" src={ImageHome}/>
        </div>
      </div>
    </div>
  )
}

export default Hero