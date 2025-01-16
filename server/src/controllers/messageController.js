const Message = require('../models/Message'); // Importujemy model Message

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

// Funkcja do wysyłania wiadomości do użytkownika (np. admin)
const sendMessageToAdmin = async (req, res) => {
  const { userId, content } = req.body; // Oczekujemy ID użytkownika i treść wiadomości

  try {
    // Wiadomość od użytkownika do admina
    const message = await Message.create({
      userId,
      to: null, // Brak ID odbiorcy, ponieważ admin będzie traktowany jako wspólny odbiorca
      content,
      direction: 'from',
      date: new Date(),
    });
    res.status(201).json(message); // Zwracamy wiadomość
  } catch (err) {
    console.error('Error sending message to admin:', err);
    res.status(500).json({ error: 'An error occurred while sending the message to admin' });
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

module.exports = {
  createMessage,
  getMessages,
  getMessagesForUser,
  sendMessageToAdmin,
  getMessagesForAdmin,
};
