import React from 'react';
import { useLoadScript,  } from "@react-google-maps/api";
import {Link} from "react-router-dom";
import ChurchMap from '../components/maps';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import churhDetails from "../components/mapComponents/churchMapParams.json"

export default function Locations(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDWMX3Imj4cTss5PiMHA7P6f7ogLAzFu6M",
    });
console.log(churhDetails)
    if(!isLoaded) return <div>Loading..</div>

    return (
        <>
        <Navbar/>
            <div className="row">
                <div className="col">
                   <div className="pb-10">{isLoaded ? <ChurchMap /> : null}</div>
                </div>
                <div className="locations-container list-group col-lg-3 col-md-3 ">
                <div className='container locations-heading pt-4 pb-2'><h2 className='mb-0'>Our Locations</h2></div>
                {
                    churhDetails.map(church=>{
                        const { id, church_name,address,path} = church;
                        return(
                            <ul className='border mb-0 pt-3'>
                            <Link to={path}> <div key={id} >
                                <h5>{church_name}</h5>
                                <p>{address}</p>
                            </div></Link>
                            </ul>
                        );
                    })
                }
                   
                </div>
            </div>
        <Footer />
        </>
        
    );
}


