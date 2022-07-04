import React from "react"
import {Link} from "react-router-dom";

export default function TreasuryDashboard(){

    return (
        <>
            <div className="main-container container">
                <div className="treasury-dashboard border border-light p-3 mb-4 shadow p-3 mb-5 bg-white">
                <div className="text-center mb-3">
                    <h2>TREASURY</h2>
                </div>
                <div className="">
                <div className="mb-3 ">
                    <Link to="add-sundayofferings/" ><button type="button" className="btn btn-primary btn-lg mx-auto custom">SUNDAY OFFERINGS</button></Link>
                </div>
                    <div className="mb-3">
                    <Link to="add-expenses/" ><button type="button" className="btn btn-primary btn-lg mx-auto custom">EXPENSES</button></Link>
                    </div>
                    <div className="mb-3">
                    <Link to="add-specialofferings/" ><button type="button" className="btn btn-primary btn-lg mx-auto custom">SPECIAL OFFERINGS</button></Link>
                    </div>
                </div>
                <div className="mb-3 px-3">
        
                    <Link to="/"><button className="btn btn-secondary float-end" type="button" >Logout</button></Link>
                </div>  
                </div>
            </div>
        </>
    );
}