import React, {useState} from "react";
import "../treasury.css"
import ExpenseService from '../services/ExpenseService';
import {Alert} from "react-bootstrap";

import {Link,useNavigate} from 'react-router-dom';


export default function ViewExpenseComponent(props){
    const [viewFrom_date,setFrom_date] = useState("");
    const [viewTo_date,setTo_date] = useState("");
    const [viewChurch_name,setChurch_name] = useState("DEFAULT");
    const [expenses, setExpenses] = useState([]);

    const[noRecordAlert,setNoRecordAlert] = useState(false);

    
    function viewSubmitHandler(e){
        e.preventDefault();
        let viewParams = {
            from_date:viewFrom_date,
            to_date:viewTo_date,
            church_name:viewChurch_name,
        }
        console.log(viewParams)
        ExpenseService.viewExpenses(viewParams).then((res)=>{
            if(res.data.Expenses){
            setExpenses(res.data.Expenses);
            }else{
                setNoRecordAlert(true);
                setTimeout(() => {
                    setNoRecordAlert(false)
                }, 2000);
                setExpenses([]);
            }
        });
    }

    const navigate = useNavigate();
    
    const toEditPage=(id,date,amount,billing_id,remarks)=>{
        navigate("edit-expense/",{
            state:{
                expense_id:id,
                expense_date:date,
                expense_amount:amount,
                church_name:viewChurch_name,
                expense_billing_id:billing_id,
                expense_remarks:remarks,
        }})
    }
    
     function deleteExpenseHandler(expenseId){
        let delExpenseParams = {
            params:{
                id:expenseId,
                church_name:viewChurch_name,
            }
        }
        ExpenseService.deleteExpense(delExpenseParams).then(res=>{
            setExpenses(expenses.filter(expense=>expense.expense_id !== expenseId))
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
        <div>
                <div className='container'>
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
                                <button  className="btn btn-primary btn-sm" type="button" onClick={(e)=>{viewSubmitHandler(e)}}>Submit</button>     
                                <Link to="/treasury/add-expenses/"><button className="btn btn-secondary btn-sm float-end" type="button" >Back</button></Link>
                            </div>              
                        </form>
                    </div>
                    
                    <div className='container shadow p-3 mb-5 bg-white'>
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th scope='col'>Date</th>
                                    <th scope='col'>Amount</th>
                                    <th scope='col'>Billing Id</th>
                                    <th scope='col'>Remarks</th>
                                    <th scope='col'>Edit</th>
                                    <th scope='col'>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    expenses.map(
                                        expense=>
                                        <tr key = {expense.expense_id} >
                                            <td>{expense.expense_date}</td>
                                            <td>{expense.expense_amount}</td>
                                            <td>{expense.expense_billingID}</td>
                                            <td>{expense.expense_remarks}</td>
                                            <td><button onClick={()=>{toEditPage(expense.expense_id,expense.expense_date,expense.expense_amount,expense.expense_billingID,expense.expense_remarks)}} className='btn btn-sm btn-warning'>Edit</button></td>
                                            <td><button onClick={()=>{deleteExpenseHandler(expense.expense_id)}} className='btn btn-sm btn-danger'>Delete</button></td>
                                        </tr>
                                    )   
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}