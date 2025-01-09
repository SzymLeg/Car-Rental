import React from "react";
import "../styles/login.css";

const Login = () => {
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
            <span className="loginF loginB">
              <h1>Zaloguj się lub utwórz konto</h1>
              <p>Aby uzyskać dostęp do naszych usług, możesz zalogować się przy użyciu danych konta.</p>
              <p><b>Adres e-mail</b></p>
              <input className="loginInput" type="text" placeholder="Wpisz swój adres e-mail" />
              <p className="error">Sprawdź, czy podany adres e-mail jest prawidłowy</p>
              <button className="loginButton"><b>Kontynuuj za pomocą e-maila</b></button>
            </span>

            <span className="loginF loginC">
              <h1>Zaloguj się</h1>
              <p>Już jesteś naszym użytkownikiem. Zaloguj się, aby kontynuować.</p>
              <p><b>Hasło</b></p>
              <input className="loginInput" type="password" placeholder="Wpisz swoje hasło" />
              <p className="error">Sprawdź, czy podane hasło jest prawidłowe</p>
              <button className="loginButton"><b>Dokończ logowanie</b></button>
            </span>

            <span className="loginF registerC">
              <h1>Zarejestruj się</h1>
              <p>Nie jesteś naszym użytkownikiem. Zarejestruj się, aby kontynuować.</p>
              <p><b>Imię</b></p>
              <input className="loginInput" type="text" placeholder="Wpisz swoje imię" />
              <p className="error">Sprawdź, czy podane imię jest prawidłowe</p>
              <p><b>Nazwisko</b></p>
              <input className="loginInput" type="text" placeholder="Wpisz swoje nazwisko" />
              <p className="error">Sprawdź, czy podane nazwisko jest prawidłowe</p>
              <p><b>Data urodzenia</b></p>
              <input className="loginInput" type="date" placeholder="Podaj swoją datę urodzenia" />
              <p className="error">Sprawdź, czy podana data jest prawidłowa</p>
              <p><b>Utwórz hasło</b></p>
              <input className="loginInput" type="password" placeholder="Wpisz swoje hasło" />
              <p className="error">X</p>
              <p><b>Powtórz hasło</b></p>
              <input className="loginInput" type="password" placeholder="Powtórz swoje hasło" />
              <p className="error">Hasła są różne</p>
              <button className="loginButton"><b>Dokończ rejestrację</b></button>
            </span>
          </div>
        </div>
      </div>

      <footer></footer>
    </div>
  );
};

export default Login;
