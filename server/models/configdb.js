const { Sequelize } = require('sequelize');



const sequelize = new Sequelize('commerce', 'root', 'firemanfireman@@', {
  host: 'localhost',
  dialect: 'mysql',
});




module.exports = sequelize;