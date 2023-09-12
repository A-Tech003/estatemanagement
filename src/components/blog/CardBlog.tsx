import "./style.css"
import SubHEad from "../subhead/SubHEad";
import Blog from "./Blog";
import Toppattern from '../../assests/patternTop.png';
import Pattern from '../../assests/Group 22.png';

import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

const CardBlog = () => {
  return (
    <div className="Blog-Container">
         <img className='blogTopPattern blogimg' src={Toppattern} alt='background pattern'/>
        <img className='blogBottomPattern blogimg' src={Pattern} alt='background pattern'/>
        
        <SubHEad
        span= "06"
        title="BLOG"
        titleHead="Discover The Neighborhoods"
        />

        <Blog/>

        <div className="Blogbutton"><button className="blogBtn">See All Articles <FaArrowCircleRight style={{marginLeft: "0.5rem"}}/></button></div>
    </div>
  )
}

export default CardBlog