const router=require("express").Router()
const {Addpersonalcollection}=require("../controllers/personnalcollcontroller")



router.get("/collection",Addpersonalcollection)


module.exports=router