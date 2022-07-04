package com.church.treasuryApp;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class SpecialOfferingsHandler {

	public String TableName = null;

	public static final String INSERT_NEW_SPECIALOFFERING = "_specialOfferings (specialOffering_date, specialOffering_amount, specialOffering_from) VALUES (?, ?, ?)";
	
	public static final String VIEW_SPECIALOFFERING = "_specialOfferings";
	
	public static final String UPDATE_SPECIALOFFERING = "_specialOfferings SET specialOffering_date=?, specialOffering_amount=?, specialOffering_from=? WHERE";
	
	public static final String DELETE_SPECIALOFFERING = "_specialOfferings WHERE id_";
	
	
	public SpecialOfferingsHandler() {
	}
	
	public String getTableName() {
		return TableName;
	}

	public void setTableName(String tableName) {
		TableName = tableName;
	}
	
	public SpecialOfferingsDAO parseJsonData(String specialOfferingDataJsonString) throws  JSONException{
		JSONObject specialOfferingJson = new JSONObject(specialOfferingDataJsonString);
		
		SpecialOfferingsDAO specialOfferingDao = new SpecialOfferingsDAO();
		if(specialOfferingJson.has("specialOffering_id")) {
			specialOfferingDao.setSpecialOffering_id(specialOfferingJson.getInt("specialOffering_id"));
		}
		specialOfferingDao.setSpecialOffering_date(specialOfferingJson.getString("specialOffering_date"));
		specialOfferingDao.setSpecialOffering_churchName(specialOfferingJson.getString("specialOffering_church").toLowerCase());
		specialOfferingDao.setSpecialOffering_amount(Integer.parseInt(specialOfferingJson.getString("specialOffering_amount")));
		specialOfferingDao.setSpecialOffering_from(specialOfferingJson.getString("specialOffering_from"));
		
		return specialOfferingDao;
	}
	
	public String createJsonReponse(ArrayList<SpecialOfferingsDAO> specialOfferingsDaoList) throws JSONException {
		JSONObject responseJson = new JSONObject();
		JSONArray specialOfferingsArray = new JSONArray();
		
		for(int i=0; i<specialOfferingsDaoList.size(); i++) {
			JSONObject tempObj = new JSONObject();
			tempObj.put("specialOffering_id", specialOfferingsDaoList.get(i).getSpecialOffering_id());
			tempObj.put("specialOffering_date", specialOfferingsDaoList.get(i).getSpecialOffering_date());
			tempObj.put("specialOffering_churchName", specialOfferingsDaoList.get(i).getSpecialOffering_churchName().toUpperCase().replace('_', ' '));			
			tempObj.put("specialOffering_amount", specialOfferingsDaoList.get(i).getSpecialOffering_amount());
			tempObj.put("specialOffering_from", specialOfferingsDaoList.get(i).getSpecialOffering_from());
			specialOfferingsArray.put(tempObj);
		}
		
		responseJson.put("SpecialOfferings", specialOfferingsArray);
		return responseJson.toString();
	}
	
	public String createJsonReponse(SpecialOfferingsDAO specialOfferingsDao) throws JSONException {
		JSONObject responseJson = new JSONObject();
		responseJson.put("specialOffering_id", specialOfferingsDao.getSpecialOffering_id());
		responseJson.put("specialOffering_date", specialOfferingsDao.getSpecialOffering_date());
		responseJson.put("specialOffering_churchName", specialOfferingsDao.getSpecialOffering_churchName().toUpperCase().replace('_', ' '));			
		responseJson.put("specialOffering_amount", specialOfferingsDao.getSpecialOffering_amount());
		responseJson.put("specialOffering_from", specialOfferingsDao.getSpecialOffering_from());
		
		return responseJson.toString();
	}

	public boolean storeNewData(SpecialOfferingsDAO specialOfferingDao) throws Exception {
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		boolean status = false;
		PreparedStatement ps;
		
		try {
			
				String query = "INSERT INTO " + specialOfferingDao.getSpecialOffering_churchName() + INSERT_NEW_SPECIALOFFERING;
				ps = con.prepareStatement(query);
				ps.setString(1, specialOfferingDao.getSpecialOffering_date());
				ps.setInt(2, specialOfferingDao.getSpecialOffering_amount());
				ps.setString(3, specialOfferingDao.getSpecialOffering_from());
				
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
	
	public ArrayList<SpecialOfferingsDAO> getAllData(String from_date, String to_date, String churchName) {
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		boolean status = false;
		PreparedStatement ps;
		ArrayList<SpecialOfferingsDAO> specialOfferingsDaoList = new ArrayList<>();
		
		try {
			String query = "SELECT id_" + churchName + "_specialOfferings, specialOffering_date, specialOffering_amount, specialOffering_from FROM " + churchName + VIEW_SPECIALOFFERING + " WHERE specialOffering_date >= \"" + from_date + "\" AND specialOffering_date <= \"" + to_date + "\";";
			ps = con.prepareStatement(query);
			ResultSet rs = ps.executeQuery();
			
			
			while(rs.next()) {
				SpecialOfferingsDAO specialOfferingsDao = new SpecialOfferingsDAO();
				String churchID = "id_" + churchName + "_specialOfferings";
				specialOfferingsDao.setSpecialOffering_id(rs.getInt(churchID));
				specialOfferingsDao.setSpecialOffering_date(rs.getString("specialOffering_date"));
				specialOfferingsDao.setSpecialOffering_amount(rs.getInt("specialOffering_amount"));
				specialOfferingsDao.setSpecialOffering_from(rs.getString("specialOffering_from"));
				specialOfferingsDao.setSpecialOffering_churchName(churchName);
				specialOfferingsDaoList.add(specialOfferingsDao);
			}
			
			
		}catch(Exception e){
			e.printStackTrace();
			return specialOfferingsDaoList;
			
		}
		return specialOfferingsDaoList;
	}
	
	public boolean updateById(SpecialOfferingsDAO specialOfferingsDao, String churchName) throws Exception {
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		boolean status = false;
		PreparedStatement ps;
		
		try {
			String query = "UPDATE " + churchName + UPDATE_SPECIALOFFERING + " id_" + churchName + "_specialOfferings = " + specialOfferingsDao.getSpecialOffering_id();
			ps = con.prepareStatement(query);
			ps.setString(1, specialOfferingsDao.getSpecialOffering_date());
			ps.setInt(2, specialOfferingsDao.getSpecialOffering_amount());
			ps.setString(3, specialOfferingsDao.getSpecialOffering_from());
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
			String query = "DELETE FROM " + churchName + DELETE_SPECIALOFFERING +  churchName + "_specialOfferings = " + id;
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
