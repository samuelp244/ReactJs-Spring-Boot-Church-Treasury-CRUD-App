import React from "react";
import {Link} from "react-router-dom"
export default function PrayerSubmitBox(props){
    return (
        <div className={"container prayer-box rounded shadow-lg "+props.class}>
            <div className="container-fluid">
                <h4 className='border-bottom pb-2'>Request Prayer</h4>
            </div>
            <div className="container">
            <Link to="/prayer"><button className="btn btn-primary" >Request</button></Link>
                
            </div>
        </div>
    );
}