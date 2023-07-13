const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');
const {user}=require('./user')

const cards = sequelize.define('cards', {
    id: {
      type:DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey:true
        },
      })
     
      module.exports = {
        cards };