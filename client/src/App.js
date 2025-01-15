import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import Footer from './components/Footer';
import Login from "./components/Login"; // komponent logowania
import './styles/login.css';
import './styles/fleetguide.css';

function App() {
  const [user, setUser] = useState(null); // Stan użytkownika

  useEffect(() => {
    const storedUser = localStorage.getItem("userName");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Błąd parsowania JSON:", error);
        localStorage.removeItem("userName"); // Usuń nieprawidłowe dane
      }
    }
  }, []);

  return (
    <Router>
      <div>
        {/* Warunkowe renderowanie Header i Footer */}
        <Routes>
          <Route path="/" element={<><Header user={user} setUser={setUser}/><CarForm /><CarList /><Footer /></>} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
