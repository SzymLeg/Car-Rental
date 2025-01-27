const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/messageController');

// Tworzenie wiadomości
router.post('/messages', MessageController.createMessage);

// Pobieranie wszystkich wiadomości
router.get('/messages', MessageController.getMessages);

router.get('/messages/waiting_for_reply', MessageController.getUsersWaitingForResponse);

// Pobieranie wiadomości dla danego użytkownika
router.get('/messages/:userId', MessageController.getMessagesForUser);

// Wysyłanie wiadomości do admina
router.post('/messages/admin', MessageController.sendMessageToAdmin);

// Pobieranie wiadomości dla admina
router.get('/messages/admin', MessageController.getMessagesForAdmin);

module.exports = router;
