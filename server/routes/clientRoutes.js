const router=require("express").Router()
const {updateClient,deleteClient}=require("../controllers/clientController")



router.put("/edit/:clientId",updateClient)
router.delete("/delete/:clientId",deleteClient)


module.exports=router