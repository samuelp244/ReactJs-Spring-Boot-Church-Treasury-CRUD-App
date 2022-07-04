package com.church.treasuryApp;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import org.json.*;


public class ExpensesHandler {
	
	public String TableName = null;

	public static final String INSERT_NEW_EXPENSE = "_expenses (date, amount, billing_id, remarks) VALUES (?, ?, ?, ?)";
	
	public static final String VIEW_EXPENSE = "_expenses";
	
	public static final String UPDATE_EXPENSE = "_expenses SET date=?, amount=?, billing_id=?, remarks=? WHERE";
	
	public static final String DELETE_EXPENSE = "_expenses WHERE id_";
	
	
	public ExpensesHandler() {
	}
	
	public String getTableName() {
		return TableName;
	}

	public void setTableName(String tableName) {
		TableName = tableName;
	}
	
	public ExpensesDAO parseJsonData(String expenseDataJsonString) throws  JSONException{
		JSONObject expenseJson = new JSONObject(expenseDataJsonString);
		
		ExpensesDAO expenseDao = new ExpensesDAO();
		if(expenseJson.has("expense_id")) {
			expenseDao.setExpense_id(expenseJson.getInt("expense_id"));
		}
		expenseDao.setExpense_date(expenseJson.getString("expense_date"));
		expenseDao.setExpense_churchName(expenseJson.getString("expense_church").toLowerCase());
		expenseDao.setExpense_amount(Double.parseDouble(expenseJson.getString("expense_amount")));
		expenseDao.setExpense_billingID(expenseJson.getString("billing_id"));
		expenseDao.setExpense_remarks(expenseJson.getString("expense_remarks"));	
		
		return expenseDao;
	}
	
	public String createJsonReponse(ArrayList<ExpensesDAO> expensesDaoList) throws JSONException {
		JSONObject responseJson = new JSONObject();
		JSONArray expensesArray = new JSONArray();
		
		for(int i=0; i<expensesDaoList.size(); i++) {
			JSONObject tempObj = new JSONObject();
			tempObj.put("expense_id", expensesDaoList.get(i).getExpense_id());
			tempObj.put("expense_date", expensesDaoList.get(i).getExpense_date());
			tempObj.put("expense_churchName", expensesDaoList.get(i).getExpense_churchName().toUpperCase().replace('_', ' '));			
			tempObj.put("expense_amount", expensesDaoList.get(i).getExpense_amount());
			tempObj.put("expense_billingID", expensesDaoList.get(i).getExpense_billingID());
			tempObj.put("expense_remarks", expensesDaoList.get(i).getExpense_remarks());
			expensesArray.put(tempObj);
		}
		
		responseJson.put("Expenses", expensesArray);
		return responseJson.toString();
	}
	
	public String createJsonReponse(ExpensesDAO expensesDao) throws JSONException {
		JSONObject responseJson = new JSONObject();
		responseJson.put("expense_id", expensesDao.getExpense_id());
		responseJson.put("expense_date", expensesDao.getExpense_date());
		responseJson.put("expense_churchName", expensesDao.getExpense_churchName().toUpperCase().replace('_', ' '));			
		responseJson.put("expense_amount", expensesDao.getExpense_amount());
		responseJson.put("expense_billingID", expensesDao.getExpense_billingID());
		responseJson.put("expense_remarks", expensesDao	.getExpense_remarks());
		return responseJson.toString();
	}

	public boolean storeNewData(ExpensesDAO expenseDao) throws Exception {
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		boolean status = false;
		PreparedStatement ps;
		
		try {
			
				String query = "INSERT INTO " + expenseDao.getExpense_churchName() + INSERT_NEW_EXPENSE;
				ps = con.prepareStatement(query);
				ps.setString(1, expenseDao.getExpense_date());
				ps.setDouble(2, expenseDao.getExpense_amount());
				ps.setString(3, expenseDao.getExpense_billingID());
				ps.setString(4, expenseDao.getExpense_remarks());
				status = !ps.execute();
			
		}catch (Exception e) {
			e.printStackTrace();			
			return false;
		}
		finally {
			con.close();
		}
		return status;
		
	}
	
	public ArrayList<ExpensesDAO> getAllData(String from_date, String to_date, String churchName) {
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		boolean status = false;
		PreparedStatement ps;
		ArrayList<ExpensesDAO> expensesDaoList = new ArrayList<>();
		
		try {
			String query = "SELECT id_" + churchName + "_expenses, date, amount, billing_id, remarks FROM " + churchName + VIEW_EXPENSE + " WHERE date >= \"" + from_date + "\" AND date <= \"" + to_date + "\";";
			ps = con.prepareStatement(query);
			ResultSet rs = ps.executeQuery();
			
			
			while(rs.next()) {
				ExpensesDAO expensesDao = new ExpensesDAO();
				String churchID = "id_" + churchName + "_expenses";
				expensesDao.setExpense_id(rs.getInt(churchID));
				expensesDao.setExpense_date(rs.getString("date"));
				expensesDao.setExpense_amount(rs.getDouble("amount"));
				expensesDao.setExpense_billingID(rs.getString("billing_id"));
				expensesDao.setExpense_remarks(rs.getString("remarks"));
				expensesDao.setExpense_churchName(churchName);
				expensesDaoList.add(expensesDao);
			}
			
			
		}catch(Exception e){
			e.printStackTrace();
			return expensesDaoList;
			
		}
		return expensesDaoList;
	}
	
	public ExpensesDAO getDataById(String id, String churchName) {
		
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		boolean status = false;
		PreparedStatement ps;
		ExpensesDAO expensesDao = new ExpensesDAO();
		
		try {
			String query = "SELECT id_" + churchName + "_expenses, date, amount, billing_id, remarks FROM " + churchName + VIEW_EXPENSE + " WHERE id_" + this.getTableName() + "_expenses = " + id + ";";
			ps = con.prepareStatement(query);
			ResultSet rs = ps.executeQuery();
			
			
			while(rs.next()) {
				
				String churchID = "id_" + this.getTableName() + "_expenses";
				expensesDao.setExpense_id(rs.getInt(churchID));
				expensesDao.setExpense_date(rs.getString("date"));
				expensesDao.setExpense_amount(rs.getDouble("amount"));
				expensesDao.setExpense_billingID(rs.getString("billing_id"));
				expensesDao.setExpense_remarks(rs.getString("remarks"));
				expensesDao.setExpense_churchName(this.getTableName());
				
			}
			
			
		}catch(Exception e){
			e.printStackTrace();
			return expensesDao;
			
		}
		return expensesDao;
	}
	
	public boolean updateById(ExpensesDAO expensesDao, String churchName) throws Exception {
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		boolean status = false;
		PreparedStatement ps;
		
		try {
			String query = "UPDATE " + churchName + UPDATE_EXPENSE + " id_" + churchName + "_expenses = " + expensesDao.getExpense_id();
			ps = con.prepareStatement(query);
			ps.setString(1, expensesDao.getExpense_date());
			ps.setDouble(2, expensesDao.getExpense_amount());
			ps.setString(3, expensesDao.getExpense_billingID());
			ps.setString(4, expensesDao.getExpense_remarks());
			status = !ps.execute();
			
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}finally {
			con.close();
		}
		return status;
	}
	
	public boolean deleteById(String id, String churchName) throws SQLException {
		
		
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		boolean status = false;
		PreparedStatement ps;
		
		try {
			String query = "DELETE FROM " + churchName + DELETE_EXPENSE +  churchName + "_expenses = " + id;
			ps = con.prepareStatement(query);
			status = !ps.execute();
			
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}finally {
			con.close();
		}
		return status;
	}
	
}
