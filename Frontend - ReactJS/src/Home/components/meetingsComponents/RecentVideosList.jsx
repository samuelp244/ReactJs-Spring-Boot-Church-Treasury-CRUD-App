import React, {  useEffect, useState} from 'react';
import { getrecentList } from './getdatafromYT';


export default function RecentVideosList(){
    const [data,setdata] = useState([])
    const [nextPageid,setNextPageId] = useState(null)
    const [prevPageid,setPrevPageId] = useState(null)
    const [totalResults,setTotalResults] = useState(0);
    const [fromResults,setFromResults] = useState(1);
    const [toResults,setToResults] = useState(30);

    const [showPrev,setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true)
    useEffect(()=>{
        const params = {
            nextButtonToken:null,
            prevButtonToken:null
        }
        getrecentList(params).then(res=>{
            // console.log(res)
            setNextPageId(res.nextPageToken)
            setdata(res.items);
            setTotalResults(res.pageInfo.totalResults)
            setFromResults(1);
            setToResults(30);
            if(res.nextPageToken){
                setShowNext(true)
            }else{
                setShowNext(false)
            }
            if(res.prevPageToken){
                setShowPrev(true)
            }else{
                setShowPrev(false)
            }
        })
        
    },[])
    const prevButtonHandler=()=>{
        if(data.length<30){
            setFromResults(fromResults-30)
            setToResults(toResults-(totalResults%100))
            const params={
                nextButtonToken:null,
                prevButtonToken:prevPageid
            }
            getrecentList(params).then(res=>{
                setNextPageId(res.nextPageToken)
                setPrevPageId(res.prevPageToken)
                setdata(res.items);
                if(res.nextPageToken){
                    setShowNext(true)
                }else{
                    setShowNext(false)
                }
                if(res.prevPageToken){
                    setShowPrev(true)
                }else{
                    setShowPrev(false)
                }
            })
            window.scrollTo(0, 0);
        }else{
            const params={
                nextButtonToken:null,
                prevButtonToken:prevPageid
            }
            getrecentList(params).then(res=>{
                setNextPageId(res.nextPageToken)
                setPrevPageId(res.prevPageToken)
                setFromResults(fromResults-30);
                setToResults(toResults-30)
                setdata(res.items);
                // console.log(res.items)
                if(res.nextPageToken){
                    setShowNext(true)
                }else{
                    setShowNext(false)
                }
                if(res.prevPageToken){
                    setShowPrev(true)
                }else{
                    setShowPrev(false)
                }
            })
            window.scrollTo(0, 0);
        }
        
        
    }
    const nextButtonHandler=()=>{
            const params={
                nextButtonToken:nextPageid,
                prevButtonToken:null
            }
            getrecentList(params).then(res=>{
                if(res.nextPageToken){
                    setNextPageId(res.nextPageToken)
                    setFromResults(fromResults+30)
                    setToResults(toResults+30)
                }
                setdata(res.items);
                setPrevPageId(res.prevPageToken)
                if(res.items.length<30){
                    setFromResults(toResults+1)
                    setToResults(totalResults)
                }
                if(res.nextPageToken){
                    setShowNext(true)
                }else{
                    setShowNext(false)
                }
                if(res.prevPageToken){
                    setShowPrev(true)
                }else{
                    setShowPrev(false)
                }
                console.log(res)
            })
            window.scrollTo(0, 0);
    }

    // console.log(data)
    return (
        
        <div className=' recent-meetings-container border shadow py-3  bg-white'>
            <div className='container-fluid px-3'>
                <p>Results {fromResults} - {toResults} of {totalResults}</p>
            </div>
            <ul >
            {
                data.map(item=>{
                    const { id, snippet = {}} = item;
                    const {title, resourceId} = snippet;
                    return (
                        <div className=" border px-3 pb-2 " key={id} >
                            <div className='meeting-title container-fluid ' >
                                <p className='mb-0 py-3'>{title}</p>
                                <a href={`http://www.youtube.com/watch?v=${resourceId.videoId}`}><button className=' watch-btn btn btn-sm btn-outline-dark mx' >watch</button></a>
                                
                            </div>
                            
                        </div>
                        
                    );
                })
            }
            </ul>
            <div className='mb-3 px-3'>
                {showPrev ? <button className="btn btn-primary" type="button" onClick={()=>{prevButtonHandler()}}>Prev</button> :null}
                {showNext ? <button className="btn btn-primary float-end" type="button" onClick={()=>{nextButtonHandler()}}>Next</button> :null}
            </div>
        </div>
    );
}
                         