const {posts}= require('../models/posts')
module.exports= {
    AddPosts :(req,res)=>{
        posts.create({})
    }
}