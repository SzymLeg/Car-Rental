import React from 'react';

function AdminLogin() {
  return (
    <section>
        <div class="resizer">
            <div id="loginPanel">
                <span class="loginF loginB">
                    <h1>Zaloguj się do Extranetu</h1>
                    <p>Ten panel jest przeznaczony wyłącznie dla pracowników przedsiębiorstwa. W celu logowania należy posiadać numer identyfikacyjny.</p>

                    <p><b>Adres e-mail</b></p>
                    <input class="loginInput" type="text" placeholder="Wpisz swój numer identyfikacyjny"/>
                    <p class="error">Sprawdź, czy podany numer identyfikacyjny jest prawidłowy</p>

                    <p><b>Hasło</b></p>
                    <input class="loginInput" type="password" placeholder="Wpisz swoje hasło"/>
                    <p class="error">Sprawdź, czy podane hasło jest prawidłowe</p>

                    <button class="loginButton"><b> Zaloguj do Extranetu </b></button>
                </span>
            </div>
        </div>
    </section>
  );
}

export default AdminLogin;