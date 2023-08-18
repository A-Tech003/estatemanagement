import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaHome } from 'react-icons/fa';
import './style.css';
import React from 'react';
import Pattern from '../../assests/Group 22.png'
import Toppattern from '../../assests/patternTop.png'

interface Props{
  cName: string,
  Content: string,
  subHead: string,
  icon: any,
  title: string,
  lImg: any
  Head1: string
  headPara: string
  cLImg: string
  mainContainer: string
}

const Hero: React.FC<Props> = ({cName, Content, subHead, icon, title, 
  lImg, Head1, headPara, cLImg, mainContainer}) => {
  return (
    <div className={mainContainer}>
      <img className='bottomPattern' src={Pattern} alt='background pattern'/>
      <img className='topPattern' src={Toppattern} alt='background pattern'/>


      <div className={cName}>
        <div className={Content}>
            <div className={subHead}>
                <h5>{icon}</h5>
                <h5>{title}</h5>
            </div>

            <h1>{Head1}</h1>
            <p>{headPara}</p>

            <button>Explore Property <FaArrowAltCircleRight style={{marginLeft: "0.5rem", color: "#FFBB50"}}/></button>
        </div>
        
        <img className={cLImg} src={lImg}/>
      </div>
    </div>
  )
}

export default Hero