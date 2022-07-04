import axios from "axios"

const EXPENSE_API_BASE_URL = "http://localhost:8080/treasury/api/v1";
class ExpenseService{

    addExpence(expense){
        return axios.post(EXPENSE_API_BASE_URL+"/add/addExpense", expense);
    }
    
    viewExpenses(viewParams){
        // return axios.get(EXPENSE_API_BASE_URL+"/view/viewExpenses",viewParams);
        return axios.get(`${EXPENSE_API_BASE_URL}/view/viewExpense?from_date=${viewParams.from_date}&to_date=${viewParams.to_date}&church_name=${viewParams.church_name}`);
    }

    deleteExpense(params){
        return axios.delete(EXPENSE_API_BASE_URL+"/delete/deleteExpense" ,params);
    }

    editExpense(expense){
        return axios.put(EXPENSE_API_BASE_URL+"/edit/editExpense" ,expense)
}
}
export default new ExpenseService();