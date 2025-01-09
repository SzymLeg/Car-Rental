const express = require('express');
const router = express.Router();
const { register, login , checkEmail} = require('../controllers/authController');

router.post('/register', register);  // Endpoint rejestracji
router.post('/login', login);        // Endpoint logowania
router.get('/check-email', checkEmail); // Endpoint sprawdzania emaila

module.exports = router;
