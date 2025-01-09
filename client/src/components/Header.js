import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importuj useNavigate

function Header() {
  const navigate = useNavigate(); // Tworzymy funkcję do nawigacji

  const handleLoginClick = () => {
    navigate('/login'); // Przenosimy użytkownika do strony logowania
  };

  return (
    <header>
      <div id="headerTop">
        <div className="resizer">
          <div className="left">
            <h2>Wypożyczalnia samochodów</h2>
          </div>

          <div className="right">
            <button id="login" onClick={handleLoginClick}>
              <p>Zaloguj się</p>
            </button>
            <button id="login"><p>Lokalizacje</p></button>
            <button id="login"><p>Oferta</p></button>
          </div>
        </div>
      </div>

      <div id="headerBottom">
        <div className="resizer"></div>
      </div>
    </header>
  );
}

export default Header;
