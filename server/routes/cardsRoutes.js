const router=require("express").Router()
const {AddCards}=require("../controllers/cardscontroller")



router.get("/card",AddCards)


module.exports=router