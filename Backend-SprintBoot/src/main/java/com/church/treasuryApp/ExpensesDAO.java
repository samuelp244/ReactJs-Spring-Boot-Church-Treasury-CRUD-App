package com.church.treasuryApp;

public class ExpensesDAO {
	
	private String expense_date = "";
	private String expense_churchName = "";
	private double expense_amount = 0.0;
	private String expense_billingID = "";
	private String expense_remarks = "";
	private int expense_id = 0;
	
	public int getExpense_id() {
		return expense_id;
	}

	public void setExpense_id(int expense_id) {
		this.expense_id = expense_id;
	}

	public String getExpense_date() {
		return expense_date;
	}

	public void setExpense_date(String expense_date) {
		this.expense_date = expense_date;
	}

	public String getExpense_churchName() {
		return expense_churchName;
	}

	public void setExpense_churchName(String expense_churchName) {
		this.expense_churchName = expense_churchName;
	}

	public double getExpense_amount() {
		return expense_amount;
	}

	public void setExpense_amount(double expense_amount) {
		this.expense_amount = expense_amount;
	}

	public String getExpense_billingID() {
		return expense_billingID;
	}

	public void setExpense_billingID(String expense_billingID) {
		this.expense_billingID = expense_billingID;
	}

	public String getExpense_remarks() {
		return expense_remarks;
	}

	public void setExpense_remarks(String expense_remarks) {
		this.expense_remarks = expense_remarks;
	}
	
}
