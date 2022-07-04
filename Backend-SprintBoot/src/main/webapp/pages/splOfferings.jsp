<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Special Offerings Page</title>  
        <style><%@include file="/static/css/style.css"%></style>
    </head>    
    <body>    
        <h1>TREASURY</h1>
        <section>
            <div class="splofferingscontainer">
                <h2>SPECIAL OFFERINGS</h2>
                <form action="/submit_sploffering" class="splofferings-form" method="post">
                    <div class="form-group">
                        <label for="date">Date:</label>
                        <input type="date" id="date"  name="sploffering_date" required>  
                    </div>
                    <div class="form-group">
                        <label for="church">Church Name:</label>
                        <select name="church" id="church" >
                        	<option value="BEERSHEBA">BEERSHEBA</option>
                            <option value="HOUSE OF BEATITUDES">HOUSE OF BEATITUDES</option>
                            <option value="ELIEM">ELIEM</option>
                            <option value="BETHEL">BETHEL</option>
                            <option value="BETHANI">BETHANI</option>
                            <option value="NEW JERUSALEM">NEW JERUSALEM</option>
                            <option value="REHABOTH">REHABOTH</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label >OFFERING AMOUNT(₹): </label>   
                        <input type="text" placeholder="₹0.00"  name="offering_amount"required/>  
                    </div>
                    <div class="form-group">
                        <label >OFFERING FROM: </label>   
                        <input type="text" placeholder="Name"  name="offering_from" required/>  
                    </div>
                    <button type="button" class="back-btn">Back</button>
                    <button type="submit" class="submit-btn">Submit</button>
                </form>
                <button type="submit" class="logout-btn">Logout</button>  
            </div>   
        </section>  
        <script>
        	const backBtn = document.getElementsByClassName("back-btn")[0];
        	backBtn.addEventListener("click", ()=>{
        	window.location.href = "/dashboard";
        		});
        </script>
        
</body>
</html>