const {admin} = require('./admin');
const {cards} = require('./cards');
const {category} = require ('./category');
const {user}=require('./user');
const {personalcollection} = require('./personalcollections');
const{posts}=require('./posts');
const{Products}=require('./products');

const { Sequelize } = require('sequelize');
const sequelize = require('./configdb');
console.log("hi")

  
  user.hasMany(Products, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Products.belongsTo(user)
  
