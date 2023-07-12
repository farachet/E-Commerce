const {category}= require('../models/category')
module.exports= {
    AddCategory:(req,res)=>{
        category.create({})
    }
}