const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./configdb');

const User = sequelize.define('Users', {
  id : {
   type:DataTypes.INTEGER,
   autoIncrement : true,
   primaryKey:true
  },
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Dateofbirth: {
    type: DataTypes.STRING,
    allowNull: true
  }})
  const Products = sequelize.define ('Products',{
    id : {
        type:DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey:true
       },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      Price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        
      },
      Reference: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
  })
  
  module.exports = {
    User,
    Products
  };