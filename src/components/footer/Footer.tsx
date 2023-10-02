import "./style.css";
import React from 'react'
import logo from "../../assests/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footContent">

        <div className="topcon">

          <div className="logo">
            <img src={logo} alt="logo" />
            <div className="icons">
              <FaInstagram size={25}/>
              <FaFacebook size={25}/>
              <FaTwitter size={25}/>
              <FaLinkedin size={25}/>
              <FaYoutube size={25}/>
            </div>
          </div>

          <div className="mailsub">
            <h1>Get a free estimate</h1>
            <p>Leverage agile frameworks to provide a robust synopsis for high level
              overviiews. approches several values proposition. Organically grow the holistic
              world view of disruptive.
            </p>

            <div className="mailField">
              <input type="text" placeholder="your enail address here"/>
              <button className="primaryBtn">Subscribe Now</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer