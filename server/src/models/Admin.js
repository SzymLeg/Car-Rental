const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Inicjalizacja Sequelize z danymi połączenia z MySQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

// Tworzenie modelu Admin
const Admin = sequelize.define('Admin', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'admin',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

// Synchronizacja modelu z bazą danych
sequelize.sync()
  .then(() => {
    console.log('Admins table has been created or already exists.');
  })
  .catch(err => {
    console.error('Error creating or syncing the table:', err);
  });

module.exports = Admin;
