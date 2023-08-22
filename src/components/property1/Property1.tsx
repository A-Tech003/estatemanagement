import "./style.css";
import React from 'react';
import PropImg from '../../assests/Pattern.png'
import FeaturedProperties from "./FeaturedProperties";


const Property1 = () => {
  return (
    <div className="propContainer">
        <div className="propHead">
          <p className="propSubHead">
            <span>02</span> 
            FEATURED PROPERTIES
          </p>

          <h1 className="prophead">
              Properties For Sale In Your Favorite Area
          </h1>
        </div>

        <FeaturedProperties/>


        <img className="PropImg" src={PropImg} alt="simple shape"/>
    </div>
  )
}

export default Property1