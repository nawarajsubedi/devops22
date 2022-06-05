
// Include Sequelize module
const Sequelize = require('sequelize')
// Creating new Object of Sequelize

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    dialect: 'mysql',
    port: process.env.PORT,
    host: process.env.HOST
  }
);

// Exporting the sequelize object. 
// We can use it in another file
// for creating models
module.exports = sequelize