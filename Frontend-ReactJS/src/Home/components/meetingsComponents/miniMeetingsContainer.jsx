import React, {  useEffect, useState} from 'react';
import { getrecentList } from './getdatafromYT';

export default function MiniMeetingsContainer(props){

    const [recentdata,setRecentData]= useState([])


    useEffect(()=>{
        const params = {
            nextButtonToken:null,
            prevButtonToken:null
        }
        getrecentList(params).then(res=>{
            setRecentData(res.items.slice(0,3));
        })
    },[])
    return (
        <div className={' mini-meetings-container border shadow-lg py-3  bg-white px-3 '+props.class}>
            
            <div className='container'>
            <nav className='container-fluid'>
            <div className="nav nav-tabs row" id="nav-tab" role="tablist">
                <button className="nav-link active col" id="nav-recent-tab" data-bs-toggle="tab" data-bs-target="#nav-recent" type="button" role="tab" aria-controls="nav-recent" aria-selected="true">Recent</button>
                <button className="nav-link col" id="nav-live-tab" data-bs-toggle="tab" data-bs-target="#nav-live" type="button" role="tab" aria-controls="nav-live" aria-selected="false">Live</button>
                <button className="nav-link col" id="nav-upcoming-tab" data-bs-toggle="tab" data-bs-target="#nav-upcoming" type="button" role="tab" aria-controls="nav-upcoming" aria-selected="false">Upcoming</button>
                
            </div>
            </nav>
            <div className="tab-content container-fluid" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-recent" role="tabpanel" aria-labelledby="nav-recent-tab" tabIndex="0">
                    <h5 className='py-2' >Recent Meetings</h5>
                    <ul className='container-fluid'>
                        {
                            recentdata.map(item=>{
                                const {id, snippet={}} = item;
                                const {title, thumbnails, resourceId} = snippet;
                                
                                return(
                                    <div className="mini-meetingsbox border px-3 pb-2 " key={id} >
                                        <a className='row' href={`http://www.youtube.com/watch?v=${resourceId.videoId}`} >
                                            <img className='col-4 mx-auto my-1 py-1' src={thumbnails.default.url}  alt="..."/>
                                            <p className='col-8 mx-auto my-1 '>{title}</p>
                                        </a>
                                    </div>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="tab-pane fade" id="nav-live" role="tabpanel" aria-labelledby="nav-live-tab" tabIndex="0">
                    <h5 className='px-5 py-4'>No Live Videos</h5>
                </div>
                
                <div className="tab-pane fade" id="nav-upcoming" role="tabpanel" aria-labelledby="nav-upcoming-tab" tabIndex="0">
                <h5 className='px-5 py-4'>No Upcoming Videos</h5>

                </div>
            
            </div>
            </div>
        </div>
    );
}