const {request}= require('../models/request')
module.exports= {
    AddRequest :(req,res)=>{
        request.create({})
    }
}