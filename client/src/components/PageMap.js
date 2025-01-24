import React, { useEffect }  from 'react';
import { Link, useLocation } from 'react-router-dom';



function PageMap({ user, setUser }) {
  const location = useLocation();

  const isLoggedIn = () => {
    if (user){
    return true;}
    else {
    return false;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);  // Przewija stronę na górę, gdy zmienia się lokalizacja
  }, [location]);
  return (
    <div id="pageMap">
        <div className="resizer">
            <p>
                <Link to="/" className="maping">Strona Główna</Link>
                <Link to="/catalog" className="maping">Wynajem samochodów</Link>
                <Link to="/branches" className="maping">Nasze oddziały</Link>
                <Link to="/contact" className="maping">Skontaktuj się z Obsługą Klienta</Link>
                <Link to="/about" className="maping">O naszej wypożyczalni</Link>
                <Link to="/faq" className="maping">Najczęściej zadawane pytania</Link>
                <Link to={isLoggedIn() ? "/profile" : "/login"} className="maping">Panel użytkownika</Link>
                <Link to="/admin-login" className="maping">Panel administratora</Link>
            </p>
        </div>
    </div>
  );
}

export default PageMap;
