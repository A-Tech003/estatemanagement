import React from 'react';
import NeigborHoodCard from './NeigborHoodCard';
import "./style.css"


const NeigborHood = () => {
    return(
        <div className='locationContainer'>
            <div className="locationHead">
            <p className="locationSubHead">
                <span>06</span> 
                Neighborhoods
            </p>

            <h1 className="locationhead">
                Discover The Neighborhoods
            </h1>
            </div>


            <div className="loCation">
                <NeigborHoodCard/>
            </div>
        </div>
    )

}

export default NeigborHood