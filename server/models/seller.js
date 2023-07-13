const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./configdb');


const seller = sequelize.define('seller', {
  id : {
   type:DataTypes.INTEGER,
   autoIncrement : true,
   primaryKey:true
  },
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
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
})


module.exports = {
    seller };