import React, {useState} from "react";
import "../treasury.css"
import SpecialOfferingService from "../services/SpecialOfferingsService";
import {Alert} from "react-bootstrap";
import {Link} from "react-router-dom";


export default function AddSpecialOfferingComponent(){
    const [splOffering_date,setSplOffering_date] = useState('');
    const [splOffering_church, setSplOffering_church] = useState("DEFAULT");
    const [splOffering_amount, setSplOffering_amount] = useState("");
    const [splOffering_from, setSplOffering_from] = useState("");

    const[successAlert,setSuccessAlert] = useState(false);
    const[failureAlert,setFailureAlert] = useState(false);

    const addSplOfferingHandler=(e)=>{
        e.preventDefault();
        let splOfferingData = {
            specialOffering_date:splOffering_date,
            specialOffering_church:splOffering_church,
            specialOffering_amount:splOffering_amount,
            specialOffering_from:splOffering_from
        };
        // console.log(splOfferingData)
        SpecialOfferingService.addSpecialOffering(splOfferingData).then(res=>{
            if(res.data==="OK"){
                setSuccessAlert(true);
                setTimeout(() => {
                    setSuccessAlert(false)
                }, 2000);

                setSplOffering_date("");
                setSplOffering_church("DEFAULT");
                setSplOffering_amount("");
                setSplOffering_from("")
            }else if(res.data==="Bad Request"){
                setFailureAlert(true);
                setTimeout(() => {
                    setFailureAlert(false)
                }, 2000);
            } 
            console.log(res)
        })
        
    }
    const changeSplofferingDateHandler =(e)=>{
        setSplOffering_date(e.target.value);
    }
    const changeSplofferingChurchHandler =(e)=>{
        setSplOffering_church(e.target.value);
    }
    const changeSplofferingAmountHandler =(e)=>{
        setSplOffering_amount(e.target.value);
    }
    const changeSplofferingfromHandler =(e)=>{
        setSplOffering_from(e.target.value);
    }

    return (
        <div className="main-container container">
            <div className="splOffering-container shadow p-3 mb-5 bg-white">
                <form>
                    <div className="text-center mb-3 mt-2">
                        <h2>SPECIAL OFFERINGS</h2>
                    </div>
                    <div className="input-group mb-3 px-3">
                        <span className="input-group-text" >Date </span>
                        <input type="date" name="splOffering_date" value={splOffering_date} onChange={changeSplofferingDateHandler} className="form-control" />
                    </div>
                    <div className="input-group mb-3 px-3">
                        <span className="input-group-text" >Church Name </span>
                        <select  name="splOffering_church" value={splOffering_church} onChange={changeSplofferingChurchHandler} className="form-select" required>
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
                    <div className="input-group mb-3 px-3">
                        <span className="input-group-text" >Amount(₹)</span>
                        <input type="text" name="splOffering_amount" value={splOffering_amount} onChange={changeSplofferingAmountHandler} className="form-control" placeholder="₹0.00" required/>
                    </div>
                    <div className="input-group mb-3 px-3">
                        <span className="input-group-text" >FROM </span>
                        <input type="text" name="splOffering_from" value={splOffering_from} onChange={changeSplofferingfromHandler} className="form-control" placeholder="from" required/>
                    </div>
                    <div className=" mb-3 px-3 " >
                        <Alert variant="success" show={successAlert} onClose={()=>{setSuccessAlert(false)}} dismissible>
                            Record Added successfully!
                        </Alert>
                        <Alert variant="danger" show={failureAlert} onClose={()=>{setFailureAlert(false)}} dismissible>
                            Record Not Added! please check the inputs!
                        </Alert>
                    </div>
                    <div className="mb-3 px-3" >
                        <button className="btn btn-primary" type="button" onClick={(e)=>{addSplOfferingHandler(e)}}>Submit</button>
                        <Link to="/treasury"><button className="btn btn-secondary float-end" type="button" >Back</button></Link>
                    </div>
                    <div className="mb-3 px-3" >
                        <Link to="/treasury/view-specialofferings" ><button className="btn btn-primary" type="button" >view</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}