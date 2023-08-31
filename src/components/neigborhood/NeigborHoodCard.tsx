import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import "./style.css";

// interface NeigborHoodProp{
//     id: number
//     img: any
//     title: string
//     para: string
// }

const NeigborHoodCard = () => {
    const [error, setError] = useState(null);
    const [isloading, setIsLoading] = useState(false);
    const [neigborhoods, setNeigborHoods] = useState([]);

    useEffect(() => {
        const url = "https://laravelrealestateapi.000webhostapp.com/api/locationpropertycount";
        setIsLoading(!isloading)
        fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            // console.log(data.data);
            setNeigborHoods(data.data);
            setIsLoading(isloading);
        })
        .catch((err) => {
            console.log(err.message);
        })
    }, [])

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
        return(
            <div className='locationGrid'>
                {
                    neigborhoods.map((neigborhood: any) => {
                        return(
                            <div className='neigbor-container' key={neigborhood.id}>
                                <div className="neigbor-container-overLay"></div>
                                <div className="neigbor-btn">
                                    <FaArrowRight/>
                                </div>
                                <div className="neigbor-img">
                                    <img src={neigborhood.picture} alt="" />
                                </div>
                                <div className="neigbor-content">
                                    <h3>{neigborhood.location}</h3>
                                    <p>{neigborhood.property_count} Property</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }





//   return (
//     <div className='neigbor-container'>
//         <div className="neigbor-container-overLay"></div>
//         <div className="neigbor-btn">
//             <FaArrowRight/>
//         </div>
//         <div className="neigbor-img">
//             {/* <img src={Neba} alt='image'/> */}
//             {img}
//         </div>
//         <div className="neigbor-content">
//             <h3>{title}</h3>
//             <p>{para}</p>
//         </div>
//     </div>
//   )
}

export default NeigborHoodCard