import React, {useState} from "react";
import "../treasury.css"
import SundayOfferingsService from "../services/SundayOfferingsService";
import {Alert} from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';


export default function ViewSundayOfferingComponent(props){

    const [viewFrom_date,setFrom_date] = useState("");
    const [viewTo_date,setTo_date] = useState("");
    const [viewChurch_name,setChurch_name] = useState("DEFAULT");
    const [sundayOfferings,setSundayOfferings] = useState([]);

    const[noRecordAlert,setNoRecordAlert] = useState(false);

    function viewSubmitHandler(e){
        e.preventDefault();
        let viewParams = {
            from_date:viewFrom_date,
            to_date:viewTo_date,
            church_name:viewChurch_name,
        }
        SundayOfferingsService.viewSundayOfferings(viewParams).then(res=>{
            if(res.data.SundayOfferings){
                setNoRecordAlert(false)
                setSundayOfferings(res.data.SundayOfferings)
            }else{
                setNoRecordAlert(true)
                setTimeout(() => {
                    setNoRecordAlert(false)
                }, 2000);
                setSundayOfferings([])
            }
        })
    }
    const navigate = useNavigate();
    
    const toEditPage=(id,date,no2000,no500,no200,no100,no50,no20,no10,coins_total,total)=>{
        navigate("edit-sundayOffering/",{
            state:{
                sundayOffering_id:id,
                sundayOffering_date:date,
                sundayOffering_churchname:viewChurch_name,
                no2000:no2000,
                no500:no500,
                no200:no200,
                no100:no100,
                no50:no50,
                no20:no20,
                no10:no10,
                coins_total:coins_total,
                total:total
            }
        })
    }
    const deleteSundayOfferingHandler = (sundayOfferingId)=>{
        let delSundayOfferingParams = {
            params:{
                id:sundayOfferingId,
                church_name:viewChurch_name
            }
        }
        SundayOfferingsService.deleteSundayOffering(delSundayOfferingParams).then(res=>{
            setSundayOfferings(sundayOfferings.filter(sundayOffering=>sundayOffering.sundayOffering_id !==sundayOfferingId))
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
                        <Link to="/treasury/add-sundayofferings/"><button className="btn btn-secondary btn-sm float-end" type="button" >Back</button></Link>
                    </div>
                                      
                </form>
            </div>
            <div className='container shadow p-3 mb-5 bg-white'>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope='col'>Date</th>
                            <th scope='col'>₹2000</th>
                            <th scope='col'>₹500</th>
                            <th scope='col'>₹200</th>
                            <th scope='col'>₹100</th>
                            <th scope='col'>₹50</th>
                            <th scope='col'>₹20</th>
                            <th scope='col'>₹10</th>
                            <th scope='col'>COINS</th>
                            <th scope="col">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sundayOfferings.map(
                                sundayOffering=>
                                <tr key={sundayOffering.sundayOffering_id} >
                                    <td>{sundayOffering.sundayOffering_date}</td>
                                    <td>{sundayOffering.sundayOffering_no2000}</td>
                                    <td>{sundayOffering.sundayOffering_no500}</td>
                                    <td>{sundayOffering.sundayOffering_no200}</td>
                                    <td>{sundayOffering.sundayOffering_no100}</td>
                                    <td>{sundayOffering.sundayOffering_no50}</td>
                                    <td>{sundayOffering.sundayOffering_no20}</td>
                                    <td>{sundayOffering.sundayOffering_no10}</td>
                                    <td>{sundayOffering.sundayOffering_coinsTotal}</td>
                                    <td>{sundayOffering.sundayOffering_Total}</td>
                                    <td><button onClick={()=>{toEditPage(sundayOffering.sundayOffering_id,sundayOffering.sundayOffering_date,sundayOffering.sundayOffering_no2000,sundayOffering.sundayOffering_no500,sundayOffering.sundayOffering_no200,sundayOffering.sundayOffering_no100,sundayOffering.sundayOffering_no50,sundayOffering.sundayOffering_no20,sundayOffering.sundayOffering_no10,sundayOffering.sundayOffering_coinsTotal,sundayOffering.sundayOffering_Total)}} className='btn btn-sm btn-warning'>Edit</button></td>
                                    <td><button onClick={()=>{deleteSundayOfferingHandler(sundayOffering.sundayOffering_id)}} className='btn btn-sm btn-danger'>Delete</button></td>
                                        
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </>
    );
}