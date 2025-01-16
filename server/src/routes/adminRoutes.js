// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController');

// Logowanie admina
router.post('/login', AdminController.loginAdmin);

// Tworzenie nowego admina
router.post('/create', AdminController.createAdmin);

// Pobieranie wszystkich adminów
router.get('/', AdminController.getAllAdmins);

// Usuwanie admina
router.delete('/:id', AdminController.deleteAdmin);

module.exports = router;
