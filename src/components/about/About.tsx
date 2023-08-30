import "./style.css"
import React from 'react'
import AbouUs from "../../assests/Photo.png"
import { FaArrowAltCircleRight } from "react-icons/fa"

const About = () => {
  return (
    <div className="aboutContainer">
        <div className="group">
            <div className="aboutDisplay">
                <p className="aboutSubHead">
                    <span>04</span> 
                    ABOUT US
                </p>

                <h1 className="abouthead">
                    42+ years of helping you find the right property.
                </h1>

                <p className="aboutbody">Distinctively re-engineer revolutionary meta-services 
                    and premium  At vero eos et accusamus et iusto 
                </p>

                <p className="aboutbody aboutbody1">
                    Dignissimos ducimus qui blanditiis praesentium voluptatum 
                    deleniti atque corrupti quos dolores et quas molestias excepturi.Lorem 
                    ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>

                <button className="secondaryBtn aboutButton">Learn More <FaArrowAltCircleRight style={{marginLeft: "0.5rem"}}/></button>
            </div>

            <div className="rightAbout">
                <img className="aboutImg" src={AbouUs} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default About