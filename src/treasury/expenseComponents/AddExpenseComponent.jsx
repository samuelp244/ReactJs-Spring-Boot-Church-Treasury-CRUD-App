import React, {useState} from "react";
import "../treasury.css"
import ExpenseService from "../services/ExpenseService";
import {Alert} from "react-bootstrap"
import {Link} from "react-router-dom";


function AddExpenseComponent(){
    const [expense_date,setExpense_date] = useState("");
    const [expense_church, setExpense_church] = useState("DEFAULT");
    const [expense_amount, setExpense_amount] = useState("");
    const [billing_id, setBilling_id] = useState("");
    const [expense_remarks, setExpense_remarks] = useState("");

    const[successAlert,setSuccessAlert] = useState(false);
    const[failureAlert,setFailureAlert] = useState(false);

    function addExpenseHandler(e){
        e.preventDefault();
        let expenseData = {
            expense_date:expense_date,
            expense_church:expense_church,
            expense_amount:expense_amount,
            billing_id:billing_id,
            expense_remarks:expense_remarks
        };
        ExpenseService.addExpence(expenseData).then((res)=>{
            if(res.data==="OK"){
                
                setSuccessAlert(true);
                setTimeout(() => {
                    setSuccessAlert(false)
                }, 2000);
                // useEffect(()={
                //     setTimeout(() => {
                //         setSuccessAlert(false)
                //     }, 3000);
                // }[])
                setExpense_date("");
                setExpense_church("DEFAULT");
                setExpense_amount("");
                setBilling_id("");
                setExpense_remarks("");
            }else if(res.data==="Bad Request"){
                setFailureAlert(true);
                setTimeout(() => {
                    setFailureAlert(false)
                }, 2000);
            } 
            console.log(res);
        });
        
    }
    

    function changeExpenseDateHandler(e){
        setExpense_date(e.target.value)
    }
    function changeExpenseChurchHandler(e){
        setExpense_church(e.target.value)
    }
    function changeExpenseAmountHandler(e){
        setExpense_amount(e.target.value)
    }
    function changeBillingIdHandler(e){
        setBilling_id(e.target.value)
    }
    function changeExpenseRemarksHandler(e){
        setExpense_remarks(e.target.value)
    }
    

    return (
        <div className="main-container container" >
            <div className="expense-container shadow p-3 mb-5 bg-white" >
                <form className="needs-validation" noValidate autoComplete="off">
                <div className="text-center mb-3 mt-2">
                    <h2>EXPENSES</h2>
                </div>
                    <div className="input-group mb-3 px-3">
                        <label htmlFor="expense_date" className="input-group-text" >Date </label>
                        <input type="date" id="expense_date" value={expense_date} onChange={changeExpenseDateHandler} className="form-control" required/>
                        <div className="invalid-feedback">
                            Please input a Date.
                        </div>
                    </div>
                    <div className="input-group mb-3 px-3">
                        <label htmlFor="expense_church" className="input-group-text" >Church Name </label>
                        <select  id="expense_church" value={expense_church} onChange={changeExpenseChurchHandler} className="form-select" required>
                            <option value="DEFAULT" disabled>select church</option>
                            <option value="BEERSHEBA">BEERSHEBA</option>
                            <option value="HOUSE_OF_BEATITUDES">HOUSE OF BEATITUDES</option>
                            <option value="ELIEM">ELIEM</option>
                            <option value="BETHEL">BETHEL</option>
                            <option value="BETHANI">BETHANI</option>
                            <option value="NEW_JERUSALEM">NEW JERUSALEM</option>
                            <option value="REHABOTH">REHABOTH</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid Church Name.
                        </div>
                    </div>
                    <div className="input-group mb-3 px-3">
                        <label htmlFor="expense_amount" className="input-group-text" >Amount(₹)</label>
                        <input type="text" id="expense_amount" value={expense_amount} onChange={changeExpenseAmountHandler} className="form-control" placeholder="₹0.00" required/>
                        <div className="invalid-feedback">
                            Please input the Amount.
                        </div>
                    </div>
                    <div className="input-group mb-3 px-3">
                        <label htmlFor="billing_id" className="input-group-text" >Billing ID </label>
                        <input type="text" id="billing_id" value={billing_id} onChange={changeBillingIdHandler} placeholder="0" className="form-control" required/>
                        <div className="invalid-feedback">
                            Please input the Billing Id.
                        </div>
                    </div>
                    <div className="input-group mb-3 px-3">
                        <label htmlFor="expense_remarks" className="input-group-text" >Remarks </label>
                        <input type="text" id="expense_remarks" value={expense_remarks} onChange={changeExpenseRemarksHandler} placeholder="Expense" className="form-control" required/>
                        <div className="invalid-feedback">
                            Please input expense Remarks.
                        </div>
                    </div>
                    <div className=" mb-3 px-3 " >
                        <Alert variant="success" show={successAlert} onClose={()=>{setSuccessAlert(false)}} dismissible>
                            Record Added successfully!
                        </Alert>
                        <Alert variant="danger" show={failureAlert} onClose={()=>{setFailureAlert(false)}} dismissible>
                            Record Not Added! please check the inputs!
                        </Alert>
                    </div>
                    <div className=" mb-3 px-3 " >
                        <button className="btn btn-primary"  type="button" onClick={(e)=>{addExpenseHandler(e)}}>Submit</button>
                        <Link to="/treasury"><button className="btn btn-secondary float-end" type="button" >Back</button></Link>
                    </div>
                    <div className="mb-3 px-3" >
                        <Link to="/treasury/view-expenses" ><button className="btn btn-primary" type="button" >view</button></Link>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default AddExpenseComponent;