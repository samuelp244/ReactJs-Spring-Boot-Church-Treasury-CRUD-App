import React from "react";


export default function TimingsBox(props){
    return (
        <div className={' container times-container rounded  shadow-lg '+props.class}>
                            <div className='container-fluid'>
                                <h4 className='border-bottom pb-2' >Timings</h4>
                            </div>
                            <div className='row' >
                                <div className='col container pb-0 col-12'>
                                    <div className='container-fluid border-bottom '>
                                        <h5>Sunday</h5>
                                    </div>
                                    <div className='container-fluid pt-1'>
                                        <p className='border-bottom mb-1 pb-2'>Worship Service - 10:30 am</p>
                                        <p>Youth Meeting - 3:00 pm</p>
                                    </div>
                                </div>
                                <div className='col container pb-0 col-12'>
                                    <div className='container-fluid border-bottom '>
                                        <h5>Tuesday</h5>
                                    </div>
                                    <div className='container-fluid pt-1'>
                                        <p className='border-bottom mb-1 pb-2'>Sisters Meeting - 10:30 am</p>
                                        <p>Bible Study - 7:00 pm</p>
                                    </div>
                                </div>
                                <div className='col container pb-0 col-12'>
                                    <div className='container-fluid align-self-baseline border-bottom '>
                                        <h5 >Friday</h5>
                                    </div>
                                    <div className='container-fluid align-self-baseline'>
                                        <p>Prayer Meeting - 7:00 pm</p>
                                    </div>
                                </div>
                                <div className='col container pb-0 col-12'>
                                    <div className='container-fluid align-self-baseline border-bottom '>
                                        <h5>Saturday</h5>
                                    </div>
                                    <div className='container-fluid align-self-baseline'>
                                        <p>Sisters Fasting Prayer - 10:30 am</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
}