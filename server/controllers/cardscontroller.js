const {cards}= require('../models/cards')
module.exports= {
    AddCards:(req,res)=>{
        cards.create({})
    }
}
