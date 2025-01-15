import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import AdminLogin from './components/AdminLogin';
import Branches from './components/Branches';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import Faq from './components/Faq';
import PageMap from './components/PageMap';
import Header from './components/Header';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import Footer from './components/Footer';
import Login from "./components/Login";

import './styles/about.css';
import './styles/adminlogin.css';
import './styles/branches.css';
import './styles/catalog.css';
import './styles/contact.css';
import './styles/faq.css';
import './styles/fleetguide.css';
import './styles/footer.css';
import './styles/header.css';
import './styles/index.css';
import './styles/login.css';
import './styles/section.css';
import './styles/style.css';

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