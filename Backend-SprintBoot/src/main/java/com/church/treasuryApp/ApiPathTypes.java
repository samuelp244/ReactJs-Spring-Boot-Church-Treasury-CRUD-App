package com.church.treasuryApp;

public enum ApiPathTypes {
	
	ADD_EXPENSE("addExpense"),
	ADD_SUNDAYOFFERING("addSundayOffering"),
	ADD_SPECIALOFFERING("addSpecialOffering"),
	VIEW_EXPENSE("viewExpense"),
	VIEW_SUNDAYOFFERING("viewSundayOffering"),
	VIEW_SPECIALOFFERING("viewSpecialOffering"),
	EDIT_EXPENSE("editExpense"),
	EDIT_SUNDAYOFFERING("editSundayOffering"),
	EDIT_SPECIALOFFERING("editSpecialOffering"),
	DELETE_EXPENSE("deleteExpense"),
	DELETE_SUNDAYOFFERING("deleteSundayOffering"),
	DELETE_SPECIALOFFERING("deleteSpecialOffering");
	
	final String type;

	ApiPathTypes(String type) {
		this.type = type;
	}

}
