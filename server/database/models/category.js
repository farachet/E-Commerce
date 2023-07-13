const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');

const category = sequelize.define('category', {
    id: {
      type:DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey:true
        },
    categoryname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  module.exports = {
    category };