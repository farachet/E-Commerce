const router=require("express").Router()

const {AddProducts , getAllProducts }=require("../controllers/productscontroller")






router.get("/products",AddProducts )

router.get("/getAll",getAllProducts )




module.exports=router