const {User,Products}= require('../models/database')

module.exports= {
    AddUser:(req,res)=>{
        User.create
    }
}