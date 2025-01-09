import React, { useState, useEffect } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";


const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loginButton = document.querySelector(".loginB .loginButton");
    const emailInput = document.querySelector(".loginB .loginInput");

    if (loginButton) {
      loginButton.addEventListener("click", handleEmailSubmit);
    }

    return () => {
      if (loginButton) {
        loginButton.removeEventListener("click", handleEmailSubmit);
      }
    };
  }, []);

  const handleEmailSubmit = () => {
    fetch(`http://localhost:5000/api/auth/check-email?email=${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.exists) {
          // Jeśli email istnieje, przejdź do ekranu logowania
          document.querySelector(".loginC").style.display = "block";
          document.querySelector(".loginB").style.display = "none";
          document.querySelector(".registerC").style.display = "none";
        } else {
          // Jeśli email nie istnieje, przejdź do ekranu rejestracji
          document.querySelector(".registerC").style.display = "block";
          document.querySelector(".loginC").style.display = "none";
          document.querySelector(".loginB").style.display = "none"; 
        }
      })
      .catch((error) => setError("Błąd serwera"));
  };

  const handleLogin = () => {
    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("authToken", data.token);
          const userData = {
            firstName: data.user.firstName,
            lastName: data.user.lastName,
          };
          localStorage.setItem("userName", JSON.stringify(userData)); // Zapisz jako JSON
          setUser(userData);
          navigate("/");
          alert("Zalogowano pomyślnie");
        } else {
          setError("Błędne dane logowania");
        }
      })
      .catch((error) => setError("Błąd podczas logowania"));
  };

  const handleRegister = () => {
    fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password}),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Zarejestrowano pomyślnie");
        } else {
          setError("Błąd podczas rejestracji");
        }
      })
      .catch((error) => setError("Błąd serwera"));
  };

  return (
    <div id="fullScreen">
      <header class="header">
        <div className="resizer">
          <div className="left">
            <h4>Wypożyczalnia samochodów</h4>
          </div>
          <div className="right"></div>
        </div>
      </header>

      <div id="loginScreen">
        <div className="resizer">
          <div id="loginPanel">
            <span className="loginF loginB" >
              <h1>Zaloguj się lub utwórz konto</h1>
              <p>Aby uzyskać dostęp do naszych usług, możesz zalogować się przy użyciu danych konta.</p>
              <p><b>Adres e-mail</b></p>
              <input className="loginInput" type="text" placeholder="Wpisz swój adres e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
              <p className="error">Sprawdź, czy podany adres e-mail jest prawidłowy</p>
              <button className="loginButton" onClick={handleEmailSubmit}><b>Kontynuuj za pomocą e-maila</b></button>
            </span>

            <span className="loginF loginC">
              <h1>Zaloguj się</h1>
              <p>Już jesteś naszym użytkownikiem. Zaloguj się, aby kontynuować.</p>
              <p><b>Hasło</b></p>
              <input className="loginInput" type="password" placeholder="Wpisz swoje hasło" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <p className="error">Sprawdź, czy podane hasło jest prawidłowe</p>
              <button className="loginButton" onClick={handleLogin}><b>Dokończ logowanie</b></button>
            </span>

            <span className="loginF registerC">
              <h1>Zarejestruj się</h1>
              <p>Nie jesteś naszym użytkownikiem. Zarejestruj się, aby kontynuować.</p>
              <p><b>Imię</b></p>
              <input className="loginInput" type="text" placeholder="Wpisz swoje imię" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
              <p className="error">Sprawdź, czy podane imię jest prawidłowe</p>
              <p><b>Nazwisko</b></p>
              <input className="loginInput" type="text" placeholder="Wpisz swoje nazwisko" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              <p className="error">Sprawdź, czy podane nazwisko jest prawidłowe</p>
              <p><b>Data urodzenia</b></p>
              <input className="loginInput" type="date" placeholder="Podaj swoją datę urodzenia" value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
              <p className="error">Sprawdź, czy podana data jest prawidłowa</p>
              <p><b>Utwórz hasło</b></p>
              <input className="loginInput" type="password" placeholder="Wpisz swoje hasło" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <p className="error">X</p>
              <p><b>Powtórz hasło</b></p>
              <input className="loginInput" type="password" placeholder="Powtórz swoje hasło" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
              <p className="error">Hasła są różne</p>
              <button className="loginButton" onClick={handleRegister}><b>Dokończ rejestrację</b></button>
            </span>
          </div>
        </div>
      </div>

      <footer></footer>
    </div>
  );
};

export default Login;
