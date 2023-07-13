const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');
const {user}=require('./user')

const personalcollection = sequelize.define('personalcollection', {
    id: {
      type:DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey:true
        },
      })
      user.hasMany(personalcollection, {
        foreignKey: "userId",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      personalcollection.belongsTo(user);

      module.exports = {
        personalcollection  };