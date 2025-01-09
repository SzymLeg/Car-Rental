const Customer = require('../models/Customer');
const jwt = require('jsonwebtoken');

// Klucz JWT, powinien być w .env
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Rejestracja
async function register(req, res) {
  const { first_name, last_name, email, password } = req.body;

  try {
    const existingCustomer = await Customer.findOne({ where: { email } });
    if (existingCustomer) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const customer = await Customer.create({ first_name, last_name, email, password });
    res.status(201).json({ message: 'Customer registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Logowanie
async function login(req, res) {
  const { email, password } = req.body;

  try {
    const customer = await Customer.findOne({ where: { email } });
    if (!customer) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await customer.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: customer.id, email: customer.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ 
      message: 'Login successful',
      token, 
      user: {
      firstName: customer.first_name,
      lastName: customer.last_name,
    },
  });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Sprawdzenie, czy email istnieje w bazie
async function checkEmail(req, res) {
  const { email } = req.query;

  try {
    const existingCustomer = await Customer.findOne({ where: { email } });
    if (existingCustomer) {
      return res.status(200).json({ exists: true, message: 'Email exists' });
    } else {
      return res.status(200).json({ exists: false, message: 'Email not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}


module.exports = { register, login, checkEmail };
