const router=require("express").Router()
const {sendMail,login}=require("../controllers/MailerController")

router.post("/sendMail",sendMail)    
router.post("/login",login)

module.exports=router