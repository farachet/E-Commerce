const express = require("express");
const userRoute = require('./routes/userRoutes')
const cardsRoute = require('./routes/cardsRoutes')
const productRoute = require('./routes/productsRouters')
const postsRouter = require('./routes/postsRouter')
const category=require("./controllers/categorycontroller")
const personalcollection=require("./controllers/personnalcollcontroller")
const admin=require("./controllers/admincontrollerr")
const request = require("./controllers/requestcontroller")
const sequelize =require('../server/models/configdb');
const { Sequelize } = require("sequelize");



const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/user", userRoute);

sequelize.sync()
.then(()=>console.log('database connected') )
sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully");
}).catch((err) => {
  console.error("Unable to connect to the database:", err);
});

app.listen(PORT, function () {
  console.log("listening on port "+PORT);
});
