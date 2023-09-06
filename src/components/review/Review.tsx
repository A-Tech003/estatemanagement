import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import "./style.css"
import React, { useState, useRef } from 'react';
import Lady from "../../assests/Lady.jpg";
import Man from "../../assests/Photo.jpg";
import ManHat from "../../assests/image 15.jpg";
import Woman from "../../assests/image 16.jpg";
import Slider from "react-slick"





const Review = () => {
    
    // const [scrollIndex, setScrollIndex] = useState(0);
    // const scrollLeft = () => {
    //     setScrollIndex(Math.max(scrollIndex - 1, 0));
    // };

    // const scrollRight = () => {
    //     setScrollIndex(Math.min(scrollIndex + 1, 5 - 1));
    // };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };





  return (
    <div className="reviewContainer">
        <div className="topCon">
            <div className="leftcon">
                <h1>What our customers say about us</h1>
            </div>
            <div className="buttons">
                <div  className="arrow"><FaArrowLeft/></div>
                <div  className="arrow"><FaArrowRight/></div>
            </div>
        </div>

        <Slider className="bottom" {...settings}>
          <div>
                <div className="div">
                    <p>
                        Distinctively re-engineer revolutionary services and  
                        <span style={{color: "#A7542A", fontWeight: 800}}> premium  At vero accusamus</span> et iustoDignissimos ducimus 
                        qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores .
                    </p>
                </div>
                <div className="profile"><img src={Man}/></div>
            </div>
            
            <div>
                <div className="div">
                    <p>Completely synergize resource taxing <span style={{color: "#A7542A", fontWeight: 800}}>relationships</span> via premier. Professionally cultivate one-to-one customer service with robust ideas.</p>
                    <p style={{marginTop: '1rem'}}>Dynamically <span style={{color: "#3B3A5D", fontWeight: 800}}>innovate resource-leveling customer</span> service for state of the art customer service.</p>
                </div>
                <div className="profile"><img src={Lady}/></div>
            </div>

            <div>
                <div className="div">
                    <p>Distinctively re-engineer revolutionary services and <span style={{color: "#A7542A", fontWeight: 800}}>premium</span>  At vero accusamus et iustoDignissimos .</p>
                </div>
                <div className="profile"><img src={ManHat}/></div>
            </div>

            <div>
                <div className="div">
                    <p>Proactively envisioned multimedia based expertise and <span style={{color: "#A7542A", fontWeight: 800}}>cross-media growth strategies. Seamlessly visualize</span> quality intellectual capital without superior colla idea-sharing. Holistically pontificate installed base portals after maintainable products.</p>
                    <p style={{marginTop: '1rem'}}>Phosfluorescently engage methodologies with web-enabled technology. </p>
                </div>
                <div className="profile"><img src={Woman}/></div>
            </div>
        </Slider>
    </div>
  )
}

export default Review