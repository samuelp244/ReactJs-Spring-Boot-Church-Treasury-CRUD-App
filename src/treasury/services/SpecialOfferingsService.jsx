import axios from "axios"

const SPECIALOFFERING_API_BASE_URL = "http://localhost:8080/treasury/api/v1";
class SpecialOfferingService{
    // http://localhost:8080/treasury/api/v1/add/addSundayOffering
    addSpecialOffering(Specialoffering){
        return axios.post(SPECIALOFFERING_API_BASE_URL+"/add/addSpecialOffering", Specialoffering);
    }

    viewSpecialOfferings(viewParams){
        // return axios.get(SPECIALOFFERING_API_BASE_URL+"view/viewSpecialOffering",viewParams);
        return axios.get(`${SPECIALOFFERING_API_BASE_URL}/view/viewSpecialOffering?from_date=${viewParams.from_date}&to_date=${viewParams.to_date}&church_name=${viewParams.church_name}`);
    }

    deleteSpecialOffering(delParams){
        // return axios.delete(`${SPECIALOFFERING_API_BASE_URL}/delete/deleteSpecialOffering?id=${delParams.id}&church_name=${delParams.church_name}`)
        return axios.delete(SPECIALOFFERING_API_BASE_URL+"/delete/deleteSpecialOffering" ,delParams);
    }

    editSpecialOffering(Specialoffering){
        return axios.put(SPECIALOFFERING_API_BASE_URL+"/edit/editSpecialOffering" ,Specialoffering)
    }
}
export default new SpecialOfferingService();