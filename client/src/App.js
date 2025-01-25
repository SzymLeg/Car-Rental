import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css';

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
import Error from "./components/e404";
import Success from "./components/Success";
import Profile from "./components/Profile";


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
import './styles/404.css';
import './styles/successfull.css';
import './styles/profile.css';

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
          <Route path="/" element={<><Header user={user} setUser={setUser}/><Index/><PageMap user={user} setUser={setUser}/><Footer/><Copyright /></>} />
          <Route path="/catalog" element={<><Header user={user} setUser={setUser}/><CarList /><PageMap user={user} setUser={setUser}/><Footer /><Copyright /></>} />
          <Route path="/login" element={<><Header user={user} setUser={setUser}/> <Login setUser={setUser}/><PageMap user={user} setUser={setUser}/><Footer /><Copyright /></>} />
          <Route path="/about" element={<><Header user={user} setUser={setUser}/><About /><PageMap user={user} setUser={setUser}/><Footer /><Copyright /></>} />
          <Route path="/faq" element={<><Header user={user} setUser={setUser}/><Faq /><PageMap user={user} setUser={setUser}/><Footer /><Copyright /></>} />
          <Route path="/admin-login" element={<><Header user={user} setUser={setUser}/><AdminLogin /><PageMap user={user} setUser={setUser}/><Footer /><Copyright /></>} />
          <Route path="/branches" element={<><Header user={user} setUser={setUser}/><Branches /><PageMap user={user} setUser={setUser}/><Footer /><Copyright /></>} />
          <Route path="/contact" element={<><Header user={user} setUser={setUser}/><Contact /><PageMap user={user} setUser={setUser}/><Footer /><Copyright /></>} />
          <Route path="/rent/:id" element={<><Header user={user} setUser={setUser}/><Rent /><PageMap user={user} setUser={setUser}/><Footer /><Copyright /></>} />
          <Route path="/payment" element={<><Header user={user} setUser={setUser}/><Payment /><PageMap user={user} setUser={setUser}/><Footer /><Copyright /></>} />
          <Route path="*" element={<><Header user={user} setUser={setUser}/><Error/><PageMap user={user} setUser={setUser}/><Footer /><Copyright /></>} />
          <Route path="/success" element={<><Header user={user} setUser={setUser}/><Success /><PageMap user={user} setUser={setUser}/><Footer /><Copyright /></>} />
          <Route path="/profile" element={<><Header user={user} setUser={setUser}/><Profile user={user} setUser={setUser}/><PageMap user={user} setUser={setUser}/><Footer /><Copyright /></>} />
        </Routes>
      </div>
      {/* Przycisk przewijania na górę */}
      <button className="scrollToTop" onClick={scrollToTop}>↑</button>
      {/* Przycisk przenoszący na stronę /contact po lewej stronie */}
      <Link to="/contact">
        <button className="goToContact"><FontAwesomeIcon icon={faComment} /> Chat</button>
      </Link>
      
    </Router>
  );
}

export default App;