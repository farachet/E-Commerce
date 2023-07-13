const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');
const {user}=require('./user')

const posts = sequelize.define('posts', {
    id: {
      type:DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey:true
        },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
   
  })
  user.hasMany(posts, {
    foreignKey: "userId",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  posts.belongsTo(user);
  module.exports = {
    posts  };