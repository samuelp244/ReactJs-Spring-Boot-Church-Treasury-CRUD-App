import React, {useState,createRef} from "react";
import "../treasury.css"
import SundayOfferingService from "../services/SundayOfferingsService"
import {Link,useLocation} from 'react-router-dom';
import {Alert} from "react-bootstrap";


export default function EditSundayOfferingComponent(){

    const [editedSundayOfferingrefs] = useState({
        offering_date : createRef(),
        offering_church:createRef(),
        no2000:createRef(),
        no500:createRef(),
        no200:createRef(),
        no100:createRef(),
        no50:createRef(),
        no20:createRef(),
        no10:createRef(),
        coins_total:createRef(),
        offerings_total:createRef(),

    })
    const location = useLocation();
    const [updateSuccessAlert,setUpdateSuccessAlert] = useState(false);
    const [editedSundayOfferingvars] = useState({
        offering_date : location.state.sundayOffering_date,
        offering_church:location.state.sundayOffering_churchname,
        no2000:location.state.no2000,
        no500:location.state.no500,
        no200:location.state.no200,
        no100:location.state.no100,
        no50:location.state.no50,
        no20:location.state.no20,
        no10:location.state.no10,
        coins_total:location.state.coins_total,
        offerings_total:location.state.total,
    })
    const sundayOfferingsChangeHandler=(e)=>{
        const {name,value} = e.target;
        editedSundayOfferingvars[name]=value;

        const no2000 = parseInt(editedSundayOfferingrefs.no2000.current.value,10);
        const no500= parseInt(editedSundayOfferingrefs.no500.current.value,10);
        const no200= parseInt(editedSundayOfferingrefs.no200.current.value,10);
        const no100= parseInt(editedSundayOfferingrefs.no100.current.value,10);
        const no50= parseInt(editedSundayOfferingrefs.no50.current.value,10);
        const no20= parseInt(editedSundayOfferingrefs.no20.current.value,10);
        const no10= parseInt(editedSundayOfferingrefs.no10.current.value,10);
        const coins_total= parseInt(editedSundayOfferingrefs.coins_total.current.value,10);

        editedSundayOfferingrefs.offerings_total.current.value = no2000*2000+no500*500+no200*200+no100*100+no50*50+no20*20+no10*10+coins_total;

    }
    const updateSundayOfferingsHandler = (e)=>{
        e.preventDefault();
        let editedSundayOfferingsData = {
            sundayOffering_id:location.state.sundayOffering_id,
            sundayOffering_date:editedSundayOfferingrefs.offering_date.current.value,
            sundayOffering_church : editedSundayOfferingrefs.offering_church.current.value,
            sundayOffering_no2000: editedSundayOfferingrefs.no2000.current.value,
            sundayOffering_no500: editedSundayOfferingrefs.no500.current.value,
            sundayOffering_no200: editedSundayOfferingrefs.no200.current.value,
            sundayOffering_no100: editedSundayOfferingrefs.no100.current.value,
            sundayOffering_no50: editedSundayOfferingrefs.no50.current.value,
            sundayOffering_no20: editedSundayOfferingrefs.no20.current.value,
            sundayOffering_no10:editedSundayOfferingrefs.no10.current.value,
            sundayOffering_coinsTotal: editedSundayOfferingrefs.coins_total.current.value,
            sundayOffering_Total: editedSundayOfferingrefs.offerings_total.current.value
        }
        console.log(editedSundayOfferingsData)
        SundayOfferingService.editSundayOffering(editedSundayOfferingsData).then(res=>{
            if(res.data==="OK"){
                setUpdateSuccessAlert(true)
                setTimeout(() => {
                    setUpdateSuccessAlert(false)
                }, 2000);
            }
            console.log(res)
        })
        
        // window.location.reload()

    }

    return (
        <div className=" main-container container" >
            <div className=" sundayOffering-container shadow-lg p-3 mb-5 bg-white">
                <form>
                <div className="row ">
                    <div className="text-center mb-3 mt-2">
                        <h2>UPDATE SUNDAY OFFERING</h2>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 ">
                        <div className=" input-group mb-3 px-3">
                            <span className="input-group-text" >Date </span>
                            <input ref={editedSundayOfferingrefs.offering_date} type="date" name="offering_date" defaultValue={editedSundayOfferingvars.offering_date} onChange={sundayOfferingsChangeHandler} className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >Church Name </span>
                            <select ref={editedSundayOfferingrefs.offering_church} name="offering_church" defaultValue={editedSundayOfferingvars.offering_church} onChange={sundayOfferingsChangeHandler} className="form-select" disabled>
                                <option value="DEFAULT" disabled>select church</option>
                                <option value="BEERSHEBA">BEERSHEBA</option>
                                <option value="HOUSE_OF_BEATITUDES">HOUSE OF BEATITUDES</option>
                                <option value="ELIEM">ELIEM</option>
                                <option value="BETHEL">BETHEL</option>
                                <option value="BETHANI">BETHANI</option>
                                <option value="NEW_JERUSALEM">NEW JERUSALEM</option>
                                <option value="REHABOTH">REHABOTH</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-6" >
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >₹2000 x</span>
                            <input ref={editedSundayOfferingrefs.no2000} name="no2000" type="number" defaultValue={editedSundayOfferingvars.no2000} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >₹500 x</span>
                            <input ref={editedSundayOfferingrefs.no500} name="no500" type="number" defaultValue={editedSundayOfferingvars.no500} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >₹200 x</span>
                            <input ref={editedSundayOfferingrefs.no200} name="no200" type="number" defaultValue={editedSundayOfferingvars.no200} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >₹100 x</span>
                            <input ref={editedSundayOfferingrefs.no100} name="no100" type="number" defaultValue={editedSundayOfferingvars.no100} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >₹50 x</span>
                            <input ref={editedSundayOfferingrefs.no50} name="no50" type="number" defaultValue={editedSundayOfferingvars.no50} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >₹20 x</span>
                            <input ref={editedSundayOfferingrefs.no20} name="no20" type="number" defaultValue={editedSundayOfferingvars.no20} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6" >
                        
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >₹10 x</span>
                            <input ref={editedSundayOfferingrefs.no10} name="no10" type="number" defaultValue={editedSundayOfferingvars.no10} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >COINS TOTAL :</span>
                            <input ref={editedSundayOfferingrefs.coins_total} name="coins_total" type="number" defaultValue={editedSundayOfferingvars.coins_total} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >TOTAL :</span>
                            <input ref={editedSundayOfferingrefs.offerings_total} name="coins_total" type="text" defaultValue={editedSundayOfferingvars.offerings_total} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" disabled/>
                        </div>
                        <div className=" mb-3 px-3 " >
                        <Alert variant="success" show={updateSuccessAlert} onClose={()=>{setUpdateSuccessAlert(false)}} dismissible>
                            Record Updated successfully!
                        </Alert>
                    </div>
                        <div className=" mb-3 px-3" >
                            <button className="btn btn-primary" type="button" onClick={updateSundayOfferingsHandler} >Submit</button>
                            <Link to="/treasury/view-sundayofferings"><button className="btn btn-secondary float-end" type="button" >Back</button></Link>
                        </div>
                        <div className="mb-3 px-3">
                            {/* <Link to="/treasury/view-sundayofferings"><button className="btn btn-primary" type="button" >view</button></Link> */}
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
}