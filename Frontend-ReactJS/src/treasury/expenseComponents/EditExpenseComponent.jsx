import React, {useState} from "react";
import "../treasury.css"
import ExpenseService from "../services/ExpenseService";
import {Alert} from "react-bootstrap"
import {Link,useLocation} from "react-router-dom";

function EditExpenseComponent(){
    const location = useLocation();

    // const [expense_id, setExpense_id] = useState(location.state.expense_id);
    const [editedExpense_date,setEditedExpense_date] = useState(location.state.expense_date);
    // const [editedexpense_church, setEditedExpense_church] = useState(location.state.church_name);
    const [editedexpense_amount, setEditedExpense_amount] = useState(location.state.expense_amount);
    const [editedbilling_id, setEditedBilling_id] = useState(location.state.expense_billing_id);
    const [editedexpense_remarks, setEditedExpense_remarks] = useState(location.state.expense_remarks);
    
    const [updateSuccessAlert,setUpdateSuccessAlert] = useState(false);
    
    function changeExpenseDateHandler(e){
        setEditedExpense_date(e.target.value)
    }
    function changeExpenseAmountHandler(e){
        setEditedExpense_amount(e.target.value)
    }
    function changeBillingIdHandler(e){
        setEditedBilling_id(e.target.value)
    }
    function changeExpenseRemarksHandler(e){
        setEditedExpense_remarks(e.target.value)
    }

    function updateExpenseHandler(e){
        e.preventDefault();
        let expenseData = {
            expense_id:location.state.expense_id,
            expense_date:editedExpense_date,
            expense_church:location.state.church_name,
            expense_amount:''+editedexpense_amount,
            billing_id:editedbilling_id,
            expense_remarks:editedexpense_remarks
        };
        // const editParams = { "id":expense_id, "church_name":editedexpense_church};
        console.log(expenseData)
        ExpenseService.editExpense(expenseData).then((res)=>{
            if(res.data==="OK"){
                setUpdateSuccessAlert(true)
                setTimeout(() => {
                    setUpdateSuccessAlert(false)
                }, 2000);
            }
            console.log(res);
        });
        // window.location.reload();
    }

    return (
        <div className="main-container container" >
            
            <div className="expense-container shadow p-3 mb-5 bg-white" >
                <form>
                <div className="text-center mb-3 mt-2">
                    <h2>UPDATE EXPENSE</h2>
                </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Date </span>
                        <input type="date" name="expense_date" value={editedExpense_date} onChange={changeExpenseDateHandler} className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Church Name </span>
                        <select  name="expense_church" value={location.state.church_name} className="form-select" disabled>
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
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Amount(₹)</span>
                        <input type="text" name="expense_amount" value={editedexpense_amount} onChange={changeExpenseAmountHandler} className="form-control" placeholder="₹0.00" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Billing ID </span>
                        <input type="text" name="billing_id" value={editedbilling_id} onChange={changeBillingIdHandler} placeholder="0" className="form-control"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >Remarks </span>
                        <input type="text" name="expense_remarks" value={editedexpense_remarks} onChange={changeExpenseRemarksHandler} placeholder="Expense" className="form-control" />
                    </div>
                    <div className=" mb-3 px-3 " >
                        <Alert variant="success" show={updateSuccessAlert} onClose={()=>{setUpdateSuccessAlert(false)}} dismissible>
                            Record Updated successfully!
                        </Alert>
                    </div>
                    <div className="#" >
                        <button className="btn btn-primary" type="button" onClick={updateExpenseHandler}>Submit</button>
                        <Link to="/treasury/view-expenses"><button className="btn btn-secondary float-end" type="button" >Back</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditExpenseComponent;