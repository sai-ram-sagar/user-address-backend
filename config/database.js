const { Sequelize } = require('sequelize');

// Initialize the database connection (SQLite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',  // Database file will be stored here
});

module.exports = sequelize;
