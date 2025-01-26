import React, { useState, useEffect, useRef } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";


const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const emailInputRef = useRef(null); // Ref dla pola e-mail
  const passwordInputRef = useRef(null); // Ref dla pola hasła
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(""); // Inicjalny brak błędu
  const navigate = useNavigate();

  useEffect(() => {
    const loginButton = document.querySelector(".loginB .loginButton");
    const emailInput = document.querySelector(".loginB .loginInput");
    const passwordInput = document.querySelector(".loginC .loginInput");
    

    if (emailInput) {
      emailInput.focus(); // Ustaw fokus na polu e-mail
    }

    if (passwordInput) {
      passwordInput.focus(); // Ustaw fokus na polu hasła
    }


    if (loginButton) {
      loginButton.addEventListener("click", handleEmailSubmit);
    }

    if (isPasswordVisible) {
      passwordInputRef.current?.focus();
    }


    return () => {
      if (loginButton) {
        loginButton.removeEventListener("click", handleEmailSubmit);
      }
    };
  }, [isPasswordVisible]);


  const handleKeyDown = (event, action) => {
    if (event.key === "Enter") {
      action();
    }
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex do walidacji e-maila
    if (!emailRegex.test(email)) {
      return false;
    }
    document.querySelector(".error").style.visibility = "hidden";
    return true;
  };

  const handleEmailSubmit = () => {
    if (validateEmail(email)) {

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
          setIsPasswordVisible(true);
        } else {
          // Jeśli email nie istnieje, przejdź do ekranu rejestracji
          document.querySelector(".registerC").style.display = "block";
          document.querySelector(".loginC").style.display = "none";
          document.querySelector(".loginB").style.display = "none"; 
        }
      })
      .catch((error) => setError("Błąd serwera"));
    } else {
      document.querySelector(".error").style.visibility = "visible";
    }
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
            id: data.user.id,
          };
          localStorage.setItem("userName", JSON.stringify(userData)); // Zapisz jako JSON
          setUser(userData);
          navigate("/profile");
        } else {
          setError("Błędne dane logowania");
          alert("Błędne dane logowania");
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
      body: JSON.stringify({ first_name, last_name, email, password, birthdate }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // Jeśli odpowiedź zawiera token, zapisujemy go w localStorage
          localStorage.setItem("authToken", data.token);
          const userData = {
            firstName: data.user.firstName,
            lastName: data.user.lastName,
            id: data.user.id,
          };
          localStorage.setItem("userName", JSON.stringify(userData)); // Zapisz jako JSON
  
          // Ustawienie danych użytkownika w stanie aplikacji
          setUser(userData);
  
          // Przekierowanie na profil
          navigate("/profile");
  
          // Komunikat po rejestracji
        } else {
          setError("Błąd podczas rejestracji");
        }
      })
      .catch((error) => {
        console.error("Błąd serwera:", error); // Zaloguj błąd serwera
        setError("Błąd serwera");
      });
  };
  

  return (
    <div id="fullScreen">
      
      <div id="loginScreen">
        <div className="resizer">
          <div id="loginPanel">
            <span className="loginF loginB" >
              <h1>Zaloguj się lub utwórz konto</h1>
              <p>Aby uzyskać dostęp do naszych usług, możesz zalogować się przy użyciu danych konta.</p>
              <p><b>Adres e-mail</b></p>
              <input ref={emailInputRef} className="loginInput" type="text" placeholder="Wpisz swój adres e-mail" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => handleKeyDown(e, handleEmailSubmit)} />{emailError && <p className="error">{emailError}</p>} {/* Komunikat o błędzie */}
              <p className="error">Sprawdź, czy podany adres e-mail jest prawidłowy</p>
              <button className="loginButton" onClick={handleEmailSubmit}><b>Kontynuuj za pomocą e-maila</b></button>
            </span>

            <span className="loginF loginC">
              <h1>Zaloguj się</h1>
              <p>Już jesteś naszym użytkownikiem. Zaloguj się, aby kontynuować.</p>
              <p><b>Hasło</b></p>
              <input ref={passwordInputRef} className="loginInput" type="password" placeholder="Wpisz swoje hasło" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => handleKeyDown(e, handleLogin)} />
              <p className="error">Sprawdź, czy podane hasło jest prawidłowe</p>
              <button className="loginButton" onClick={handleLogin}><b>Dokończ logowanie</b></button>
            </span>

            <span className="loginF registerC">
              <h1>Zarejestruj się</h1>
              <p>Nie jesteś naszym użytkownikiem. Zarejestruj się, aby kontynuować.</p>
              <p><b>Imię</b></p>
              <input className="loginInput" type="text" placeholder="Wpisz swoje imię" value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
              <p className="error">Sprawdź, czy podane imię jest prawidłowe</p>
              <p><b>Nazwisko</b></p>
              <input className="loginInput" type="text" placeholder="Wpisz swoje nazwisko" value={last_name} onChange={(e) => setLastName(e.target.value)}/>
              <p className="error">Sprawdź, czy podane nazwisko jest prawidłowe</p>
              <p><b>Data urodzenia</b></p>
              <input className="loginInput" type="date" placeholder="Podaj swoją datę urodzenia" value={birthdate} onChange={(e) => setBirthDate(e.target.value)}/>
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
