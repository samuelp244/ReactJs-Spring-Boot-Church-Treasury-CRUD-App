import React from "react";
import {Link} from "react-router-dom";

export default function Home(){
    return (
        <>
            <div className="container text-center" >
                <Link to="/treasury" ><button className="btn btn-secondary my-4">Login!</button></Link>
            </div>
        </>
    );
}