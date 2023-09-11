import "./style.css";
import SubHEad from "../subhead/SubHEad";


import React, { useEffect, useState } from 'react'

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    setLoading(true)
    fetch("https://laravelrealestateapi.000webhostapp.com/api/featureArticle")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      setLoading(false)
      console.log(data.data);
      setBlogs(data.data);
    })
    .catch((err) => {
      console.log(err.message)
      setError(err.message)
      setLoading(false)
    })
  }, []);

  if(isloading){
    return(
        <div className="loadContainer">
            Loading...
        </div>
    )
}else if(error){
    return(
        <div className="errorContainer">
            Error: { error }. Please try again later!
        </div>
    )
}else{
  return (
    <div>
        
        {
          blogs.map((blog: any) => {
            return(
              <div className='card-Con' key={blog.image}>
                  <div className="blog-image">{blog.image}</div>
                  <p>{blog.tag}</p>
                  <h3>{blog.title}</h3>
              </div>
            )
          })
        }
    </div>
  )
}
}

export default Blog