
import React, {useState,createRef} from "react";
import "../treasury.css"
import SundayOfferingService from "../services/SundayOfferingsService";
import {Alert} from "react-bootstrap";
import {Link} from "react-router-dom";


export default function AddSundayOfferingComponents(){
    const[successAlert,setSuccessAlert] = useState(false);
    const[failureAlert,setFailureAlert] = useState(false);

    const [printDate,setPrintDate] = useState('');
    const printDateChangeHandler = (e)=> setPrintDate(e.target.value);
    const printbuttonHandler = (e)=>{
        e.preventDefault();
        // console.log(printDate)
        SundayOfferingService.printSundayOfferings(printDate).then(res=>{
            console.log(res)
        })
    }
    
    const [sundayOfferingrefs] = useState({
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
    const [sundayOfferingvars] = useState({
        offering_date : '',
        offering_church:'DEFAULT',
        no2000:0,
        no500:0,
        no200:0,
        no100:0,
        no50:0,
        no20:0,
        no10:0,
        coins_total:0,
        offerings_total:0,
    })

    const sundayOfferingsChangeHandler=(e)=>{
        const {name,value} = e.target;
        sundayOfferingvars[name]=value;

        const no2000 = parseInt(sundayOfferingrefs.no2000.current.value,10);
        const no500= parseInt(sundayOfferingrefs.no500.current.value,10);
        const no200= parseInt(sundayOfferingrefs.no200.current.value,10);
        const no100= parseInt(sundayOfferingrefs.no100.current.value,10);
        const no50= parseInt(sundayOfferingrefs.no50.current.value,10);
        const no20= parseInt(sundayOfferingrefs.no20.current.value,10);
        const no10= parseInt(sundayOfferingrefs.no10.current.value,10);
        const coins_total= parseInt(sundayOfferingrefs.coins_total.current.value,10);

        sundayOfferingrefs.offerings_total.current.value = no2000*2000+no500*500+no200*200+no100*100+no50*50+no20*20+no10*10+coins_total;

    }

    const addSundayOfferingsHandler = (e)=>{
        e.preventDefault();
        let sundayOfferingsData = {
            sundayOffering_date:sundayOfferingrefs.offering_date.current.value,
            sundayOffering_church : sundayOfferingrefs.offering_church.current.value,
            sundayOffering_no2000: sundayOfferingrefs.no2000.current.value,
            sundayOffering_no500: sundayOfferingrefs.no500.current.value,
            sundayOffering_no200: sundayOfferingrefs.no200.current.value,
            sundayOffering_no100: sundayOfferingrefs.no100.current.value,
            sundayOffering_no50: sundayOfferingrefs.no50.current.value,
            sundayOffering_no20: sundayOfferingrefs.no20.current.value,
            sundayOffering_no10:sundayOfferingrefs.no10.current.value,
            sundayOffering_coinsTotal: sundayOfferingrefs.coins_total.current.value,
            sundayOffering_Total: sundayOfferingrefs.offerings_total.current.value
        }
        console.log(sundayOfferingsData)
        SundayOfferingService.addSundayOffering(sundayOfferingsData).then((res)=>{
            if(res.data==="OK"){
                setSuccessAlert(true);
                setTimeout(() => {
                    setSuccessAlert(false)
                }, 2200);

                sundayOfferingrefs.offering_date.current.value='';
                sundayOfferingrefs.offering_church.current.value ='DEFAULT';
                sundayOfferingrefs.no2000.current.value = 0;
                sundayOfferingrefs.no500.current.value = 0;
                sundayOfferingrefs.no200.current.value = 0;
                sundayOfferingrefs.no100.current.value = 0;
                sundayOfferingrefs.no50.current.value = 0;
                sundayOfferingrefs.no20.current.value = 0;
                sundayOfferingrefs.no10.current.value = 0;
                sundayOfferingrefs.coins_total.current.value = 0;
                sundayOfferingrefs.offerings_total.current.value = 0;

            }else if(res.data==="Bad Request"){
                setFailureAlert(true);
                setTimeout(() => {
                    setFailureAlert(false)
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
                        <h2>SUNDAY OFFERINGS</h2>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 ">
                        <div className=" input-group mb-3 px-3">
                            <span className="input-group-text" >Date </span>
                            <input ref={sundayOfferingrefs.offering_date} type="date" name="offering_date" defaultValue={sundayOfferingvars.offering_date} onChange={sundayOfferingsChangeHandler} className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >Church Name </span>
                            <select ref={sundayOfferingrefs.offering_church} name="offering_church" defaultValue={sundayOfferingvars.offering_church} onChange={sundayOfferingsChangeHandler} className="form-select" >
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
                            <input ref={sundayOfferingrefs.no2000} name="no2000" type="number" defaultValue={sundayOfferingvars.no2000} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >₹500 x</span>
                            <input ref={sundayOfferingrefs.no500} name="no500" type="number" defaultValue={sundayOfferingvars.no500} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >₹200 x</span>
                            <input ref={sundayOfferingrefs.no200} name="no200" type="number" defaultValue={sundayOfferingvars.no200} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >₹100 x</span>
                            <input ref={sundayOfferingrefs.no100} name="no100" type="number" defaultValue={sundayOfferingvars.no100} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >₹50 x</span>
                            <input ref={sundayOfferingrefs.no50} name="no50" type="number" defaultValue={sundayOfferingvars.no50} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >₹20 x</span>
                            <input ref={sundayOfferingrefs.no20} name="no20" type="number" defaultValue={sundayOfferingvars.no20} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6" >
                        
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >₹10 x</span>
                            <input ref={sundayOfferingrefs.no10} name="no10" type="number" defaultValue={sundayOfferingvars.no10} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >COINS TOTAL :</span>
                            <input ref={sundayOfferingrefs.coins_total} name="coins_total" type="number" defaultValue={sundayOfferingvars.coins_total} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" />
                        </div>
                        <div className="input-group mb-3 px-3">
                            <span className="input-group-text" >TOTAL :</span>
                            <input ref={sundayOfferingrefs.offerings_total} name="coins_total" type="text" defaultValue={sundayOfferingvars.offerings_total} onChange={sundayOfferingsChangeHandler} className="form-control" placeholder="0" disabled/>
                        </div>
                        <div className=" mb-3 px-3 " >
                            <Alert variant="success" show={successAlert} onClose={()=>{setSuccessAlert(false)}} dismissible>
                                Record Added successfully!
                            </Alert>
                            <Alert variant="danger" show={failureAlert} onClose={()=>{setFailureAlert(false)}} dismissible>
                            Record Not Added! please check the inputs!
                            </Alert>
                        </div>
                        <div className=" mb-3 px-3" >
                            <button className="btn btn-primary" type="button" onClick={addSundayOfferingsHandler} >Submit</button>
                            <Link to="/treasury"><button className="btn btn-secondary float-end" type="button" >Back</button></Link>
                        </div>
                        {/* <div className="mb-3 px-3">
<p>For Printout</p>
                        </div> */}
                        <div className=" input-group mb-3 px-3">
                            <span className="input-group-text" >Date </span>
                            <input type="date" name="offering_date" value={printDate} onChange={printDateChangeHandler} className="form-control" />
                        </div>
                        
                        <div className="mb-3 px-3">
                            <Link to="/treasury/view-sundayofferings"><button className="btn btn-primary" type="button" >view</button></Link>
                            <button className="btn btn-primary float-end" type="button" onClick={(e)=>{printbuttonHandler(e)}} >Print</button>
                        </div>
                        
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
}