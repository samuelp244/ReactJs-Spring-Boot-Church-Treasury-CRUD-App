package com.church.treasuryApp;

public class SpecialOfferingsDAO {

	private int specialOffering_id = 0;
	private String specialOffering_date = "";
	private String specialOffering_churchName = "";
	private String specialOffering_from = "";
	private int specialOffering_amount = 0;
	
	public int getSpecialOffering_id() {
		return specialOffering_id;
	}
	public void setSpecialOffering_id(int specialOffering_id) {
		this.specialOffering_id = specialOffering_id;
	}
	public String getSpecialOffering_date() {
		return specialOffering_date;
	}
	public void setSpecialOffering_date(String specialOffering_date) {
		this.specialOffering_date = specialOffering_date;
	}
	public String getSpecialOffering_from() {
		return specialOffering_from;
	}
	public void setSpecialOffering_from(String specialOffering_from) {
		this.specialOffering_from = specialOffering_from;
	}
	public int getSpecialOffering_amount() {
		return specialOffering_amount;
	}
	public void setSpecialOffering_amount(int specialOffering_amount) {
		this.specialOffering_amount = specialOffering_amount;
	}
	public String getSpecialOffering_churchName() {
		return specialOffering_churchName;
	}
	public void setSpecialOffering_churchName(String specialOffering_churchName) {
		this.specialOffering_churchName = specialOffering_churchName;
	}
}
