const {personalcollection }= require('../models/personalcollections')
module.exports= {
    Addpersonalcollection :(req,res)=>{
        personalcollection .create({})
    }
}