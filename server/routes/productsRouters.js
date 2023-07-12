const router=require("express").Router()
<<<<<<< HEAD
const {AddProducts , getAllProducts }=require("../controllers/productscontroller")
=======
const {AddProducts }=require("../controllers/productscontroller")
>>>>>>> 5ee5b4b19e2c84521526d813d54894e540e711be



router.get("/product",AddProducts )
<<<<<<< HEAD
router.get("/getAll",getAllProducts )
=======
>>>>>>> 5ee5b4b19e2c84521526d813d54894e540e711be


module.exports=router