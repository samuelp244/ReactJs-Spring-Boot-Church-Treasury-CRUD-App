import React from "react"

import churhDetails from "../churchParams.json"
export default function AddressBox(props){
    return (
        <div className={' container address-container rounded  shadow-lg   '+props.class}>
            <div className='container-fluid'>
                <h4 className='border-bottom pb-2' >Address</h4>
            </div>
            <div>
                <p>{churhDetails.filter(x=>x.id===1).map(x=>x.address)}</p>
            </div>
            <div>
                <a href={churhDetails.filter(x=>x.id===1).map(x=>x.mapsLink)}><button className="btn btn-outline-primary">GET DIRECTIONS</button></a>
            </div>
        </div>
    );
}