import React from 'react';
import Navbar from "../components/Navbar"
import Footer from '../components/footer';
import ChurchHeader from '../components/pageComponents/ChurchHeader';
import churhDetails from "../components/mapComponents/churchMapParams.json"
import beershebaImage from "../churchHeaderImages/beersheba.png"

export default function BeershebaPage(){

    return (
        <>
            <Navbar />
                <ChurchHeader 
                    backgroundImageUrl={beershebaImage}
                    church_name="Beersheba Church"
                    town="Kakinada"
                />
                <div className='container mt-3 '>
                    <div className='row gap-3'>


                        <div className=' container address-container rounded  shadow-lg  my-4'>
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


                        <div className=' container times-new-container rounded  shadow-lg  my-4 '>
                            <div className='container-fluid'>
                                <h4 className='border-bottom pb-2' >Timings</h4>
                            </div>
                            <div className='row' >
                                <div className='col container col-12 col-md-6 col-lg-3 col-sm-6 col-xs-12 pb-0 '>
                                    <div className='container-fluid border-bottom '>
                                        <h5>Sunday</h5>
                                    </div>
                                    <div className='container-fluid pt-1'>
                                        <p className='border-bottom mb-1 pb-2'>Worship Service - 10:30 am</p>
                                        <p>Youth Meeting - 3:00 pm</p>
                                    </div>
                                </div>
                                <div className='col container col-12 col-md-6 col-lg-3 col-sm-6 col-xs-12 pb-0'>
                                    <div className='container-fluid border-bottom '>
                                        <h5>Tuesday</h5>
                                    </div>
                                    <div className='container-fluid pt-1'>
                                        <p className='border-bottom mb-1 pb-2'>Sisters Meeting - 10:30 am</p>
                                        <p>Bible Study - 7:00 pm</p>
                                    </div>
                                </div>
                                <div className='col container col-12 col-md-6 col-lg-3 col-sm-6 col-xs-12 pb-0 '>
                                    <div className='container-fluid align-self-baseline border-bottom '>
                                        <h5 >Friday</h5>
                                    </div>
                                    <div className='container-fluid align-self-baseline'>
                                        <p>Prayer Meeting - 7:00 pm</p>
                                    </div>
                                </div>
                                <div className='col container col-12 col-md-6 col-lg-3 col-sm-6 col-xs-12 pb-0 '>
                                    <div className='container-fluid align-self-baseline border-bottom '>
                                        <h5>Saturday</h5>
                                    </div>
                                    <div className='container-fluid align-self-baseline'>
                                        <p>Sisters Fasting Prayer - 10:30 am</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <Footer />
        </>
    );
}