const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Inicjalizacja Sequelize z danymi połączenia z MySQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const Reservation = sequelize.define('Reservation', {
    customer_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: {
            model: 'Customers', // Nazwa tabeli powiązanej
            key: 'id'
        },
        onDelete: 'CASCADE',
    },
    vehicle_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: {
            model: 'Vehicles', // Nazwa tabeli powiązanej
            key: 'id'
        },
        onDelete: 'CASCADE',
    },
    admin_id: { 
        type: DataTypes.INTEGER, 
        allowNull: true, 
        references: {
            model: 'Admins', // Nazwa tabeli powiązanej
            key: 'id'
        },
        onDelete: 'SET NULL',
    },
    start_date: { type: DataTypes.DATEONLY, allowNull: false },
    end_date: { type: DataTypes.DATEONLY, allowNull: false },
    pickup_time: { type: DataTypes.TIME, allowNull: false },
    return_time: { type: DataTypes.TIME, allowNull: false },
    status: { 
        type: DataTypes.ENUM('Zarezerwowane', 'Wynajmowane', 'Zakończone', 'Anulowane'), 
        allowNull: false,
        defaultValue: 'Zarezerwowane',
    },
    pickup_location: { type: DataTypes.STRING, allowNull: false }, // Miejsce odbioru
    return_location: { type: DataTypes.STRING, allowNull: false }, // Miejsce zwrotu
    amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false }, // Kwota rezerwacji
    drivers_count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }, // Liczba kierowców
    baby_seat_0_1_count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }, // Liczba fotelików 0-1
    baby_seat_1_3_count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }, // Liczba fotelików 1-3
    baby_seat_3_12_count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }, // Liczba fotelików 3-12
    gps_count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }, // Liczba GPS-ów
});

// Synchronizacja modelu z bazą danych
sequelize.sync()
  .then(() => {
    console.log('Reservations table has been created or already exists.');
  })
  .catch(err => {
    console.error('Error creating or syncing the table:', err);
  });

module.exports = Reservation;
