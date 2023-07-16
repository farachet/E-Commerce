const router=require("express").Router()
const {AddProducts , getAllProducts , UpdateProduct, deleteAll, deleteById, getAllProductsByName}=require("../controllers/productscontroller")






router.post("/AddProduct",AddProducts )
router.get("/getAll/:sellerId",getAllProducts )
router.put("/edit/:id",UpdateProduct )
router.delete("/deleteAll", deleteAll )
router.delete("/deleteByid/:id", deleteById )
router.get("/get/:productname", getAllProductsByName )



module.exports=router