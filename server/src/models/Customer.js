const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const bcrypt = require('bcryptjs');

// Inicjalizacja Sequelize z danymi połączenia z MySQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

// Definiowanie modelu User (Customer)
const Customer = sequelize.define('Customer', {
  first_name: { type: DataTypes.STRING(100), allowNull: false },
  last_name: { type: DataTypes.STRING(100), allowNull: false },
  address: { type: DataTypes.STRING(255), allowNull: true },
  email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
  phone_number: { type: DataTypes.STRING(15), allowNull: true },
  birthdate: { type: DataTypes.DATE, allowNull: true },
  permissions: { type: DataTypes.STRING(255), allowNull: true },
  password: { type: DataTypes.STRING(255), allowNull: false },  
}, {
  timestamps: false,
});

// Przed zapisaniem użytkownika, zahaszowanie hasła
Customer.beforeCreate(async (customer, options) => {
  const salt = await bcrypt.genSalt(10);
  customer.password = await bcrypt.hash(customer.password, salt);
});

// Metoda do porównania hasła
Customer.prototype.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Synchronizacja modelu z bazą danych
sequelize.sync()
  .then(() => {
    console.log('Customers table has been created or already exists.');
  })
  .catch(err => {
    console.error('Error creating or syncing the table:', err);
  });

module.exports = Customer;
