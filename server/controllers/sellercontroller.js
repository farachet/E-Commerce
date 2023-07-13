const {seller}= require('../models/seller')
module.exports= {
    AddSeller:(req,res)=>{
        seller.create({})
    }
}