const router = require("express").Router();
const {
  getAllCategories,
  getCategory,
  addCategories,
  updateCategories,
  getAllProducts,
  getProduct,
  getAllSellers,
  getAllClients,
  deleteClient,
  deleteSeller,
  deleteCategory,
} = require("../controllers/admincontrollerr");

//router Category

router.get("/allcategories", getAllCategories);
router.get("/One/:id", getCategory);
router.post("/addcategory", addCategories);
router.put("/update/:id", updateCategories);
router.delete("/delete/:id", deleteCategory);

//router Product
router.get("/allProduct", getAllProducts);
router.get("/OneProduct/:id", getProduct);

//router user
router.get("/AllSellers", getAllSellers);
router.get("/AllClients", getAllClients);
// router.get("/OneUser/:id/:role", getUser);
// router.post("/addUser", addUser);
// router.put("/updateUser/:id/:role", updateUser);
router.delete("/deleteClient/:clientid", deleteClient);
router.delete("/deleteSeller/:id", deleteSeller);
module.exports = router;
