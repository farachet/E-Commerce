const router=require("express").Router()
const {addToCart,getClientCart,deleteProductFromCart}=require("../controllers/cardscontroller")



router.post("/add/:clientId",addToCart)
router.get("/getAll/:clientId",getClientCart)
router.delete("/delete/:productId",deleteProductFromCart)



module.exports=router