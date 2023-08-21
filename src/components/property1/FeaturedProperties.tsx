import "./style.css"
import React from 'react'
import PropPhoto1 from "../../assests/Photoprop1.jpg"
import { FaBed } from "react-icons/fa"

// This is the propertieds component
const Container = () => {
    return(
    <div className="mainContainer">
        <div className="propertyContainer">
            {/* <div className="propImage">
                <img src={PropPhoto1} alt="property photo"/>
            </div>

            <div className="propPrice">
                <h2 style={{color: "#FFBB50", fontWeight: "400"}}>$3500/Mo</h2>
                <button className="secondaryBtn">For Sale</button>
            </div>

            <div className="propTitle">
                <h3>Comfortable Apartment</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="featured">
                <div><FaBed/> | 3 Beds</div>
                <div></div>
                <div></div>
                <div></div>
            </div> */}
        </div>
    </div>
    )
}

const FeaturedProperties = () => {
  return (
    <div className="properties">
        <Container/>
        <Container/>
        <Container/>
        <Container/>
        <Container/>
        <Container/>
    </div>
  )
}

export default FeaturedProperties