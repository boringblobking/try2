import React from 'react';
import LandingPage from './components/LandingPage';
import BeneficiarySignUp from './components/BeneficiarySignUp';
import BeneficiaryRequest from './components/BeneficiaryRequest';
import FoodBankSignUp from './components/FoodBankSignUp';
import FoodBankRequests from './components/FoodBankRequests';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/beneficiary-sign-up" exact element={<BeneficiarySignUp/>} />
        <Route path="/beneficiary-request" exact element={<BeneficiaryRequest/>} />
        <Route path="/food-bank-sign-up" exact element={<FoodBankSignUp/>} />
        <Route path="/food-bank-requests" exact element={<FoodBankRequests/>} />
        <Route path="/login" exact element={<Login/>} />
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
