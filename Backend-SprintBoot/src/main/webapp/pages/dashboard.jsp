<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<title> treasury </title>
	<style><%@include file="/static/css/style.css"%></style>
</head>
<body>
<h1><%=request.getAttribute("wow") %></h1>
	<h2>Thanks for logging in, ${username} !</h2>
	<h2>Welcome to Treasury DashBoard</h2>
	<section>
            <div class="trcontainer" > 
                <form action="#" class="treasury-form" method="post">
                    <div class="treasury-btns">
                        <button type="button" class="offerings-btn">SUNDAY OFFERINGS</button>
                        <button type="button" class="expenses-btn">EXPENSES</button>
                        <button type="button" class="splofferings-btn">SPECIAL OFFERINGS</button>
                    </div>
                    <button type="button" class="logout-btn">Logout</button>
                </form>
            
            </div>   
        </section>
        
    <script src="static/js/index.js"></script>
</body>
</html>