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
//import './styles/adminlogin.css';
import './styles/branches.css';
import './styles/catalog.css';
import './styles/contact.css';
import './styles/faq.css';
import './styles/fleetguide.css';
import './styles/footer.css';
import './styles/header.css';
//import './styles/index.css';
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
          <Route path="/" element={<><Header user={user} setUser={setUser}/><PageMap/><Footer/><Copyright /></>} />
          <Route path="/catalog" element={<><Header user={user} setUser={setUser}/><CarForm /><CarList /><PageMap/><Footer /><Copyright /></>} />
          <Route path="/login" element={<><Header user={user} setUser={setUser}/> <Login setUser={setUser}/><PageMap/><Footer /><Copyright /></>} />
          <Route path="/about" element={<><Header user={user} setUser={setUser}/><About /><PageMap/><Footer /><Copyright /></>} />
          <Route path="/faq" element={<><Header user={user} setUser={setUser}/><Faq /><PageMap/><Footer /><Copyright /></>} />
          <Route path="/admin-login" element={<><Header user={user} setUser={setUser}/><AdminLogin /><PageMap/><Footer /><Copyright /></>} />
          <Route path="/branches" element={<><Header user={user} setUser={setUser}/><Branches /><PageMap/><Footer /><Copyright /></>} />
          <Route path="/contact" element={<><Header user={user} setUser={setUser}/><Contact /><PageMap/><Footer /><Copyright /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;