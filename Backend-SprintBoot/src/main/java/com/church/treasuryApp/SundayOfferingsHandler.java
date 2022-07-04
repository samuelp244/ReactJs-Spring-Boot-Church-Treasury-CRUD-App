package com.church.treasuryApp;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class SundayOfferingsHandler {
	

	public static final String INSERT_NEW_SUNDAYOFFERING = "_sundayOfferings (date, no2000, no500, no200, no100, no50, no20, no10, coinsTotal, Total) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
	
	public static final String VIEW_SUNDAYOFFERING = "_sundayOfferings";
	
	public static final String UPDATE_SUNDAYOFFERING = "_sundayOfferings SET date=?, no2000=?, no500=?, no200=?, no100=?, no50=?, no20=?, no10=?, coinsTotal=?, Total=? WHERE";
	
	public static final String DELETE_SUNDAYOFFERING = "_sundayOfferings WHERE id_";
	
	
	public SundayOfferingsHandler() {
	}
	
	public SundayOfferingsDAO parseJsonData(String sundayOfferingDataJsonString) throws  JSONException{
		JSONObject sundayOfferingJson = new JSONObject(sundayOfferingDataJsonString);
		
		SundayOfferingsDAO sundayOfferingDao = new SundayOfferingsDAO();
		if(sundayOfferingJson.has("sundayOffering_id")) {
			sundayOfferingDao.setSundayOffering_id(sundayOfferingJson.getInt("sundayOffering_id"));
		}		
		sundayOfferingDao.setSundayOffering_date(sundayOfferingJson.getString("sundayOffering_date"));
		sundayOfferingDao.setSundayOffering_churchName(sundayOfferingJson.getString("sundayOffering_church"));
		sundayOfferingDao.setSundayOffering_no2000(sundayOfferingJson.getInt("sundayOffering_no2000"));
		sundayOfferingDao.setSundayOffering_no500(sundayOfferingJson.getInt("sundayOffering_no500"));
		sundayOfferingDao.setSundayOffering_no200(sundayOfferingJson.getInt("sundayOffering_no200"));
		sundayOfferingDao.setSundayOffering_no100(sundayOfferingJson.getInt("sundayOffering_no100"));
		sundayOfferingDao.setSundayOffering_no50(sundayOfferingJson.getInt("sundayOffering_no50"));
		sundayOfferingDao.setSundayOffering_no20(sundayOfferingJson.getInt("sundayOffering_no20"));
		sundayOfferingDao.setSundayOffering_no10(sundayOfferingJson.getInt("sundayOffering_no10"));
		sundayOfferingDao.setSundayOffering_coinsTotal(sundayOfferingJson.getInt("sundayOffering_coinsTotal"));
		sundayOfferingDao.setSundayOffering_Total(sundayOfferingJson.getInt("sundayOffering_Total"));
		
		return sundayOfferingDao;
	}
	
	public String createJsonReponse(ArrayList<SundayOfferingsDAO> sundayOfferingDaoList) throws JSONException {
		JSONObject responseJson = new JSONObject();
		JSONArray sundayOfferingsArray = new JSONArray();
		
		for(int i=0; i<sundayOfferingDaoList.size(); i++) {
			JSONObject tempObj = new JSONObject();
			tempObj.put("sundayOffering_id", sundayOfferingDaoList.get(i).getSundayOffering_id());
			tempObj.put("sundayOffering_date", sundayOfferingDaoList.get(i).getSundayOffering_date());
			tempObj.put("sundayOffering_church", sundayOfferingDaoList.get(i).getSundayOffering_churchName());
			tempObj.put("sundayOffering_no2000", sundayOfferingDaoList.get(i).getSundayOffering_no2000());
			tempObj.put("sundayOffering_no500", sundayOfferingDaoList.get(i).getSundayOffering_no500());
			tempObj.put("sundayOffering_no200", sundayOfferingDaoList.get(i).getSundayOffering_no200());
			tempObj.put("sundayOffering_no100", sundayOfferingDaoList.get(i).getSundayOffering_no100());
			tempObj.put("sundayOffering_no50", sundayOfferingDaoList.get(i).getSundayOffering_no50());
			tempObj.put("sundayOffering_no20", sundayOfferingDaoList.get(i).getSundayOffering_no20());
			tempObj.put("sundayOffering_no10", sundayOfferingDaoList.get(i).getSundayOffering_no10());
			tempObj.put("sundayOffering_coinsTotal", sundayOfferingDaoList.get(i).getSundayOffering_coinsTotal());
			tempObj.put("sundayOffering_Total", sundayOfferingDaoList.get(i).getSundayOffering_Total());
			sundayOfferingsArray.put(tempObj);
		}
		
		responseJson.put("SundayOfferings", sundayOfferingsArray);
		return responseJson.toString();
	}
	
	public String createJsonReponse(SundayOfferingsDAO sundayOfferingDao) throws JSONException {
		JSONObject responseJson = new JSONObject();
		
		responseJson.put("sundayOffering_id", sundayOfferingDao.getSundayOffering_id());
		responseJson.put("sundayOffering_date", sundayOfferingDao.getSundayOffering_date());
		responseJson.put("sundayOffering_church", sundayOfferingDao.getSundayOffering_churchName().toUpperCase().replace('_', ' '));
		responseJson.put("sundayOffering_no2000", sundayOfferingDao.getSundayOffering_no2000());
		responseJson.put("sundayOffering_no500", sundayOfferingDao.getSundayOffering_no500());
		responseJson.put("sundayOffering_no200", sundayOfferingDao.getSundayOffering_no200());
		responseJson.put("sundayOffering_no100", sundayOfferingDao.getSundayOffering_no100());
		responseJson.put("sundayOffering_no50", sundayOfferingDao.getSundayOffering_no50());
		responseJson.put("sundayOffering_no20", sundayOfferingDao.getSundayOffering_no20());
		responseJson.put("sundayOffering_no10", sundayOfferingDao.getSundayOffering_no10());
		responseJson.put("sundayOffering_coinsTotal", sundayOfferingDao.getSundayOffering_coinsTotal());
		responseJson.put("sundayOffering_Total", sundayOfferingDao.getSundayOffering_Total());
		
		return responseJson.toString();
	}

	public boolean storeNewData(SundayOfferingsDAO sundayOfferingDao) throws Exception {
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		boolean status = false;
		PreparedStatement ps;
		
		try {
			
				String query = "INSERT INTO " + sundayOfferingDao.getSundayOffering_churchName() + INSERT_NEW_SUNDAYOFFERING;
				ps = con.prepareStatement(query);
				ps.setString(1, sundayOfferingDao.getSundayOffering_date());
				ps.setInt(2, sundayOfferingDao.getSundayOffering_no2000());
				ps.setInt(3, sundayOfferingDao.getSundayOffering_no500());
				ps.setInt(4, sundayOfferingDao.getSundayOffering_no200());
				ps.setInt(5, sundayOfferingDao.getSundayOffering_no100());
				ps.setInt(6, sundayOfferingDao.getSundayOffering_no50());
				ps.setInt(7, sundayOfferingDao.getSundayOffering_no20());
				ps.setInt(8, sundayOfferingDao.getSundayOffering_no10());
				ps.setInt(9, sundayOfferingDao.getSundayOffering_coinsTotal());
				ps.setInt(10, sundayOfferingDao.getSundayOffering_Total());
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
	
	public ArrayList<SundayOfferingsDAO> getAllData(String from_date, String to_date, String churchName) {
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		boolean status = false;
		PreparedStatement ps;
		ArrayList<SundayOfferingsDAO> sundayOfferingDaoList = new ArrayList<>();
		
		try {
			String query = "SELECT id_" + churchName + "_sundayOfferings, date, no2000, no500, no200, no100, no50, no20, no10, coinsTotal, Total FROM " + churchName + VIEW_SUNDAYOFFERING + " WHERE date >= \"" + from_date + "\" AND date <= \"" + to_date + "\";";
			ps = con.prepareStatement(query);
			ResultSet rs = ps.executeQuery();
			
			
			while(rs.next()) {
				SundayOfferingsDAO sundayOfferingDao = new SundayOfferingsDAO();
				String churchID = "id_" + churchName + "_sundayOfferings";
				sundayOfferingDao.setSundayOffering_id(rs.getInt(churchID));
				sundayOfferingDao.setSundayOffering_date(rs.getString("date"));
				sundayOfferingDao.setSundayOffering_churchName(churchName);
				sundayOfferingDao.setSundayOffering_no2000(rs.getInt("no2000"));
				sundayOfferingDao.setSundayOffering_no500(rs.getInt("no500"));
				sundayOfferingDao.setSundayOffering_no200(rs.getInt("no200"));
				sundayOfferingDao.setSundayOffering_no100(rs.getInt("no100"));
				sundayOfferingDao.setSundayOffering_no50(rs.getInt("no50"));
				sundayOfferingDao.setSundayOffering_no20(rs.getInt("no20"));
				sundayOfferingDao.setSundayOffering_no10(rs.getInt("no10"));
				sundayOfferingDao.setSundayOffering_coinsTotal(rs.getInt("coinsTotal"));
				sundayOfferingDao.setSundayOffering_Total(rs.getInt("Total"));
				
				sundayOfferingDaoList.add(sundayOfferingDao);
			}
			
			
		}catch(Exception e){
			e.printStackTrace();
			return sundayOfferingDaoList;
			
		}
		return sundayOfferingDaoList;
	}
	
	public SundayOfferingsDAO getDataByDate(String date, String churchName) {
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		boolean status = false;
		PreparedStatement ps;
		SundayOfferingsDAO sundayOfferingDao = new SundayOfferingsDAO();
		
		try {
			String query = "SELECT id_" + churchName + "_sundayOfferings, date, no2000, no500, no200, no100, no50, no20, no10, coinsTotal, Total FROM " + churchName + VIEW_SUNDAYOFFERING + " WHERE date = \"" + date + "\";";
			ps = con.prepareStatement(query);
			ResultSet rs = ps.executeQuery();
			
			
			while(rs.next()) {
				
				String churchID = "id_" + churchName + "_sundayOfferings";
				sundayOfferingDao.setSundayOffering_id(rs.getInt(churchID));
				sundayOfferingDao.setSundayOffering_date(rs.getString("date"));
				sundayOfferingDao.setSundayOffering_churchName(churchName);
				sundayOfferingDao.setSundayOffering_no2000(rs.getInt("no2000"));
				sundayOfferingDao.setSundayOffering_no500(rs.getInt("no500"));
				sundayOfferingDao.setSundayOffering_no200(rs.getInt("no200"));
				sundayOfferingDao.setSundayOffering_no100(rs.getInt("no100"));
				sundayOfferingDao.setSundayOffering_no50(rs.getInt("no50"));
				sundayOfferingDao.setSundayOffering_no20(rs.getInt("no20"));
				sundayOfferingDao.setSundayOffering_no10(rs.getInt("no10"));
				sundayOfferingDao.setSundayOffering_coinsTotal(rs.getInt("coinsTotal"));
				sundayOfferingDao.setSundayOffering_Total(rs.getInt("Total"));
				
				
			}
			
			
		}catch(Exception e){
			e.printStackTrace();
			return sundayOfferingDao;
			
		}
		return sundayOfferingDao;
	}
	
	public boolean updateById(SundayOfferingsDAO sundayOfferingDao, String churchName) throws Exception {
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		boolean status = false;
		PreparedStatement ps;
		
		try {
			String query = "UPDATE " + churchName + UPDATE_SUNDAYOFFERING + " id_" + churchName + "_sundayOfferings = " + sundayOfferingDao.getSundayOffering_id();
			ps = con.prepareStatement(query);
			ps.setString(1, sundayOfferingDao.getSundayOffering_date());
			ps.setInt(2, sundayOfferingDao.getSundayOffering_no2000());
			ps.setInt(3, sundayOfferingDao.getSundayOffering_no500());
			ps.setInt(4, sundayOfferingDao.getSundayOffering_no200());
			ps.setInt(5, sundayOfferingDao.getSundayOffering_no100());
			ps.setInt(6, sundayOfferingDao.getSundayOffering_no50());
			ps.setInt(7, sundayOfferingDao.getSundayOffering_no20());
			ps.setInt(8, sundayOfferingDao.getSundayOffering_no10());
			ps.setInt(9, sundayOfferingDao.getSundayOffering_coinsTotal());
			ps.setInt(10, sundayOfferingDao.getSundayOffering_Total());
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
			String query = "DELETE FROM " + churchName + DELETE_SUNDAYOFFERING +  churchName + "_sundayOfferings = " + id;
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
