<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
  <%@page import="com.church.treasuryApp.ExpensesDAO"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Expenses Page</title>  
        <style><%@include file="/static/css/style.css"%></style>
    </head>    
    <body>    
    <%
    	ExpensesDAO expensesDao = (ExpensesDAO)session.getAttribute("expensesDao");
    	int id = expensesDao.getExpense_id();
    	String churchName = expensesDao.getExpense_churchName().toUpperCase();
    	String churchNameToBeShown = churchName.replace('_', ' ');
    	String date = expensesDao.getExpense_date();
    	Double amount = expensesDao.getExpense_amount(); 
    	String billing_id = expensesDao.getExpense_billingID();
    	String remarks = expensesDao.getExpense_remarks();
    %>
        <h1>TREASURY</h1>
        <section>
            <div class="expensescontainer ">
                <h2>EXPENSES</h2>
                <form action="processEditExpenses" class="expenses-form" method="post">
                	<input hidden value=<%=id %> type="text" name="id">
                    <div class="form-group">
                        <label  for="expense_date">Date:</label>
                        <input value=<%=date %> type="date" id="date"  name="expense_date" required>
                    </div>
                    <div class="form-group">
                        <label  for="expense_church">Church Name:</label>
                        <select name="expense_church" id="church" class="opts">                        	
                        	<option value="<%=churchName%>"><%=churchNameToBeShown%></option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label >Amount(₹):</label>   
                        <input type="text" value="<%=amount %>"  name="expense_amount" required>  
                    </div>
                    <div class="form-group">
                        <label >Billing ID :</label>   
                        <input type="text" value="<%=billing_id %>"  name="billing_id"/>  
                    </div>
                    <div class="form-group">
                        <label >Remarks :</label>   
                        <input type="text" value="<%=remarks %>"  name="expense_remarks"/> 
                    </div>
                    
                    <button type="submit" class="submit-btn">Update</button>
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