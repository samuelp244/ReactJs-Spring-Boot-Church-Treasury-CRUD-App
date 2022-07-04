import axios from "axios"

const SUNDAYOFFERING_API_BASE_URL = "http://localhost:8080/treasury/api/v1";
class SundayOfferingService{

    // getsundayoffering(){
    //     return axios.get(sundayoffering_API_BASE_URL);
    // }
    // http://localhost:8080/treasury/api/v1/add/addSundayOffering
    addSundayOffering(sundayoffering){
        return axios.post(SUNDAYOFFERING_API_BASE_URL+"/add/addSundayOffering", sundayoffering);
    }

    viewSundayOfferings(viewParams){
        // return axios.get(`${SPECIALOFFERING_API_BASE_URL}/view/viewSpecialOffering?from_date=${viewParams.from_date}&to_date=${viewParams.to_date}&church_name=${viewParams.church_name}`);
        // return axios.get(SUNDAYOFFERING_API_BASE_URL+"view/viewSundayOfferings",viewParams);
        return axios.get(`${SUNDAYOFFERING_API_BASE_URL}/view/viewSundayOffering?from_date=${viewParams.from_date}&to_date=${viewParams.to_date}&church_name=${viewParams.church_name}`);
    }

    editSundayOffering(sundayoffering){
        return axios.put(SUNDAYOFFERING_API_BASE_URL+"/edit/editSundayOffering" ,sundayoffering)    
    }

    deleteSundayOffering(params){
        return axios.delete(SUNDAYOFFERING_API_BASE_URL+"/delete/deleteSundayOffering" ,params);
    }

    printSundayOfferings(date){
        return axios.get(`${SUNDAYOFFERING_API_BASE_URL}/pdf?date=${date}`)
    }
    
}
export default new SundayOfferingService();