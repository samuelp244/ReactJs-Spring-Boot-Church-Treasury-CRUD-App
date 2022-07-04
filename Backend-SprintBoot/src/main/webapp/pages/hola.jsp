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
			  <% for(int row=1; row < wow.size(); row++){ %>
			    <tr>
			      <td><%=wow.get(row).getExpense_date() %></td>
			      <td><%=wow.get(row).getExpense_amount() %></td>
			      <td><%=wow.get(row).getExpense_billingID() %></td>
			      <td><%=wow.get(row).getExpense_remarks() %></td>
			    </tr>
			    <%} %>
			    <%}} %>
			  </tbody>
			</table>                            
</body>
</html>