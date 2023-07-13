const {personalcollection }= require('../database/models/personalcollections')
module.exports= {
    Addpersonalcollection :(req,res)=>{
        personalcollection .create({})
    }
}