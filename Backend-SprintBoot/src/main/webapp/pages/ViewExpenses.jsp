<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@page import="java.util.ArrayList"%>
<%@page import="com.church.treasuryApp.ExpensesDAO"%>
<%@page import="org.springframework.ui.Model"%>
<%@page import="javax.servlet.http.HttpServletRequest"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>View Expenses</title>  
        <style><%@include file="/static/css/style.css"%></style>
    </head>    
    <body>    
        <h1>TREASURY</h1>
        
        <form action="processViewExpenses" class="expenses-form" method="post">
	        <div class="form-group">
	              <label  for="expense_from_date">From Date:</label>
	              <input type="date" id="date"  name="expense_from_date" required>
	        </div>
	        <div class="form-group">
	              <label  for="expense_to_date">To Date:</label>
	              <input type="date" id="date"  name="expense_to_date" required>
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
	       <button type="submit" class="submit-btn">Submit</button>
        </form>
            <h2>EXPENSES</h2>
            
			<table>
			  <thead>
			    <tr>
			      <th>Date</th>
			      <th>Amount</th>
			      <th>Billing ID</th>
			      <th>Remarks</th>
			    </tr>
			  </thead>
			  <tbody>
			  <%
			  if(session.getAttribute("expensesDaoList") != null){
			  ArrayList<ExpensesDAO> wow = (ArrayList<ExpensesDAO>)session.getAttribute("expensesDaoList"); 
			  %>
			  <%if (wow != null){ %>
			  <% for(int row=0; row < wow.size(); row++){ %>
			    <tr>
			      <td><%=wow.get(row).getExpense_date() %></td>
			      <td><%=wow.get(row).getExpense_amount() %></td>
			      <td><%=wow.get(row).getExpense_billingID() %></td>
			      <td><%=wow.get(row).getExpense_remarks() %></td>
			      <%if(session.getAttribute("username").equals("Lakshya")){ %>
			      <td><a href="/editExpenses?userID=<%= wow.get(row).getExpense_id()%>&churchName=<%= wow.get(row).getExpense_churchName()%>">EDIT</a></td>
			      <td><a  href="/deleteExpenses?userID=<%= wow.get(row).getExpense_id()%>&churchName=<%= wow.get(row).getExpense_churchName()%>">DELETE</a></td>
			      <%} %>
			    </tr>
			    <%} %>
			    <%}} %>
			  </tbody>
			</table>      
			<%session.removeAttribute("expensesDaoList"); %>  
			<button type="button" class="back-btn">Back</button>
        	<script>
        	
        	const backBtn = document.getElementsByClassName("back-btn")[0];
        	backBtn.addEventListener("click", ()=>{
        	window.location.href = "/expenses";
        		});
   
        </script>                    
</body>
</html>