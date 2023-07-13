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
    
  },

deleteAll : (req , res) => {

Products.destroy({where : {}})
.then(() => {
  res.status(204).send('deleted')
})
.catch((err) => {
  res.status(500).send(err)
})

},

deleteById : (req , res) => {
const id = req.params.id
Products.destroy({where:{id}})
.then(() => {
  res.status(204).send([])
})
.catch((err) => {
  res.status(500).send(err)
})
}

};


