const {client}= require('../database/models/client')
module.exports= {
    AddClient:(req,res)=>{
        client.create({})
    }
}