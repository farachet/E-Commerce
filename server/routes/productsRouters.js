const router = require("express").Router();
const {
  AddProducts,
  getAllProducts,
  UpdateProduct,
  deleteAll,
  deleteById,
} = require("../controllers/productscontroller");

router.post("/AddProduct", AddProducts);
router.get("/getAll", getAllProducts);
router.put("/edit/:id", UpdateProduct);
router.delete("/deleteAll", deleteAll);
router.delete("/deleteByid/:id", deleteById);

module.exports = router;
