module.exports = {
  AddProducts: (req, res) => {
    Products.create({
      productname: req.body.productname,
      price: req.body.price,
      reference: req.body.reference,
      image: req.body.image,
      status: req.body.status,
      userId : req.body.userId,
      categoryId : req.body.categoryId
    })
      .then((result) => {
        res.status(200).send(result)
      })
      .catch((err) => {
        res.status(500).send(err)
      });
  },

  getAllProducts: (req, res) => {
    Products.findAll()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.status(500).send(err)
      });
  },

  UpdateProduct: (req, res) => {
    const id = req.params.id;
    const productname = req.body.productname;
    const price = req.body.price;
    const reference = req.body.reference;
    const image = req.body.image;
    const status = req.body.status;

    Products.update(
      {
        productname: productname,

        price: price,

        reference: reference,
        image: image,
        status: status,
      },

      {
        where: {
          id: id,
        },
      }
    )
      .then((result) => {
        res.status(204).send(result)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
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