const express = require('express');

const cors = require('cors');
const customerRoutes = require('./routes/customerRoutes');  // Importujemy zdefiniowane trasy
const vehicleRoutes = require('./routes/vehicleRoutes');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const authenticateJWT = require('./middleware/authMiddleware');
const bodyParser = require('body-parser');
const messageRoutes = require('./routes/messageRoutes'); // Import tras wiadomości
const adminRoutes = require('./routes/adminRoutes');
const reservationRoutes = require('./routes/reservationRoutes');


// Middleware i inne konfiguracje
const app = express();
app.use(express.json());  // Parsowanie JSON w ciele żądania
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Montowanie tras
app.use('/api/customers', customerRoutes);  // Wszystkie trasy w 'customerRoutes' będą dostępne pod '/api/customers'

app.use('/api/vehicles', vehicleRoutes);

app.use('/api/auth', authRoutes);  // Ścieżki do logowania i rejestracji

app.use('/api', messageRoutes);

app.use('/api/admins', adminRoutes);

app.use('/api/reservations', reservationRoutes);


// Uruchamianie serwera
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
