import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import RecentVideosList from "../components/meetingsComponents/RecentVideosList"
import MiniMeetingsContainer from "../components/meetingsComponents/miniMeetingsContainer"
export default function MeetingsPage(){

    return (
        <>
            <Navbar 
navStyle = {"shadow mb-3"}
            />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8' >
                        <RecentVideosList />
                    </div>
                    <div className='col-lg-4'>
                        <MiniMeetingsContainer />
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    );
}