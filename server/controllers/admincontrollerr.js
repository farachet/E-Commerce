const { admin } = require("../models/admin");

const { Products } = require("../models/products");
const { category } = require("../models/category");
module.exports = {
  //Users
  //GetAll
  getAllUsers(req, res) {
    const { role } = req.params;

    user
      .findAll({ where: { role } })
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to get users" });
      });
  },
  //Get one
  getUser(req, res) {
    const { id, role } = req.params;

    user
      .findOne({ where: { id, role } })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: `${role} not found` });
        }
        res.status(200).json(user);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: `Failed to get ${role}` });
      });
  },
  //Add user
  addUser(req, res) {
    const { firstName, lastName, email, password, image, birthday, role } =
      req.body;

    user
      .create({
        firstName,
        lastName,
        email,
        password,
        image,
        birthday,
        role,
      })
      .then((createdUser) => {
        res.status(201).json(createdUser);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: `Failed to create ${role}` });
      });
  },

  //Update user
  updateUser(req, res) {
    const { id, role } = req.params;
    const { firstName, lastName, email, password, image, birthday } = req.body;

    user
      .update(
        { firstName, lastName, email, password, image, birthday },
        { where: { id, role } }
      )
      .then(([rowsUpdated]) => {
        if (rowsUpdated === 0) {
          return res.status(404).json({ error: `${role} not found` });
        }
        res.status(200).json({ message: `${role} updated successfully` });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: `Failed to update ${role}` });
      });
  },
  //delete user
  deleteUser(req, res) {
    const { id, role } = req.params;

    user
      .destroy({ where: { id, role } })
      .then((rowsDeleted) => {
        if (rowsDeleted === 0) {
          return res.status(404).json({ error: `${role} not found` });
        }
        res.status(200).json({ message: `${role} deleted successfully` });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: `Failed to delete ${role}` });
      });
    //Products
    //get all product
  },
  getAllProducts(req, res) {
    Products.findAll({})
      .then((products) => {
        res.status(200).json(products);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to get products" });
      });
  },

  //Get one product
  getProduct(req, res) {
    const { id } = req.params;

    Products.findByPk(id)
      .then((product) => {
        if (!product) {
          return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(product);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to get product" });
      });
    //Categories
    //Get all categories
  },
  getAllCategories(req, res) {
    category
      .findAll({})
      .then((categorie) => {
        res.status(200).json(categorie);
      })
      .catch((error) => {
        res.status(500).json({ error: "Failed to get Categories" });
      });
    //get one categories
  },
  getCategory(req, res) {
    const { id } = req.params;

    category
      .findByPk(id)
      .then((category) => {
        if (!category) {
          return res.status(404).json({ error: "Category not found" });
        }
        res.status(200).json(category);
      })
      .catch((error) => {
        console.error(error);
        console.log(error.message);
        res.status(500).json({ error: "Failed to get category" });
      });
  },
  //add categories
  addCategories(req, res) {
    const { categoryname } = req.body;
    category
      .create({
        categoryname,
      })
      .then((categorie) => {
        res.status(201).json(categorie);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json({ error: err });
      });
  },
  //update categories
  updateCategories(req, res) {
    const { categoryname } = req.body;
    const categoryId = req.params.id;

    category
      .update({ categoryname }, { where: { id: categoryId } })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to update categories" });
      });
  },
};
