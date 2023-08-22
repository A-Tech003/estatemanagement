import React, {useState, useEffect} from "react"
import {FaArrowAltCircleRight, FaBath, FaBed, FaCar, FaRuler } from "react-icons/fa"
import {FaLocationDot} from 'react-icons/fa6'



const Container = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [properties, setProperties] = useState([]);
    // api consumption start here


    const url = "https://realestateapi.000webhostapp.com/api/featuredproperties"
    useEffect(()=>{
        setLoading(!loading);
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data);
            setProperties(data.data);
            setLoading(loading)
        })
        .catch((error) => {
            setLoading(loading)
            console.log(error.message);
            setError(error.message);
        });
    }, []);

    if(loading){
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
                                    <p style={{marginTop: "0.3rem", color: "#8F8F8F", display: "flex", justifyContent: "start", alignItems: "center"}}><FaLocationDot size={25} style={{marginRight: "0.3rem", color: "#FFBB50"}}/>{property.address}</p>
                                </div>
    
                                <div className="featured">
                                    <div><FaBed style={{marginRight: "0.3rem", color: "#3B3A5D"}}/> | {property.bedspace}</div>
                                    <div><FaBath style={{marginRight: "0.3rem", color: "#3B3A5D"}}/> | {property.baths}</div>
                                    <div><FaCar style={{marginRight: "0.3rem", color: "#3B3A5D"}}/> | {property.parking_space}</div>
                                    <div><FaRuler style={{marginRight: "0.3rem", color: "#3B3A5D"}}/> | {property.measurement}</div>
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
}

export default Container