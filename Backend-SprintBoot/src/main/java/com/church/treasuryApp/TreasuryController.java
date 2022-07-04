package com.church.treasuryApp;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Enumeration;
import java.util.Objects;
import com.church.treasuryApp.ApiPathTypes;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/treasury/api/v1")
public class TreasuryController {


// ADDING EXPENSE, OFFERING
@RequestMapping(value="/add/{type}", method = RequestMethod.POST)
public String AddExpenses(@PathVariable("type") String type, @RequestBody String JsonData) throws Exception {

boolean status = false;

if(type.equals(ApiPathTypes.ADD_EXPENSE.type)) {
ExpensesHandler expensesHandler = new ExpensesHandler();
ExpensesDAO expenseDao = new ExpensesDAO();
try {
expenseDao = expensesHandler.parseJsonData(JsonData);
}catch(Exception e) {
e.printStackTrace();
return HttpStatus.BAD_REQUEST.getReasonPhrase();
}
status = expensesHandler.storeNewData(expenseDao);
}else if(type.equals(ApiPathTypes.ADD_SUNDAYOFFERING.type)) {
SundayOfferingsHandler sundayOfferingHandler = new SundayOfferingsHandler();
SundayOfferingsDAO sundayOfferingDao = new SundayOfferingsDAO();
try {
sundayOfferingDao = sundayOfferingHandler.parseJsonData(JsonData);
}catch(Exception e) {
e.printStackTrace();
return HttpStatus.BAD_REQUEST.getReasonPhrase();
}
status = sundayOfferingHandler.storeNewData(sundayOfferingDao);
}else if(type.equals(ApiPathTypes.ADD_SPECIALOFFERING.type)) {
SpecialOfferingsHandler specialOfferingHandler = new SpecialOfferingsHandler();
SpecialOfferingsDAO specialOfferingDao = new SpecialOfferingsDAO();
try {
specialOfferingDao = specialOfferingHandler.parseJsonData(JsonData);
}catch(Exception e) {
e.printStackTrace();
return HttpStatus.BAD_REQUEST.getReasonPhrase();
}
status = specialOfferingHandler.storeNewData(specialOfferingDao);
}

if(status) {
// SHOW A MESSAGE OF SUCCESS
return HttpStatus.OK.getReasonPhrase();

}else {
// ASK TO RETRY
return HttpStatus.BAD_REQUEST.getReasonPhrase();
} 

}


// VIEWING EXPENSE, OFFERING 
@RequestMapping(value="/view/{type}", method = RequestMethod.GET)
public String viewExpensesByDate(@PathVariable("type") String type, @RequestParam("from_date") String from_date, @RequestParam("to_date") String to_date, @RequestParam("church_name") String church_name) throws Exception {

String JsonResponse = "";
church_name = church_name.toLowerCase();

if(type.equals(ApiPathTypes.VIEW_EXPENSE.type)) {
ExpensesHandler expensesHandler = new ExpensesHandler();
ArrayList<ExpensesDAO> expensesDaoList = new ArrayList<>(); 
expensesDaoList = expensesHandler.getAllData(from_date, to_date, church_name);
if(expensesDaoList.isEmpty()) {
return HttpStatus.BAD_REQUEST.toString();
}
JsonResponse = expensesHandler.createJsonReponse(expensesDaoList);
}else if(type.equals(ApiPathTypes.VIEW_SUNDAYOFFERING.type)) {
SundayOfferingsHandler sundayOfferingHandler = new SundayOfferingsHandler();
ArrayList<SundayOfferingsDAO> sundayOfferingDaoList = new ArrayList<>();
sundayOfferingDaoList = sundayOfferingHandler.getAllData(from_date, to_date, church_name);
if(sundayOfferingDaoList.isEmpty()) {
return HttpStatus.BAD_REQUEST.toString();
}
JsonResponse = sundayOfferingHandler.createJsonReponse(sundayOfferingDaoList);
}else if(type.equals(ApiPathTypes.VIEW_SPECIALOFFERING.type)) {
SpecialOfferingsHandler specialOfferingHandler = new SpecialOfferingsHandler();
ArrayList<SpecialOfferingsDAO> specialOfferingDaoList = new ArrayList<>();
specialOfferingDaoList = specialOfferingHandler.getAllData(from_date, to_date, church_name);
if(specialOfferingDaoList.isEmpty()) {
return HttpStatus.BAD_REQUEST.toString();
}
JsonResponse = specialOfferingHandler.createJsonReponse(specialOfferingDaoList);
}

return JsonResponse;
}


// EDITING EXPENSE, OFFERING 
@RequestMapping(value = "/edit/{type}", method = RequestMethod.PUT)
public String editexpense(@PathVariable("type") String type ,@RequestBody String ExpenseData) throws Exception {

boolean response = false;

if(type.equals(ApiPathTypes.EDIT_EXPENSE.type)) {
ExpensesHandler expensesHandler = new ExpensesHandler(); 
ExpensesDAO expenseDao = new ExpensesDAO();
try {
expenseDao = expensesHandler.parseJsonData(ExpenseData);
}catch(Exception e) {
e.printStackTrace();
return HttpStatus.BAD_REQUEST.getReasonPhrase();
} 
response = expensesHandler.updateById(expenseDao, expenseDao.getExpense_churchName());
}else if(type.equals(ApiPathTypes.EDIT_SUNDAYOFFERING.type)) {
SundayOfferingsHandler sundayOfferingHandler = new SundayOfferingsHandler();
SundayOfferingsDAO sundayOfferingDao = new SundayOfferingsDAO();
try {
sundayOfferingDao = sundayOfferingHandler.parseJsonData(ExpenseData);
}catch(Exception e) {
e.printStackTrace();
return HttpStatus.BAD_REQUEST.getReasonPhrase();
} 
response = sundayOfferingHandler.updateById(sundayOfferingDao, sundayOfferingDao.getSundayOffering_churchName());
}else if(type.equals(ApiPathTypes.EDIT_SPECIALOFFERING.type)) {
SpecialOfferingsHandler specialOfferingHandler = new SpecialOfferingsHandler();
SpecialOfferingsDAO specialOfferingDao = new SpecialOfferingsDAO();
try {
specialOfferingDao = specialOfferingHandler.parseJsonData(ExpenseData);
}catch(Exception e) {
e.printStackTrace();
return HttpStatus.BAD_REQUEST.getReasonPhrase();
} 
response = specialOfferingHandler.updateById(specialOfferingDao, specialOfferingDao.getSpecialOffering_churchName());
}


if(response) {
// SHOW A MESSAGE OF SUCCESS
return HttpStatus.OK.getReasonPhrase();

}else {
// ASK TO RETRY
return HttpStatus.BAD_REQUEST.getReasonPhrase();
}
}


// DELETING EXPENSE, OFFERING 
@RequestMapping(value = "/delete/{type}", method = RequestMethod.DELETE)
public String deleteExpense(@PathVariable("type") String type, @RequestParam("id") String id, @RequestParam("church_name") String churchName) throws Exception {

boolean response = false;

if(type.equals(ApiPathTypes.DELETE_EXPENSE.type)) {
ExpensesHandler expensesHandler = new ExpensesHandler();
response = expensesHandler.deleteById(id, churchName); 
}else if(type.equals(ApiPathTypes.DELETE_SUNDAYOFFERING.type)) {
SundayOfferingsHandler sundayOfferingHandler = new SundayOfferingsHandler();
response = sundayOfferingHandler.deleteById(id,  churchName);
}else if(type.equals(ApiPathTypes.DELETE_SPECIALOFFERING.type)) {
SpecialOfferingsHandler specialOfferingHandler = new SpecialOfferingsHandler();
response = specialOfferingHandler.deleteById(id,  churchName);
}

if(response) {
// SHOW A MESSAGE OF SUCCESS
return HttpStatus.OK.getReasonPhrase();

}else {
// ASK TO RETRY
return HttpStatus.BAD_REQUEST.getReasonPhrase();
}

}

@RequestMapping(value="/pdf", method=RequestMethod.GET)
public String printPdf(@RequestParam("date") String date) throws FileNotFoundException, MalformedURLException {
try {
PdfTable pdf = new PdfTable();
pdf.getTable(date);
}catch(Exception e) {
e.printStackTrace();
return HttpStatus.OK.getReasonPhrase();
}
return HttpStatus.BAD_REQUEST.getReasonPhrase();
}

}