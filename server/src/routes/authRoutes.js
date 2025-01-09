const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);  // Endpoint rejestracji
router.post('/login', login);        // Endpoint logowania

module.exports = router;
