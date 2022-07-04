<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Expenses Page</title>  
        <style><%@include file="/static/css/style.css"%></style>
    </head>    
    <body>    
    <h1><%=request.getAttribute("wow") %></h1>
        <h1>TREASURY</h1>
        
        <section>
            <div class="expensescontainer ">
                <h2>EXPENSES</h2>
                <form action="processAddExpenses" class="expenses-form" method="post">
                    <div class="form-group">
                        <label  for="expense_date">Date:</label>
                        <input type="date" id="date"  name="expense_date" required>
                    </div>
                    <div class="form-group">
                        <label  for="expense_church">Church Name:</label>
                        <select name="expense_church" id="church">
                        	<option value="BEERSHEBA">BEERSHEBA</option>
                            <option value="HOUSE_OF_BEATITUDES">HOUSE OF BEATITUDES</option>
                            <option value="ELIEM">ELIEM</option>
                            <option value="BETHEL">BETHEL</option>
                            <option value="BETHANI">BETHANI</option>
                            <option value="NEW_JERUSALEM">NEW JERUSALEM</option>
                            <option value="REHABOTH">REHABOTH</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label >Amount(₹):</label>   
                        <input type="text" placeholder="₹0.00"  name="expense_amount" required>  
                    </div>
                    <div class="form-group">
                        <label >Billing ID :</label>   
                        <input type="text" placeholder="0"  name="billing_id"/>  
                    </div>
                    <div class="form-group">
                        <label >Remarks :</label>   
                        <input type="text" placeholder="Expense"  name="expense_remarks"/> 
                    </div>
                    
                    <button type="submit" class="submit-btn">Submit</button>
                </form>
                
                <button type="button" class="back-btn">Back</button>
                <button type="button" class="logout-btn">Logout</button>
                <button type="button" class="view-btn">View</button>
                
                  
            </div>
        </section>  
        <script>
        	const backBtn = document.getElementsByClassName("back-btn")[0];
        	backBtn.addEventListener("click", ()=>{
        	window.location.href = "/dashboard";
        		});
        	
        	const viewBtn = document.getElementsByClassName("view-btn")[0];
        	viewBtn.addEventListener("click", ()=>{
        	window.location.href = "/viewExpenses";
        	 	});
        	
        </script>
             
</body>
</html>