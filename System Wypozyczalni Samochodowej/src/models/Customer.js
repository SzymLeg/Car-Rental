const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Inicjalizacja Sequelize z danymi połączenia z MySQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

// Definiowanie modelu User (Customer)
const Customer = sequelize.define('Customer', {
  first_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: true,  // optional field
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  phone_number: {
    type: DataTypes.STRING(15),
    allowNull: true,  // optional field
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: true,  // optional field
  },
  permissions: {
    type: DataTypes.STRING(255),
    allowNull: true,  // optional field
  },
}, {
  // Opcjonalne ustawienia, np. automatyczna aktualizacja tabeli
  timestamps: false,  // jeśli nie chcesz automatycznie dodawania timestampów (createdAt, updatedAt)
});

// Synchronizacja modelu z bazą danych
sequelize.sync()
  .then(() => {
    console.log('Customers table has been created or already exists.');
  })
  .catch(err => {
    console.error('Error creating or syncing the table:', err);
  });

module.exports = Customer;
