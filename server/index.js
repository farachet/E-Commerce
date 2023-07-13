const express = require("express");
const sellerRoute = require("./routes/sellerroutes");
const productRoute = require("./routes/productsRouters");
const category = require("./routes/categoryRoutes");
const AdminRouter = require("./routes/admin");



const sequelize = require("../server/models/configdb");
const { Sequelize } = require("sequelize");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/seller", sellerRoute);
app.use("/api/product", productRoute);
app.use("/api/admin", AdminRouter);
app.use("/api/category",category)

sequelize.sync().then(() => console.log("database connected"));
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(PORT, function () {
  console.log("listening on port " + PORT);
});
