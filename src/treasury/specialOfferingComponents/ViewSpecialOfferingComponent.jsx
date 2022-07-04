/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import "../treasury.css"
import SpecialOfferingService from "../services/SpecialOfferingsService"
import {Alert} from "react-bootstrap";

import {Link,useNavigate} from 'react-router-dom';


export default function ViewSpecialOfferingComponent(props){

    const [viewFrom_date,setFrom_date] = useState("");
    const [viewTo_date,setTo_date] = useState("");
    const [viewChurch_name,setChurch_name] = useState("DEFAULT");
    const [specialOfferings,setSpecialOfferings] = useState([]);

    const[noRecordAlert,setNoRecordAlert] = useState(false);


    function viewSubmitHandler(e){
        e.preventDefault();
        let viewParams = {
            from_date:viewFrom_date,
            to_date:viewTo_date,
            church_name:viewChurch_name,
        }
        // console.log(viewParams)
        SpecialOfferingService.viewSpecialOfferings(viewParams).then(res=>{
            if(res.data.SpecialOfferings){
                setSpecialOfferings(res.data.SpecialOfferings)
            }else{
                setNoRecordAlert(true);
                setTimeout(() => {
                    setNoRecordAlert(false)
                }, 2000);
                setSpecialOfferings([]);
            }
        })
    }
    const navigate = useNavigate();

    const toEditPage=(id,date,amount,from)=>{
        navigate("edit-splOffering",{
            state:{
                splOffering_id:id,
                splOffering_date:date,
                splOffering_church:viewChurch_name,
                splOffering_amount:amount,
                splOffering_from:from
            }
        })
    }
    // toEditPage(splOffering.splOffering_id,splOffering.splOffering_data,splOffering.splOffering_amount,splOffering.splOffering_from)
    const deleteSplOfferingHandler =(splOfferingId)=>{
        let delSplOfferingParams = {
            params:{
                id:splOfferingId,
                church_name:viewChurch_name
            }
        }
        // console.log(delSplOfferingParams)
        SpecialOfferingService.deleteSpecialOffering(delSplOfferingParams).then(res=>{
            console.log(res)
            setSpecialOfferings(specialOfferings.filter(splOffering=>splOffering.specialOffering_id !== splOfferingId))
        })
    }


    function changefrom_dateHandler(e){
        setFrom_date(e.target.value);
    }
    function changeto_dateHandler(e){
        setTo_date(e.target.value);
    }
    function changeViewExpenseChurchHandler(e){
        setChurch_name(e.target.value);
    }

    return (
        <>
            <div className='container submit-container shadow p-3 mb-5 bg-white'>
                <form>
                    <div className="input-group  input-group-sm mb-3 px-3">
                        <span className="input-group-text" >From Date</span>
                        <input type="date" name="from_date" value={viewFrom_date} onChange={changefrom_dateHandler} className="form-control" />
                    </div>
                    <div className="input-group input-group-sm mb-3 px-3">
                        <span className="input-group-text">To Date</span>
                        <input type="date" name="to_date" value={viewTo_date} onChange={changeto_dateHandler} className="form-control" />
                    </div>
                    <div className="input-group  input-group-sm mb-3 px-3">
                        <span className="input-group-text" >Church Name </span>
                        <select  name="church_name" value={viewChurch_name} onChange={changeViewExpenseChurchHandler} className="form-select" >
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
                    <div className=" mb-3 px-3 " >
                        <Alert variant="danger" show={noRecordAlert} onClose={()=>{setNoRecordAlert(false)}} dismissible>
                            No Records Found!
                        </Alert>
                    </div>
                    <div className="mb-3 px-3">
                        <button  className="btn btn-primary btn-sm" type="button" onClick={viewSubmitHandler}>Submit</button>  
                        <Link to="/treasury/add-specialofferings/"><button className="btn btn-secondary btn-sm float-end" type="button" >Back</button></Link>
                    </div>                      
                </form>
            </div>
            <div className='container shadow p-3 mb-5 bg-white'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>Date</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'>From</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        specialOfferings.map(
                            splOffering=>
                            <tr key = {splOffering.specialOffering_id} >
                                <td>{splOffering.specialOffering_date}</td>
                                <td>{splOffering.specialOffering_amount}</td>
                                <td>{splOffering.specialOffering_from}</td>
                                <td><button onClick={()=>{toEditPage(splOffering.specialOffering_id,splOffering.specialOffering_date,splOffering.specialOffering_amount,splOffering.specialOffering_from)}} className='btn btn-sm btn-warning'>Edit</button></td>
                                <td><button onClick={()=>{deleteSplOfferingHandler(splOffering.specialOffering_id)}} className='btn btn-sm btn-danger'>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </>
    );
}