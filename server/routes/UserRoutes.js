const router=require("express").Router()
const {Login , Register} = require('../controllers/authcontroller')





router.post("/signup",Register)
router.post("/signin",Login)



module.exports=router