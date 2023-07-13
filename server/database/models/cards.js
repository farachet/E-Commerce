const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');
const {client}=require('./client')
const {Products} =require('./products')

const cards = sequelize.define('cards', {
    id: {
      type:DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey:true
        },
      })
  client.hasOne(cards)
  cards.belongsTo(client)
  cards.hasMany(Products, {
    foreignKey: 'productId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Products.belongsTo(cards)
  
      module.exports = {
        cards };