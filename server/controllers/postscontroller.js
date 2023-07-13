const {posts}= require('../database/models/posts')
module.exports= {
    AddPosts :(req,res)=>{
        posts.create({})
    }
}