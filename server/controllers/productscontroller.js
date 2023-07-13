const {Products}= require('../database/models/products')
module.exports= {
    AddProducts :(req,res)=>{
        Products.create({

            productname: req.body.productname,
            price: req.body.price,
            reference: req.body.reference,
            image: req.body.image,
            status: req.body.status,
           


        })
    },

    getAllProducts: (req, res) => {
        Products.findAll()
          .then((result) => {
            res.json(result)
          })
          .catch((err) => {
            res.status(500).send(err)
          })
      }
}