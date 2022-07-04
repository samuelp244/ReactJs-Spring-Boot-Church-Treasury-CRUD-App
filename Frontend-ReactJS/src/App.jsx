import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";
import ErrorPage from './errorpage';
import Home from "./home";

import TreasuryDashboard from './treasury/TreasuryDashboard';
// expense
import AddExpenseComponent from './treasury/expenseComponents/AddExpenseComponent';
import EditExpenseComponent from './treasury/expenseComponents/EditExpenseComponent';
import ViewExpenseComponent from './treasury/expenseComponents/ViewExpenseComponent';

// import AddSundayOfferingComponents from "./treasury/sundayOfferingComponents/AddSundayOfferingComponents"
import AddSundayOfferingComponents from "./treasury/sundayOfferingComponents/AddSundayOfferingComponents"
import ViewSundayOfferingComponent from "./treasury/sundayOfferingComponents/ViewSundayOfferingComponents"
import EditSundayOfferingComponent from "./treasury/sundayOfferingComponents/EditSundayOfferingComponent"

import AddSpecialOfferingComponent from './treasury/specialOfferingComponents/AddSpecialOfferingComponent';
import ViewSpecialOfferingComponent from "./treasury/specialOfferingComponents/ViewSpecialOfferingComponent"
import EditSpecialOfferingComponent from "./treasury/specialOfferingComponents/EditSpecialOfferingComponent"


export default function App() {
  return (
    <div className="App">

    <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          
          <Route path="/treasury" element={<TreasuryDashboard />}></Route>
          <Route path="/treasury/add-expenses/" element={<AddExpenseComponent />} ></Route>
          <Route path="/treasury/view-expenses" element={<ViewExpenseComponent />} ></Route>
          <Route path="treasury/view-expenses/edit-expense/" element={<EditExpenseComponent />}></Route>
          <Route path="treasury/add-sundayofferings/" element={<AddSundayOfferingComponents />}></Route>
          <Route path="treasury/view-sundayofferings" element={<ViewSundayOfferingComponent />}></Route>
          <Route path="treasury/view-sundayofferings/edit-sundayoffering" element={<EditSundayOfferingComponent />}></Route>
          <Route path="treasury/add-specialofferings/" element={<AddSpecialOfferingComponent />}></Route>
          <Route path="treasury/view-specialofferings/" element={<ViewSpecialOfferingComponent />}></Route>
          <Route path="treasury/view-specialofferings/edit-splOffering" element={<EditSpecialOfferingComponent />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

