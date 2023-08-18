import "./style.css"
import React from 'react'
import ReactPlayer from 'react-player';
// import video from '../../assests/InteriorDesign.mp4';

const ProperLand = () => {
  return (
    <div>
        <div className="leftDiv">
            <p className="subHead">
                <span>01</span> 
                PROPERLAND INTRO
            </p>

            <h1 className="head">
                Buying and Selling Property
                In An Easy Way.
            </h1>

            <p className="body">
            Distinctively re-engineer revolutionary 
            meta-services and premium  At vero eos 
            et accusamus et iusto odio dignissimos 
            ducimus qui blanditiis praesentium voluptatum 
            deleniti atque corrupti quos dolores et quas molestias 
            excepturi.
            </p>

            <div className="features">
                <div></div> <span>Only pay when you publish</span>
                <div></div> <span>Unlimited featured used</span>
                <div></div> <span>Only pay when you publish</span>
            </div>
        </div>

        <div className="rightDiv">
            <ReactPlayer
            url="https://www.youtube.com/embed/EkpYgepycN4" // Replace with your video URL
            width="100%"
            controls // Show video controls (play, pause, etc.)
            />
        </div>
    </div>
  )
}

export default ProperLand