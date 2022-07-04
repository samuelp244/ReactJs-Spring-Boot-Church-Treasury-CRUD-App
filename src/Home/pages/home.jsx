import React from 'react';
import Carousel from '../components/carousel';
import slide1 from "../home-slidebar-pictures/edited_HOUSE_OF_BEATITUDES.png"
import slide2 from "../home-slidebar-pictures/Beersheba.png";
import slide3 from "../home-slidebar-pictures/Shalem_edited.jpg";
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import AddressBox from '../components/addressBox';
import MiniMeetingsContainer from "../components/meetingsComponents/miniMeetingsContainer"
import TimingsBox from "../components/TimingsBox"
import PrayerSubmitBox from '../components/PrayerSubmitBox';
import "../components/pageComponents/pageComponents.css"
function Home(){
    return (
        <>
            <Navbar 
                navStyle = {"shadow mb-5"}
            />
            <div className='container-lg' >
            <div className='row'>
            <div id="carousel" className="col-lg-12">
                <Carousel 
                    picture1 = {slide1}
                    picture2 = {slide2}
                    picture3 = {slide3}
                />
            </div>
            
                
                    <div className='col-lg-6 col-md-6 my-4 '>
                    <AddressBox 
                        class="" 
                    />
                    <TimingsBox 
                        class="my-5 "
                    />
                    </div>
                    <div className='col-lg-6 col-md-6  my-4'>
                        <MiniMeetingsContainer 
                            class=" mx-auto rounded"
                        />
                        <PrayerSubmitBox 
                            class="my-4"
                        />
                    </div>
                    
                    
                </div>
            </div>
                {/* <div id="address-box" className='col'>
                    
                </div>
                <div >
                    <PrayerSubmitBox />
                </div>
                <div id="meetings-box" className='col' >
                    <MiniMeetingsContainer />
                </div>
                <div className='col'>
                    <TimingsBox />
                </div> */}
            
            


            <Footer />
        </>
    );
}

export default Home;