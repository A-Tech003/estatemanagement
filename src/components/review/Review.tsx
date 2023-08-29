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

        <div className="bottom">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perspiciatis at ut inventore nesciunt quis facere hic distinctio voluptatem, vel dicta voluptas nostrum commodi pariatur totam quas sint provident veniam!</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perspiciatis at ut inventore nesciunt quis facere hic distinctio voluptatem, vel dicta voluptas nostrum commodi pariatur totam quas sint provident veniam!</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perspiciatis at ut inventore nesciunt quis facere hic </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perspiciatis at ut inventore nesciunt quis facere hic distinctio voluptatem, vel dicta voluptas nostrum commodi pariatur totam quas sint provident veniam!</div>
        </div>
    </div>
  )
}

export default Review