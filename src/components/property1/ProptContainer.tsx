import React, {useState, useEffect} from "react"
import {FaArrowAltCircleRight, FaBath, FaBed, FaCar, FaRuler } from "react-icons/fa"
import {FaLocationDot} from 'react-icons/fa6'



const Container = () => {
    const [properties, setProperties] = useState([]);
    // api consumption start here
    useEffect(()=>{
        fetch('https://realestateapi.000webhostapp.com/api/featuredproperties')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data);
            setProperties(data.data);
        })
        .catch((error) => console.log(error.message));
    }, []);

    return(
        <>
        <div className="properties">
            {
                properties.map((property:any) => {
                    return(
                        <div className="propertyContainer" key={property.id}>
                            <div className="propImage">
                                <img src={property.image} alt="property photo"/>
                            </div>

                            <div className="propPrice">
                                <h2 style={{color: "#FFBB50", fontWeight: "400"}}>	&#36;{property.price}/Mo</h2>
                                <button className="secondaryBtn">{property.availability}</button>
                            </div>

                            <div className="propTitle">
                                <h3>{property.title}</h3>
                                <p style={{marginTop: "0.3rem"}}><FaLocationDot style={{marginRight: "0.3rem"}}/>{property.address}</p>
                            </div>

                            <div className="featured">
                                <div><FaBed style={{marginRight: "0.3rem"}}/> | {property.bedsace}</div>
                                <div><FaBath style={{marginRight: "0.3rem"}}/> | {property.baths}</div>
                                <div><FaCar style={{marginRight: "0.3rem"}}/> | 1 {property.parking_space}</div>
                                <div><FaRuler style={{marginRight: "0.3rem"}}/> | {property.measurement}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <button className="getInTouch">Touch With Us <FaArrowAltCircleRight style={{marginLeft: "0.5rem", color: "#FFBB50"}}/></button>
        </>
    )
}

export default Container