import React from 'react';

function AdminProfile() {

return (
    <section>
        <div class="resizer">
            <div class="adminGrid">
                <div class="adminLogged">
                    <div class="adminWelcome">
                        <div class="welcomeTop">
                            <img src="avatar.png" alt=""/>
                        </div>
                        <div class="welcomeBottom">
                            <div class="welcomeText">
                                <h1>Witaj!</h1>
                                <h2>Zalogowano jako Administrator [MIASTO]</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="editDatabase">
                    <div class="accessDatabase">
                        <h2>Wejdź do bazy danych:</h2>
                        <button>Baza danych</button>
                    </div>
                </div>

                <div class="chatPanel">
                    <div class="chatResponse">
                        <h2>Na odpowiedź czekają użytkownicy o ID:</h2>
                        <p>1, 3, 8, 14, 21, 37</p>
                    </div>
                    <div class="chatFind">
                        <div class="chatFindLeft">
                            <input type="number" name="" id="" placeholder="Wpisz ID klienta"/>
                        </div>
                        <div class="chatFindRight">
                            <button>Załaduj czat z użytkownikiem</button>
                        </div>
                    </div>
                    <div class="chatChat">
                        <div id="contactBox">
                            <div id="messenger">
                                <div id="messageHistory">
                                    <div class="message"><div class="textMessageFrom">lalala <span class="timestamp from">10:30</span> </div></div>
                                    <div class="message"><div class="textMessageTo">lalala <span class="timestamp to">10:31</span> </div></div>
                                </div>
                            </div>
            
                            <div id="sendMessage">
                                <input type="text" id="messageInput" placeholder="Napisz wiadomość..." />
                                <button id="sendButton">Wyślij</button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        </div>
    </section>
    );
}

export default AdminProfile;