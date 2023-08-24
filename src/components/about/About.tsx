import "./style.css"
import React from 'react'
import AbouUs from "../../assests/Photo.png"

const About = () => {
  return (
    <div className="aboutContainer">
        <div className="aboutDisplay">
            {/* <div className="leftAbout">

            </div> */}

            <div className="rightAbout">
                <img src={AbouUs} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default About