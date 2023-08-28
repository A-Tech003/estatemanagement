import "./style.css"
import React from 'react';
import Rent from '../../assests/Icon3.png';
import Sales from '../../assests/icon1.png';
import Buy from '../../assests/Icon2.png';
import Experince from '../../assests/Icon4.png';
import Call from '../../assests/Icon5.png';
import Pattern from '../../assests/patternTop.png';


const Services = () => {
  return (
    <div className="serviceContainer">
        <div className="serviceHead">
          <p className="serviceSubHead">
            <span>05</span> 
            SERVICES
          </p>

          <h1 className="servicehead">
              See How We Can Help
          </h1>
        </div>

        <div className="service1">
            <div className="rent">
                <div><img src={Rent} alt="" /></div>
                <div>
                    <h3>Rent A Home</h3>
                    <p>High level overviews. approaches 
                        overall value proposition. Organically 
                        grow the holistic world view of disruptive.
                    </p>
                </div>
            </div>
            <div className="sale">
                <div><img src={Sales} alt="" /></div>
                <div>
                    <h3>Sell A Home</h3>
                    <p>Frameworks to provide a robust synopsis for high 
                        level overviews. approaches lverall, Organically 
                        grow the holistic.
                    </p>
                </div>
            </div>
            <div className="buy">
                <div><img src={Buy} alt="" /></div>
                <div>
                    <h3>Buy A Home</h3>
                    <p>Leverage agile frameworks to provide a robust synopsis 
                        for high level overviews. approaches lverall value proposition.
                    </p>
                </div>
            </div>
        </div>

        <div className="service2">
            <div className="sale">
                <div><img src={Experince} alt="" /></div>
                <div>
                    <h3>Experience Agent</h3>
                    <p>Leverage agile frameworks to provide a robust synopsis for 
                        high level overviews. approaches lverall value proposition.
                    </p>
                </div>
            </div>
            <div className="buy">
                <div><img src={Call} alt="" /></div>
                <div>
                    <h3>Member Support</h3>
                    <p>Leverage agile frameworks to provide a robust synopsis for high 
                        level overviews. lverall value proposition Organically grow holistic .
                    </p>
                </div>
            </div>
        </div>

        <img className="pattern" src={Pattern} />
    </div>
  )
}

export default Services