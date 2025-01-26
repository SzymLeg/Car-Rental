import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contact() {
  const [messages, setMessages] = useState([]); // Przechowywanie wiadomości
  const [newMessage, setNewMessage] = useState(''); // Wartość nowej wiadomości

    // Pobierz ID zalogowanego użytkownika
const user = JSON.parse(localStorage.getItem("userName"));


  // Funkcja do pobierania wiadomości z backendu
  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await axios.get('http://localhost:5000/api/messages');
        const filteredMessages = response.data.filter((message) => 
            message.user_id === parseInt(user.id) || message.to === parseInt(user.id)
          );
        setMessages(filteredMessages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    }

    fetchMessages();
  }, []); // Uruchamia się tylko raz przy pierwszym załadowaniu komponentu

  // Funkcja do wysyłania wiadomości
  const sendMessage = async () => {
    if (!newMessage) return; // Jeśli pole wiadomości jest puste, nie wysyłaj

    try {
    
        
      const response = await axios.post('http://localhost:5000/api/messages', {
        user_id: user.id, // Przykładowe ID użytkownika
        to: 31, // Kierunek wiadomości
        content: newMessage,
      });

      // Po wysłaniu wiadomości, dodaj ją do stanu
      setMessages([...messages, response.data]);
      setNewMessage(''); // Wyczyść pole wiadomości
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <section>
      <div className="resizer">
        <h1>Biuro Obsługi Klienta</h1>
        <p>Nie znalazłeś odpowiedzi na swoje pytanie w <a href="/faq">Najczęściej Zadawanych Pytaniach</a>? Nie szkodzi! Skorzystaj z poniższego czatu i zadaj nam pytanie!</p>
        <p>Administracja odpowie na Twoje pytanie najszybciej, jak to możliwe!</p>
        
        <div id="contactBox">
          <div id="messenger">
            <div id="messageHistory">
              {messages.map((message) => (
                <div key={message.message_id} className="message">
                  <div className={message.direction === 'to' ? 'textMessageFrom' : 'textMessageTo'}>
                    {message.content} <span className={`timestamp ${message.direction}`}>{new Date(message.message_date).toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="sendMessage">
            <input
              type="text"
              id="messageInput"
              placeholder="Napisz wiadomość..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button id="sendButton" onClick={sendMessage}>Wyślij</button>
          </div>
        </div>
        <br />
      </div>
    </section>
  );
}

export default Contact;
