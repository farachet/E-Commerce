const router=require("express").Router()
const {AddAdmin}=require("../controllers/admincontrollerr")



router.get("/admin",AddAdmin)


module.exports=router