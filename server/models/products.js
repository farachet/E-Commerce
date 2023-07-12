const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./configdb');
const {user}=require("./user")
const {category}=require("./category")
const{cards}=require("./cards")

const Products = sequelize.define ('Products',{
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
  user.hasMany(Products, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Products.belongsTo(user)
  
  category.hasMany(Products, {
    foreignKey: 'categoryId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Products.belongsTo(category)
  cards.hasMany(Products, {
    foreignKey: 'cardsId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Products.belongsTo(cards)


  module.exports = {
    Products  };