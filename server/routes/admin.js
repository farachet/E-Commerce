const router = require("express").Router();
const {
  getAllCategories,
  getCategory,
  addCategories,
  updateCategories,
  getAllProducts,
  getProduct,
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/admincontrollerr");

//router Category
router.get("/all", getAllCategories);
router.get("/One/:id", getCategory);
router.post("/addcategory", addCategories);
router.put("/update/:id", updateCategories);

//router Product
router.get("/allProduct", getAllProducts);
router.get("/OneProduct/:id", getProduct);

//router user
router.get("/AllUser/:role", getAllUsers);
router.get("/OneUser/:id/:role", getUser);
router.post("/addUser", addUser);
router.put("/updateUser/:id/:role", updateUser);
router.delete("/deleteUser/:id/:role", deleteUser);
module.exports = router;
