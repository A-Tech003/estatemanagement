import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import "./style.css"
import React from 'react'

const Review = () => {
  return (
    <div className="reviewContainer">
        <div className="topCon">
            <div className="leftcon">
                <h1>What our customers say about us</h1>
            </div>
            <div className="buttons">
                <div className="arrow"><FaArrowLeft/></div>
                <div className="arrow"><FaArrowRight/></div>
            </div>
        </div>
    </div>
  )
}

export default Review