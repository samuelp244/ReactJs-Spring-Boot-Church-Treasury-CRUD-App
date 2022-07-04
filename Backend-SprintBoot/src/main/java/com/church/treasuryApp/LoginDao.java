package com.church.treasuryApp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


public class LoginDao {

	String dbUrl = "jdbc:mysql://localhost:3306/users_db1";
	String dbUname = "root";
	String dbPasswd = "chandan1997";
	String dbDriver = "com.mysql.cj.jdbc.Driver";
	
	public void loadDriver(String SbDriver) {
		
		try {
			Class.forName(dbDriver);
		} catch(ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	public Connection getConnection() 
	{
		Connection con = null;
		try {
			con = DriverManager.getConnection(dbUrl, dbUname,dbPasswd);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return con;
		
	}
	
	public boolean validate(LoginBean loginBean) {
		loadDriver(dbDriver);
		Connection con = getConnection();
		boolean status = false;
		
		String query = "select * from user where username = ? and password = ?";
		
		PreparedStatement ps;
		
		try {
			ps = con.prepareStatement(query);
			ps.setString(1, loginBean.getUsername());
			ps.setString(2, loginBean.getPassword());
		ResultSet rs = ps.executeQuery();
		status  = rs.next();
		} catch (SQLException e) {
			e.printStackTrace();
		}
				
		return status;
	}
}
