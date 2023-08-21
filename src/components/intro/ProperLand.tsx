import "./style.css"
import React, {useRef} from 'react'
import Video from "../../assests/InteriorDesign.mp4"
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
const ProperLand = () => {
    const [playVideo, setplayVideo] = React.useState(false)
    const vidRef = useRef<HTMLInputElement | any>();


    const handleVideo = () => {
        setplayVideo((prevPlayVideo) => !prevPlayVideo)
    
        if (vidRef.current != null) {
        if(playVideo){
          vidRef.current.pause();
        }else {
          vidRef.current.play();
        }
      }
    }


  return (
    <div className="proper">
        <div className="leftDiv">
            <p className="introSubHead">
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
                <div></div> <span>24/7 supports</span>
            </div>
        </div>

        <div className="rightDiv">
            <video 
            src={Video} 
            ref = {vidRef}
            controls={false}
            muted
            />

          <div className="videoOverlay" onClick={handleVideo}>
            <div className="videoOverLayCircle1">
              <div className="videoOverLayCircle2">
                <div className="videoOverLayCircle3">
                  {playVideo 
                    ? <BsPauseFill color = '#000' fontSize={30}/>
                    : <BsFillPlayFill color = '#000' fontSize={30}/> 
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProperLand

