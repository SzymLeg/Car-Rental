import React, { useState } from 'react';
import axios from 'axios';

function AdminLogin() {
// Stany dla pól i błędów
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);

// Funkcja obsługująca wysłanie formularza
const handleLogin = async () => {
  setError(''); // Czyść błąd przy nowym wysłaniu
  setLoading(true); // Ustaw ładowanie

  try {
    const response = await axios.post('http://localhost:5000/api/admins/login', {
      email,
      password,
    });

    // Jeśli logowanie zakończy się sukcesem
    console.log('Login successful:', response.data);
    alert('Zalogowano pomyślnie!'); // Zastąp później przekierowaniem
    setLoading(false);
  } catch (err) {
    // Obsługa błędów
    console.error(err);
    setError(err.response?.data?.message || 'Logowanie nie powiodło się.');
    setLoading(false);
  }
};


  return (
    <section>
        <div class="resizer">
            <div id="loginPanel">
                <span class="loginF loginB">
                    <h1>Zaloguj się do Extranetu</h1>
                    <p>Ten panel jest przeznaczony wyłącznie dla pracowników przedsiębiorstwa. W celu logowania należy posiadać numer identyfikacyjny.</p>

                    <p><b>Adres e-mail</b></p>
                    <input class="loginInput" type="text" placeholder="Wpisz swój numer identyfikacyjny" value={email}
              onChange={(e) => setEmail(e.target.value)}/>
                    <p class="error">Sprawdź, czy podany numer identyfikacyjny jest prawidłowy</p>

                    <p><b>Hasło</b></p>
                    <input class="loginInput" type="password" placeholder="Wpisz swoje hasło" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
                    <p class="error">Sprawdź, czy podane hasło jest prawidłowe</p>

                    <button class="loginButton" onClick={handleLogin}><b> Zaloguj do Extranetu </b></button>
                </span>
            </div>
        </div>
    </section>
  );
}

export default AdminLogin;