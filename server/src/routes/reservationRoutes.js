const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// Trasy dla rezerwacji
router.get('/', reservationController.getAllReservations); // Pobierz wszystkie rezerwacje
router.get('/user/:customer_id', reservationController.getReservationsByUserId);
router.get('/:id', reservationController.getReservationById); // Pobierz rezerwację po ID
router.post('/', reservationController.createReservation); // Utwórz nową rezerwację
router.put('/:id', reservationController.updateReservation); // Zaktualizuj istniejącą rezerwację
router.delete('/:id', reservationController.deleteReservation); // Usuń rezerwację po ID

module.exports = router;
