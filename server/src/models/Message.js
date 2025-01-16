const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Inicjalizacja Sequelize z danymi połączenia z MySQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const Message = sequelize.define('Message', {
  message_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  direction: {
    type: DataTypes.ENUM('from', 'to'),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  message_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
    timestamps: false,
  }
);

// Synchronizacja modelu z bazą danych
sequelize.sync()
  .then(() => {
    console.log('Messages table has been created or already exists.');
  })
  .catch(err => {
    console.error('Error creating or syncing the table:', err);
  });

module.exports = Message;
