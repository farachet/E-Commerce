const {Products}= require('../database/models/products')
module.exports= {
    AddProducts :(req,res)=>{
<<<<<<< HEAD
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
=======
        Products.create({})
    }
>>>>>>> 5ee5b4b19e2c84521526d813d54894e540e711be
}