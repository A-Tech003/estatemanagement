import "./style.css"
import React from 'react'


interface Props{
    span: string
    title: string
    titleHead: string
}

const SubHEad: React.FC<Props> = ({span, title, titleHead}) => {
  return (
    <div className="serviceHead">
          <p className="serviceSubHead">
            <span>{span}</span> 
            {title}
          </p>

          <h1 className="servicehead">
              {titleHead}
          </h1>
    </div>
  )
}

export default SubHEad