const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');
const {client}=require('./client')

const personalcollection = sequelize.define('personalcollection', {
    id: {
      type:DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey:true
        },
      })
      client.hasMany(personalcollection, {
        foreignKey: "clientId",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      personalcollection.belongsTo(client);

      module.exports = {
        personalcollection  };