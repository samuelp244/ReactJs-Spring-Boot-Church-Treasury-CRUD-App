import React from "react";
import "../home.css"
function Carousel(props){
    return (
        
        <div className=" carousel-container container-fluid">
            <div id="carouselExampleIndicators" className="carousel slide shadow-lg p-3 mb-5 bg-white" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={props.picture1} className="d-block carousel-image w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={props.picture2} className="d-block carousel-image w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={props.picture3} className="d-block carousel-image w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
    );
}

export default Carousel;