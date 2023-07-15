const router=require("express").Router()
const {AddProducts , getAllProducts , UpdateProduct, deleteAll, deleteById,getAllProductss}=require("../controllers/productscontroller")






router.post("/AddProduct",AddProducts )
router.get("/getAll",getAllProducts )
router.put("/edit/:id",UpdateProduct )
router.delete("/deleteAll", deleteAll )
router.delete("/deleteByid/:id", deleteById )
router.get("/getAllProducts",getAllProductss)


module.exports=router