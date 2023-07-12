const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./configdb');
const {user}= require("./user")

const request = sequelize.define ('request',{
    id : {
        type:DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey:true
       },
      productname: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        
      },
      reference: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
  })
  user.hasMany(request, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  request.belongsTo(user)
  module.exports = {
    request  };