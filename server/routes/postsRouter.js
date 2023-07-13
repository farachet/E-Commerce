const router=require("express").Router()
const {AddPosts }=require("../controllers/postscontroller")



router.get("/posts",AddPosts )


module.exports=router