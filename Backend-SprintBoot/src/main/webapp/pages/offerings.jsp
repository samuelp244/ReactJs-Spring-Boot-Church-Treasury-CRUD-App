<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<title>Sunday Offerings</title>
	<style><%@include file="/static/css/style.css"%></style>
</head>
<body>
	<section>
            <div class="offeringscontainer">
                <h2>SUNDAY OFFERINGS</h2>
                <form action="/submit_offerings" method="post" class="offerings-form" >
                    <div class="offerings-form">
                        <label for="date">Date:</label>
                        <input type="date" id="date"  name="offering_date" required>  
                    </div>
                    <div class="offerings-form">
                        <label for="church">Church Name:</label>
                        <select name="church" id="church">
                        	<option value="BEERSHEBA">BEERSHEBA</option>
                            <option value="HOUSE OF BEATITUDES">HOUSE OF BEATITUDES</option>
                            <option value="ELIEM">ELIEM</option>
                            <option value="BETHEL">BETHEL</option>
                            <option value="BETHANI">BETHANI</option>
                            <option value="NEW JERUSALEM">NEW JERUSALEM</option>
                            <option value="REHABOTH">REHABOTH</option>
                        </select>
                    </div>
                    <div class="offerings-form">
                        <label >₹2000 x </label>   
                        <input type="text" placeholder="0"  name="2000" value="0"/>  
                    </div><div class="offerings-form">
                        <label >₹500 x </label>   
                        <input type="text" placeholder="0"  name="500" value="0"/>  
                    </div><div class="offerings-form">
                        <label >₹200 x </label>   
                        <input type="text" placeholder="0"  name="200" value="0"/>  
                    </div><div class="offerings-form">
                        <label >₹100 x </label>   
                        <input type="text" placeholder="0"  name="100" value="0"/>  
                    </div><div class="offerings-form">
                        <label >₹50 x </label>   
                        <input type="text" placeholder="0"  name="50" value="0"/>   
                    </div><div class="offerings-form">
                        <label >₹20 x </label>   
                        <input type="text" placeholder="0"  name="20" value="0"/>   
                    </div><div class="offerings-form">
                        <label >₹10 x </label>   
                        <input type="text" placeholder="0"  name="10" value="0"/> 
                    </div><div class="offerings-form">
                        <label >COINS TOTAL :</label>   
                        <input type="text" placeholder="0"  name="COINS" value="0"/> 
                    </div>
                    <button type="button" class="back-btn">Back</button>
                    <button type="submit" class="submit-btn">Submit</button>
                </form>
                <br><br>
                <br><br>
                
                <form action="#" class="#" method="post">
                    <div class="form-group">
                        <label for="date">Offerings Date:</label>
                        <input type="date" id="date"  name="date" required>  
                    </div>
                    <button type="button" class="Download-btn">Download</button>
                </form>
                
                <button type="button" class="logout-btn">Logout</button>  

            </div>   
        </section>  
        <!-- <script src="static/js/index.js"></script> -->
        <script>
        	const backBtn = document.getElementsByClassName("back-btn")[0];
        	backBtn.addEventListener("click", ()=>{
        	window.location.href = "/dashboard";
        		});
        </script>
</body>
	
</html>