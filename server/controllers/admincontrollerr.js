const {admin}= require('../models/admin')
module.exports= {
    AddAdmin:(req,res)=>{
        admin.create({})
    }
}
