import React, {useState} from "react";
import "../treasury.css"
import SpecialOfferingService from "../services/SpecialOfferingsService"
import {Alert} from "react-bootstrap"
import {Link,useLocation} from 'react-router-dom';

export default function EditSpecialOfferingComponent(){
    const location = useLocation();

    // const [splOffering_id, setSplOffering_id] = useState(location.state.splOffering_id)
    const [editedSplOffering_date,setEditedSplOffering_date] = useState(location.state.splOffering_date);
    // const [editedSplOffering_church, setEditedSplOffering_church] = useState(location.state.splOffering_church);
    const [editedSplOffering_amount, setEditedSplOffering_amount] = useState(location.state.splOffering_amount);
    const [editedSplOffering_from, setEditedSplOffering_from] = useState(location.state.splOffering_from);

    const [updateSuccessAlert,setUpdateSuccessAlert] = useState(false);
    
    const changeSplofferingDateHandler =(e)=>{
        setEditedSplOffering_date(e.target.value);
    }
    const changeSplofferingAmountHandler =(e)=>{
        setEditedSplOffering_amount(e.target.value);
    }
    const changeSplofferingfromHandler =(e)=>{
        setEditedSplOffering_from(e.target.value);
    }



    const updateSplOfferingHandler = (e)=>{
        e.preventDefault();
        let splOfferingData = {
            specialOffering_id:location.state.splOffering_id,
            specialOffering_date:editedSplOffering_date,
            specialOffering_church:location.state.splOffering_church,
            specialOffering_amount:''+editedSplOffering_amount,
            specialOffering_from:editedSplOffering_from
        };
        SpecialOfferingService.editSpecialOffering(splOfferingData).then(res=>{
            if(res.data==="OK"){
                setUpdateSuccessAlert(true)
                setTimeout(() => {
                    setUpdateSuccessAlert(false)
                }, 2000);
            }
            console.log(res);
        })
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
                        <input type="date" name="splOffering_date" value={editedSplOffering_date} onChange={changeSplofferingDateHandler} className="form-control" />
                    </div>
                    <div className="input-group mb-3 px-3">
                        <span className="input-group-text" >Church Name </span>
                        <select  name="splOffering_church" value={location.state.splOffering_church} className="form-select" disabled>
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
                        <input type="text" name="splOffering_amount" value={editedSplOffering_amount} onChange={changeSplofferingAmountHandler} className="form-control" placeholder="₹0.00" required/>
                    </div>
                    <div className="input-group mb-3 px-3">
                        <span className="input-group-text" >FROM </span>
                        <input type="text" name="splOffering_from" value={editedSplOffering_from} onChange={changeSplofferingfromHandler} className="form-control" placeholder="from" required/>
                    </div>
                    <div className=" mb-3 px-3 " >
                        <Alert variant="success" show={updateSuccessAlert} onClose={()=>{setUpdateSuccessAlert(false)}} dismissible>
                            Record Updated successfully!
                        </Alert>
                    </div>
                    <div className="mb-3 px-3" >
                        <button className="btn btn-primary" type="button" onClick={(e)=>{updateSplOfferingHandler(e)}}>Submit</button>
                        <Link to="/treasury/view-specialofferings"><button className="btn btn-secondary float-end" type="button" >Back</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}