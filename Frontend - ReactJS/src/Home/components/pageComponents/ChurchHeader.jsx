import React from "react";
import "./pageComponents.css"


export default function ChurchHeader(props){

    return(
            <>
                <header className="masthead" style={{backgroundImage: `url(${props.backgroundImageUrl})`}}>
                    <div className="container h-100" >
                        {/* <div className="row h-100 " >
                            <div className=" mt-10 chuch-header-name col-12 text-center mb-0" style={{position:"absolute"}}>
                                <h1 className="">Beersheba Church</h1>
                                <h3 className="">Kakinada</h3>
                            </div>
                        </div> */}
                        <div class="page-inner-header-content container rel-pos full-height" >
                            <div class="row title-container">
                                <div class="col-xs-12 title"></div>
                            </div>
                    <div class="row container location-meta same-height pull-forward">
                        <div class="col-sm-12 address">
                            <div class="flex align-items-center justify-content-between">
                                <div className="chuch-header-name">
                                <h1 className="">{props.church_name}</h1>
                                <h3 className="">{props.town}</h3>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </header>
            </>
    );
}