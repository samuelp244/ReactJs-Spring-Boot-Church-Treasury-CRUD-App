import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

export default function PrayerPage(){

    const SubmitPrayerReq = (e)=>{

    } 
    return (
        <>
        <Navbar 
            navStyle = {"shadow mb-5"}
        />
        <div className=" main-container container">
            <div className="shadow p-3 mb-5 bg-white" >
            <form className="req-form">
                <div className="text-center mb-3 mt-2">
                    <h2>Prayer Request</h2>
                </div>
                <div className="form-row row mb-3 px-3">
                    <div class="form-group col-md-6 mb-3 px-3">
                        <label for="" >Name</label>
                        <input type="text" class="form-control my-2" id="" placeholder="First Name"/>
                    </div>
                    <div class="form-group col-md-6 mb-3 px-3">
                        <label for=""></label>
                        <input type="text" class="form-control my-2" id="" placeholder="Last Name"/>
                    </div>
                </div>
                <div class="form-group mb-3 px-3">
                    <label for="">Email</label>
                    <input type="email" class="form-control my-2" id="" placeholder=""/>
                </div>
                <div class="form-group mb-3 px-3">
                    <label for="">Mobile Number</label>
                    <input type="text" class="form-control my-2" id="" placeholder=""/>
                </div>
                <div class="form-group mb-3 px-3">
                    <label for="">Message Subject</label>
                    <input type="text" class="form-control my-2" id="" placeholder=""/>
                </div>
                <div class="form-group mb-3 px-3">
                    <label for="">Message</label>
                    <input type="text" class="form-control input-messageSize my-2" id="" placeholder=""/>
                </div>
                <div className="mb-3 px-3 ">
                    <button className="btn btn-primary float-end"  type="button" onClick={(e)=>{SubmitPrayerReq(e)}}>Submit Request</button>
                </div>
            </form>
            </div>
        </div>
        <Footer />
        </>
    );
}