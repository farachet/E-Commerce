const {request}= require('../database/models/request')
module.exports= {
    AddRequest :(req,res)=>{
        request.create({})
    }
}