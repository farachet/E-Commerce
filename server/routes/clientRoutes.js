const router=require("express").Router()
const {AddClient}=require("../controllers/clientController")



router.get("/client",AddClient)


module.exports=router