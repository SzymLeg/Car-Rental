import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, Link} from "react-router-dom";
import About from './components/About';
import AdminLogin from './components/AdminLogin';
import Branches from './components/Branches';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import Faq from './components/Faq';
import PageMap from './components/PageMap';
import Header from './components/Header';
import CarList from './components/CarList';
import Footer from './components/Footer';
import Login from "./components/Login";
import Index from "./components/Index";
import Rent from "./components/Rent";
import Payment from "./components/Payment";

import './styles/about.css';
import './styles/branches.css';
import './styles/contact.css';
import './styles/faq.css';
import './styles/fleetguide.css';
import './styles/footer.css';
import './styles/header.css';
import './styles/login.css';
import './styles/section.css';
import './styles/style.css';
import './styles/rent.css';
import './styles/payment.css';

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
    document.title = "Wypożyczalnia samochodów"; // Ustaw tytuł strony
  }, []);

  // Funkcja do przewijania strony na górę
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <Router>
      <div>
        {/* Warunkowe renderowanie Header i Footer */}
        <Routes>
          <Route path="/" element={<><Header user={user} setUser={setUser}/><Index/><PageMap/><Footer/><Copyright /></>} />
          <Route path="/catalog" element={<><Header user={user} setUser={setUser}/><CarList /><PageMap/><Footer /><Copyright /></>} />
          <Route path="/login" element={<><Header user={user} setUser={setUser}/> <Login setUser={setUser}/><PageMap/><Footer /><Copyright /></>} />
          <Route path="/about" element={<><Header user={user} setUser={setUser}/><About /><PageMap/><Footer /><Copyright /></>} />
          <Route path="/faq" element={<><Header user={user} setUser={setUser}/><Faq /><PageMap/><Footer /><Copyright /></>} />
          <Route path="/admin-login" element={<><Header user={user} setUser={setUser}/><AdminLogin /><PageMap/><Footer /><Copyright /></>} />
          <Route path="/branches" element={<><Header user={user} setUser={setUser}/><Branches /><PageMap/><Footer /><Copyright /></>} />
          <Route path="/contact" element={<><Header user={user} setUser={setUser}/><Contact /><PageMap/><Footer /><Copyright /></>} />
          <Route path="/rent/:id" element={<><Header user={user} setUser={setUser}/><Rent /><PageMap/><Footer /><Copyright /></>} />
          <Route path="/payment" element={<><Header user={user} setUser={setUser}/><Payment /><PageMap/><Footer /><Copyright /></>} />
        </Routes>
      </div>
      {/* Przycisk przewijania na górę */}
      <button className="scrollToTop" onClick={scrollToTop}>↑</button>
      {/* Przycisk przenoszący na stronę /contact po lewej stronie */}
      <Link to="/contact">
        <button className="goToContact">Chat</button>
      </Link>
      
    </Router>
  );
}

export default App;