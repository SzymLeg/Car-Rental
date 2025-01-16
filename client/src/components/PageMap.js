import React from 'react';
import { Link } from 'react-router-dom';

function PageMap() {
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
                <Link to="/user-panel" className="maping">Panel użytkownika</Link>
                <Link to="/admin-login" className="maping">Panel administratora</Link>
            </p>
        </div>
    </div>
  );
}

export default PageMap;
