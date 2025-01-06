const express = require('express');
const app = express();
const cors = require('cors');
const customerRoutes = require('./routes/customerRoutes');  // Importujemy zdefiniowane trasy
const vehicleRoutes = require('./routes/vehicleRoutes');

// Middleware i inne konfiguracje
app.use(express.json());  // Parsowanie JSON w ciele żądania
app.use(cors());

// Montowanie tras
app.use('/api/customers', customerRoutes);  // Wszystkie trasy w 'customerRoutes' będą dostępne pod '/api/customers'

app.use('/api/vehicles', vehicleRoutes);


// Uruchamianie serwera
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
