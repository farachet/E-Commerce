const express = require("express");
const userRoute = require('./routes/UserRoutes')
const sequelize =require('../server/models/configdb');
const { Sequelize } = require("sequelize");

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require('./database-mysql');
// const db = require('./database-mongo');

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
