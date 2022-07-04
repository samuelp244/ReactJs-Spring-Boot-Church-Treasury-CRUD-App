<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<div align="center">
<h1>Login Form</h1>
<form action="login" method="post">
<table>
<tr> <td> User Name: </td><td><input type="text" name="username"></td></tr>
<tr> <td> Password: </td><td><input type="password" name="password"></td></tr>
<tr> <td>  </td><td><input type="submit" value="Login"></td></tr>
</table>
</form>
<button type="button" class="back-btn">Back</button>
</div>
<script>
        	const backBtn = document.getElementsByClassName("back-btn")[0];
        	backBtn.addEventListener("click", ()=>{
        	window.location.href = "/check";
        		});
        	
        </script>
</body>
</html>