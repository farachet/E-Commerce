const express = require("express");
const sellerRoute = require("./routes/sellerroutes");
const productRoute = require("./routes/productsRouters");
const categoryRouter = require("./routes/categoryRoutes");
const AdminRouter = require("./routes/admin");
const cardsRouter = require("./routes/cardsRoutes");
const clientRouter = require("./routes/clientRoutes");
const postsRouter = require("./routes/postsRouter");
const personalcollectionRouter = require("./routes/personnalcollRouters");

const sequelize = require("./database/configdb");
const { Sequelize } = require("sequelize");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/seller", sellerRoute);
app.use("/api/product", productRoute);
app.use("/api/admin", AdminRouter);
app.use("/api/cards", cardsRouter);
app.use("/api/client", clientRouter);
app.use("/api/posts", postsRouter);
app.use("/api/personalcollection ", personalcollectionRouter);
//app.use("/api/category",categoryRouter);

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
