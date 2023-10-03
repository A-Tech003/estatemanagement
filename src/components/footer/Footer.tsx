import "./style.css";
import React from 'react'
import logo from "../../assests/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";


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

        <div className="bottomCon">
          <div className="link">
            <div className="lin1">
              <h3>Company</h3>
              <p>About</p>
              <p>Blog</p>
              <p>Properties</p>
              <p>Agents</p>
              <p>Services</p>
              <p>Contact us</p>
            </div>
            <div className="lin1">
              <h3>Services</h3>
              <p>Rent A Home</p>
              <p>Sell A Home</p>
              <p>Buy A Home</p>
              <p>Property Insurance</p>
              <p>Member Support</p>
              <p>Experience Agent</p>
            </div>
            <div className="lin1">
              <h3>Utitlity Pages</h3>
              <p>Style Guide</p>
              <p>Licenses</p>
              <p>Channel Log</p>
              <p>Password</p>
              <p>Not found</p>
              <p>More Template</p>
            </div>
          </div>

          <div className="contact">
            <div className="conInfo">
              <h1>Contact US</h1>

              <FaMapMarkerAlt/>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span><br />

              <FaPhone/>
              <span>1234567890</span> <br />

              <FaMailBulk/>
              <span>example@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer