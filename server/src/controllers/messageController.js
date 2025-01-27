const Message = require('../models/Message'); // Importujemy model Message
const { get } = require('../routes/reservationRoutes');
const sequelize = require('sequelize');

// Tworzenie nowej wiadomości
const createMessage = async (req, res) => {
  const { user_id, to, content } = req.body; // Oczekujemy danych z requestu

  try {
    // Tworzymy nową wiadomość
    const message = await Message.create({
      user_id,
      to, // ID odbiorcy (admina lub innego użytkownika)
      content,
      direction: 'from', // Domyślnie ustawiamy kierunek wiadomości na "from"
      date: new Date(), // Ustawiamy datę wiadomości
    });
    res.status(201).json(message); // Zwracamy utworzoną wiadomość w odpowiedzi
  } catch (err) {
    console.error('Error creating message:', err);
    res.status(500).json({ error: 'An error occurred while creating the message' });
  }
};

// Pobieranie wszystkich wiadomości
const getMessages = async (req, res) => {
  try {
    // Pobieramy wszystkie wiadomości z bazy
    const messages = await Message.findAll();
    res.status(200).json(messages); // Zwracamy wiadomości
  } catch (err) {
    console.error('Error retrieving messages:', err);
    res.status(500).json({ error: 'An error occurred while retrieving messages' });
  }
};

// Pobieranie wiadomości dla danego użytkownika
const getMessagesForUser = async (req, res) => {
  const { userId } = req.params;

  try {
    // Pobieramy wiadomości dla konkretnego użytkownika
    const messages = await Message.findAll({
      where: {
        userId,
      },
    });
    res.status(200).json(messages); // Zwracamy wiadomości
  } catch (err) {
    console.error('Error retrieving messages:', err);
    res.status(500).json({ error: 'An error occurred while retrieving messages for the user' });
  }
};

// Tworzenie nowej wiadomości
const sendMessageToAdmin = async (req, res) => {
  const { user_id, to, content } = req.body; // Oczekujemy danych z requestu

  try {
    // Tworzymy nową wiadomość
    const message = await Message.create({
      user_id,
      to, // ID odbiorcy (admina lub innego użytkownika)
      content,
      direction: 'to', // Domyślnie ustawiamy kierunek wiadomości na "from"
      date: new Date(), // Ustawiamy datę wiadomości
    });
    res.status(201).json(message); // Zwracamy utworzoną wiadomość w odpowiedzi
  } catch (err) {
    console.error('Error creating message:', err);
    res.status(500).json({ error: 'An error occurred while creating the message' });
  }
};


// Funkcja do wyświetlania wiadomości (w tym przypadku dla administracji)
const getMessagesForAdmin = async (req, res) => {
  try {
    // Admin ma dostęp do wszystkich wiadomości
    const messages = await Message.findAll({
      where: {
        direction: 'from',
      },
    });
    res.status(200).json(messages);
  } catch (err) {
    console.error('Error retrieving messages for admin:', err);
    res.status(500).json({ error: 'An error occurred while retrieving messages for admin' });
  }
};

const getUsersWaitingForResponse = async (req, res) => {

  try {
    // Zapytanie do bazy, które zwraca użytkowników, którzy wysłali wiadomość 'from'
    // i nie mają odpowiedzi 'to' na ostatnią wysłaną wiadomość
    const waitingUsers = await Message.findAll({
      attributes: ['user_id'],
      where: {
        direction: 'from', // Wyszukaj tylko wiadomości wysłane przez użytkownika
      },
      group: ['user_id'],
      having: sequelize.literal(`
        user_id NOT IN (
          SELECT user_id 
          FROM Messages
          WHERE direction = 'to'
          AND message_id > (
            SELECT MAX(message_id)
            FROM Messages AS m
            WHERE m.user_id = Messages.user_id AND m.direction = 'from'
          )
        )
      `),
    });

    

    const userIds = waitingUsers.map(user => user.user_id);
    return res.json({ waiting_users: userIds });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Błąd serwera" });
  }
};



module.exports = {
  createMessage,
  getMessages,
  getMessagesForUser,
  sendMessageToAdmin,
  getMessagesForAdmin,
  getUsersWaitingForResponse,
};
