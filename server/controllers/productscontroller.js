const {Products}= require('../models/products')
module.exports= {
    AddProducts :(req,res)=>{
        Products.create({})
    }
}