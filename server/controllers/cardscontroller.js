const {cards}= require('../database/models/cards')
module.exports= {
    AddCards:(req,res)=>{
        cards.create({})
    }
}
