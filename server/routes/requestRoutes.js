const router=require("express").Router()
const {AddRequest}=require("../controllers/requestcontroller")



router.get("/request",AddRequest)


module.exports=router