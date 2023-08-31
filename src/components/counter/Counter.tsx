import "./style.css";
import React from 'react';
import CountUp from 'react-countup';


const Counter = () => {
  return (
    <div className="counterContainer">
      <div className="count">
        <CountUp end={56180} separator=","/>
        <p>In property sales</p>
      </div>

      <div className="count">
        <CountUp end={99} suffix="%"/>
        <p>Customer satisfaction</p>
      </div>

      <div className="count">
        <CountUp end={25} suffix="K+"/>
        <p>Property Transaction</p>
      </div>

      <div className="count">
        <CountUp end={2918} separator=","/>
        <p>Price Reduce</p>
      </div>
    </div>
  )
}


export default Counter