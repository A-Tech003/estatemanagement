import "./style.css";
import React from 'react';
import Budget from "../../assests/budget.png";
import Property from "../../assests/property.png";
import Location from "../../assests/location.png";
import Commission from "../../assests/commission.png";
import Trusted from "../../assests/trusted.png";

const Why = () => {
  return (
    <div className="whyContainer">
        <div className="whyHead">
          <p className="whySubHead">
            <span>03</span> 
            WHY CHOOSE
          </p>

          <h1 className="whyhead">
              Why Choose Our Properties Of Real Estate Industries.
          </h1>
        </div>


        <div className="whyContentContainer">
          <div className="grid-container">
            <div className="grid">
              <img src={Budget} className="image" alt="img"/>
              <div className="below-content">
                <h3>Budget Friendly</h3>
                <p>Distinctively re-engineer revolutionary meta-services 
                  and premium  At vero eos et accusamus et iusto odio dignissimos 
                  ducimus qui blanditiis
                </p>
              </div>
            </div>

            <div className="grid grid-col-span-2">
              <img src={Property} alt=""/>
              <div className="right-content">
                <h3>Property Insurance</h3>
                <p>Distinctively re-engineer revolutionary meta-services 
                  and premium  At vero eos et accusamus et iusto odio dignissimos 
                  ducimus qui blanditiis
                </p>
                <p>Distinctively re-engineer revolutionary meta-services and premium.</p>
              </div>
            </div>

            <div className="grid">
              <img src={Location} className="image" alt="img"/>
              <div className="below-content">
                  <h3>Prime Location</h3>
                  <p>Distinctively re-engineer revolutionary meta-services 
                    and premium  At vero eos et accusamus et iusto odio dignissimos 
                    ducimus qui blanditiis
                  </p>
              </div>
            </div>

            <div className="grid">
              <img src={Commission} className="images" alt="img"/>
              <div className="below-content">
                  <h3>Lowest Comission</h3>
                  <p>Distinctively re-engineer revolutionary meta-services 
                    and premium  At vero eos et accusamus et iusto odio dignissimos 
                    ducimus qui blanditiis
                  </p>
              </div>
            </div>

            <div className="grid">
              <img src={Trusted} className="imagess" alt="img"/>
              <div className="below-content trusted">
                  <h3>Budget Friendly</h3>
                  <p>Distinctively re-engineer revolutionary meta-services 
                    and premium  At vero eos et accusamus et iusto odio dignissimos 
                    ducimus qui blanditiis
                  </p>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Why