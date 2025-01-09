import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import Footer from './components/Footer';
import Login from "./components/Login"; // komponent logowania
import './styles/login.css';
import './styles/fleetguide.css';

function App() {
  return (
    <Router>
      <div>
        {/* Warunkowe renderowanie Header i Footer */}
        <Routes>
          <Route path="/" element={<><Header /><CarForm /><CarList /><Footer /></>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
