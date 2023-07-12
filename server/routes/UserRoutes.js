const router=require("express").Router()
const {AddUser}=require("../controllers/usercontroller")



router.get("/user",AddUser)


module.exports=router