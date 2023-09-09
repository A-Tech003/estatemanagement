import "./style.css"
import SubHEad from "../subhead/SubHEad";
import Blog from "./Blog";

import React from 'react'

const CardBlog = () => {
  return (
    <div className="Blog-Container">
        <SubHEad
        span= "06"
        title="BLOG"
        titleHead="Discover The Neighborhoods"
        />

        <Blog/>
    </div>
  )
}

export default CardBlog