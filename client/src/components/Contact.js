import React from 'react';

function Contact() {
  return (
    <section>
        <div class="resizer">
            <h1>Biuro Obsługi Klienta</h1>
            <p>Nie znalazłeś odpowiedzi na swoje pytanie w <a href="faq.html">Najczęściej Zadawanych Pytaniach</a>? Nie szkodzi! Skorzystaj z poniższego czatu i zadaj nam pytanie!</p>
            <p>Administracja odpowie na Twoje pytanie najszybciej, jak to możliwe!</p>
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
            <br/>
        </div>
    </section>
  );
}

export default Contact;