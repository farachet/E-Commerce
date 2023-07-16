const {client}= require('../database/models/client')

module.exports= {
    updateClient:(req,res)=>{
        client.update(req.body,{where:{
            id:req.params.clientId
    }}).then(result=>res.status(201).json(result))
        .catch(err=> res.status(500).json(err))
    },
    deleteClient:(req,res)=>{
        client.destroy({where:{id:req.params.id}})
        .then(result=>res.status(201).json(result))
        .catch(err=> res.status(500).json(err))
    }
}