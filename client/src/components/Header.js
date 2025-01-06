import React from 'react';

function Header() {
  return (
    <header>
      <div id="headerTop">
        <div className="resizer">
          <div className="left">
            <h2>Wypożyczalnia samochodów</h2>
          </div>

          <div className="right">
            <button id="login"><p>Zaloguj się</p></button>
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
