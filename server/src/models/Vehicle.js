const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Inicjalizacja Sequelize z danymi połączenia z MySQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const Vehicle = sequelize.define('Vehicle', {
    brand: { type: DataTypes.STRING, allowNull: false },
    model: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.ENUM('economy', 'suv', 'van', 'luxury'), allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
    license_plate: { type: DataTypes.STRING, unique: true, allowNull: false },
    status: { 
        type: DataTypes.ENUM('available', 'rented', 'maintenance', 'reserved'), 
        defaultValue: 'available', 
        allowNull: false 
    },
    daily_rate: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    mileage: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
    fuel_type: { type: DataTypes.ENUM('petrol', 'diesel', 'electric', 'hybrid'), allowNull: false },
    seats: { type: DataTypes.INTEGER, allowNull: false },
    transmission: { type: DataTypes.ENUM('manual', 'automatic'), allowNull: false },
    insured: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    doors: { type: DataTypes.INTEGER, allowNull: false },
    luggage_capacity: { type: DataTypes.INTEGER, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    localization: { type: DataTypes.STRING, allowNull: false },
}, {
    timestamps: false, // Wyłączenie createdAt i updatedAt
});

// Synchronizacja modelu z bazą danych
sequelize.sync()
  .then(() => {
    console.log('Vehicles table has been created or already exists.');
  })
  .catch(err => {
    console.error('Error creating or syncing the table:', err);
  });

module.exports = Vehicle;
