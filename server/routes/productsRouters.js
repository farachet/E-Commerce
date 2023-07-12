const router=require("express").Router()
const {AddProducts }=require("../controllers/productscontroller")



router.get("/product",AddProducts )


module.exports=router