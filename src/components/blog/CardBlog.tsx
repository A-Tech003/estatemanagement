import "./style.css"
import SubHEad from "../subhead/SubHEad";
import Blog from "./Blog";
import Toppattern from '../../assests/patternTop.png';
import Pattern from '../../assests/Group 22.png';

import React from 'react'

const CardBlog = () => {
  return (
    <div className="Blog-Container">
        <img className='blogPattern blogimg' src={Pattern} alt='background pattern'/>
        <img className='blogBottomPattern blogimg' src={Toppattern} alt='background pattern'/>
        
        <SubHEad
        span= "06"
        title="BLOG"
        titleHead="Discover The Neighborhoods"
        />

        <Blog/>
    </div>
  )
}

export default CardBlog