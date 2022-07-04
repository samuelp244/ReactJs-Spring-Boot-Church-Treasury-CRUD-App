import React, {  useState} from 'react';
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import "../home.css"
// import churchData from './mapComponents/churchMapParams.json'

export default function ChurchMap(){
    // const [churches,setChurches] = useState([]);
    
    // useEffect(()=>{
    //     setChurches(churchData);
    // },[])
    // const [activeMarker, setActiveMarker] = useState(null);
    // const handleActiveMarker = (marker) => {
    //     if (marker === activeMarker) {
    //       return;
    //     }
    //     setActiveMarker(marker);
    //   };

    //   const handleOnLoad = (map) => {
    //     const bounds = new window.google.maps.LatLngBounds();
    //     churches.forEach(({ position }) => bounds.extend(position));
    //     map.fitBounds(bounds);
    //   };
    const options = {
        mapId: "8356d54b142a4d67",
        disableDefaultUI: true,
        clickableIcons: false,
    }
    return (
    <>
        <div  >
            <GoogleMap
            zoom={13.5} 
            center={{ lat: 16.991497447564285, lng: 82.24159924373555 }} 
            options={options}
            mapContainerClassName = "map-container"
            >
            <MarkerWithInfoWindow position={{lat:16.991497447564285,lng:82.24159924373555}} church_name = "Beersheba"/>
            <MarkerWithInfoWindow position={{lat: 17.010987617672033, lng: 82.23527481285089}} church_name = "House of Beatitudes"/>
            </GoogleMap>
        </div>
    </>
        // <>
        //     <div className='mapPage'>
        //         <GoogleMap
        //             zoom={13.5} 
        //             onLoad={handleOnLoad}
        //             onClick={()=> setActiveMarker(null)}
        //             // mapContainerStyle={{width:"100vw",height:"100vh" }}
        //             center={{ lat: 16.991497447564285, lng: 82.24159924373555 }} 
        //             options={options}
        //             mapContainerClassName = "map-container"
        //         >
        //             {churches.map((church)=>(
        //                 <Marker
        //                 key={church.id}
        //                 position={church.position}
        //                 onClick={()=>handleActiveMarker(church.id)}>
        //                     {activeMarker === church.id ? (
        //                         <InfoWindow onCloseClick={()=>setActiveMarker(null)}>
        //                             <div>
        //                                 <h3>{church.church_name}</h3>
        //                                 <p>address</p>
        //                                 <button>LEARN MORE</button>
        //                             </div>
        //                         </InfoWindow>
        //                     ) : null}
        //                 </Marker>
        //             ))}
        //         </GoogleMap>
        //     </div>
        // </>
        // <>
        // <div className=" mapPage">
        //         <GoogleMap 
        //             zoom={14} 
        //             center={{ lat: 16.991497447564285, lng: 82.24159924373555 }} 
        //             mapContainerClassName = "map-container"
        //             options={options}
        //         >
        //     {
        //         churches.map(
        //             church=>
        //             <InfoWindowComponent 
        //                 key= {church.index}
        //                 markerLat = {parseInt(church.lat)}
        //                 markerLng = {parseInt(church.lng)}
        //             />
        //         )
        //     }
        //         </GoogleMap>
        // </div>
        // </>
    );
}


function MarkerWithInfoWindow(props){
    const [isOpen,setIsOpen] = useState(false);
    const onToggleOpen=()=>{
        setIsOpen(!isOpen)
    }
    
    return (
        <Marker position={props.position} onClick={()=>{onToggleOpen()}} >
            {isOpen && <InfoWindow onCloseClick={()=>{onToggleOpen()}} >
                <div>
                    <h3>{props.church_name}</h3>
                    <p>address</p>
                    <button>LEARN MORE</button>
                </div>
            </InfoWindow> }
        </Marker>
    );
}
