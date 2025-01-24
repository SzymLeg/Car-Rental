import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importuj useNavigate

function Header({ user, setUser }) {
  const navigate = useNavigate(); // Tworzymy funkcję do nawigacji

  const handleLoginClick = () => {
    if (!user) {
      navigate("/login");
    } // Przenosimy użytkownika do strony logowania
    else {
      navigate("/profile");
    }
  };

  const handleLogoutClick = () => {
    if (user) {
    // Usuń dane użytkownika (np. z localStorage lub sessionStorage)
    localStorage.removeItem('user');  // Przykład usunięcia danych użytkownika z localStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    setUser(null); // Ustawiamy stan użytkownika na null
    navigate('/login'); // Przenosimy użytkownika na stronę logowania po wylogowaniu
    }
  };

  const handleHomeClick = () => {
    navigate('/'); // Przenosimy użytkownika na stronę główną
  };

  const handleBranchesClick = () => {
    navigate('/branches'); // Przenosimy użytkownika na stronę "Lokalizacje"
  };

  const handleCatalogClick = () => {
    navigate('/catalog'); // Przenosimy użytkownika na stronę "Lokalizacje"
  };

  return (
    /*
    <header>
      <div id="headerTop">
        <div className="resizer">
          <div className="left">
            <h2 onClick={handleHomeClick} style={{ cursor: 'pointer' }}>Wypożyczalnia samochodów</h2>
          </div>

          <div className="right">
          {user && (
              <button id="login" onClick={handleLogoutClick}><p>Wyloguj</p></button>
            )}
            <button id="login" onClick={handleLoginClick}>
              {user ? (
                <>
                  <p>Witaj, {user.firstName} {user.lastName}!</p> 
                </>
              ) : (
                <p>Zaloguj się</p>
              )}
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
    */

    <header>
        <div class="resizer">
            <div class="left">
                <h4 class="companyName" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>Wypożyczalnia samochodów</h4>
            </div>

            <div class="right">
            {user && (
              <button id="login" onClick={handleLogoutClick} style={{ cursor: 'pointer' }}><p>Wyloguj</p></button>
            )}
                <button id="login" onClick={handleLoginClick} style={{ cursor: 'pointer' }}> 
                  {user ? (
                <>
                  <p>Witaj, {user.firstName} {user.lastName}!</p> 
                </>
              ) : (
                <p>Zaloguj się</p>
              )}</button>
                <button id="login" onClick={handleBranchesClick} style={{ cursor: 'pointer' }}><p>Lokalizacje</p></button>
                <button id="login" onClick={handleCatalogClick} style={{ cursor: 'pointer' }}><p>Oferta</p></button>
            </div>
        </div>
    </header>

  );
}

export default Header;