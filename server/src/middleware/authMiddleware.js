const jwt = require('jsonwebtoken');
const Customer = require('../models/Customer');

// Klucz JWT, powinien być w .env
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Middleware do weryfikacji tokenu JWT
function authenticateJWT(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user; // Zapisanie informacji o użytkowniku w żądaniu
    next();
  });
}

module.exports = authenticateJWT;
