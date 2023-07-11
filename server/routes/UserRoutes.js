const router=require("express").Router()
const {AddUser,addProducts}=require("../controllers/userController")


router.get("/user",AddUser)
router.get("/product",addProducts)

module.exports=router