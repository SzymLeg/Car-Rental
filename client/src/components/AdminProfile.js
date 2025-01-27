import React, { useState, useEffect } from 'react';
import axios from 'axios';
import avatarImage from '../styles/avatar.png';

function AdminProfile() {
    const [waitingUsers, setWaitingUsers] = useState([]);
    const adminInfo = JSON.parse(localStorage.getItem('adminInfo'));

    const fetchWaitingUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/messages/waiting_for_reply');
            setWaitingUsers(response.data.waiting_users); // Ustawiamy dane po odpowiedzi
        } catch (error) {
            console.error('Error fetching waiting users:', error);
        }
    };

    useEffect(() => {
        fetchWaitingUsers();
    }, []); // Pusta tablica zależności oznacza, że wywoła się tylko raz po załadowaniu

    


    const citiesDictionary = {
        "katowice": "Katowice",
        "krakow": "Kraków",
        "wroclaw": "Wrocław",
        // Możesz dodać więcej miast tutaj
    };
    
    // Funkcja do zamiany miasta
    function getCityName(city) {
        const normalizedCity = city.toLowerCase(); // Normalizujemy na małe litery
        return citiesDictionary[normalizedCity] || city; // Jeśli miasto istnieje w słowniku, zwróć jego poprawną nazwę, inaczej zwróć oryginał
    }

const handleDatabaseButton = () => {
    window.location.href = "http://localhost/phpmyadmin/index.php";
};

const [messages, setMessages] = useState([]); // Przechowywanie wiadomości
const [newMessage, setNewMessage] = useState(''); // Wartość nowej wiadomości
const [user_id, setUser_id] = useState(''); // Wartość nowej wiadomości

  // Funkcja do pobierania wiadomości z backendu
  
    const fetchMessages = async () =>{
    if (!user_id){
         return; // Jeśli nie podano ID użytkownika, nie wysyłaj zapytania
    }

        try {
        const response = await axios.get('http://localhost:5000/api/messages');
        const filteredMessages = response.data.filter((message) => 
            message.user_id === parseInt(user_id)
          );
        setMessages(filteredMessages);
        fetchWaitingUsers();
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    
  // Funkcja do wysyłania wiadomości
  const sendMessage = async () => {
    if (!newMessage) return; // Jeśli pole wiadomości jest puste, nie wysyłaj

    try {
      const response = await axios.post('http://localhost:5000/api/messages/admin', {
        user_id: user_id, 
        direction: 'to', 
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
        <div class="resizer">
            <div class="adminGrid">
                <div class="adminLogged">
                    <div class="adminWelcome">
                        <div class="welcomeTop">
                            <img src={avatarImage} alt=""/>
                        </div>
                        <div class="welcomeBottom">
                            <div class="welcomeText">
                                <h1>Witaj!</h1>
                                <h2>Zalogowano jako Administrator {getCityName(adminInfo.city)}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="editDatabase">
                    <div class="accessDatabase">
                        <h2>Wejdź do bazy danych:</h2>
                        <button onClick={handleDatabaseButton}>Baza danych</button>
                    </div>
                </div>

                <div class="chatPanel">
                    <div class="chatResponse">
                        <h2>Na odpowiedź czekają użytkownicy o ID:</h2>
                        {waitingUsers.length > 0 ? (
    <p>{waitingUsers.join(', ')}</p> // Wyświetla całą listę użytkowników raz
) : (
    <p>Brak użytkowników czekających na odpowiedź.</p>
)}
                    </div>
                    <div class="chatFind">
                        <div class="chatFindLeft">
                            <input type="number" name="" id="" placeholder="Wpisz ID klienta" onChange={(e) => setUser_id(e.target.value)} />
                        </div>
                        <div class="chatFindRight">
                            <button onClick={fetchMessages}>Załaduj czat z użytkownikiem</button>
                        </div>
                    </div>
                    <div class="chatChat">
                        <div id="contactBox">
                            <div id="messenger">
                                <div id="messageHistory">
                                {messages.map((message) => (
                <div key={message.message_id} className="message">
                  <div className={message.direction === 'from' ? 'textMessageFrom' : 'textMessageTo'}>
                    {message.content} <span className={`timestampAdmin ${message.direction}`}>{new Date(message.message_date).toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
                                </div>
                            </div>
            
                            <div id="sendMessage">
                                <input type="text" id="messageInput" placeholder="Napisz wiadomość..." value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}/>
                                <button id="sendButton" onClick={sendMessage}>Wyślij</button>
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