const Sequelize = require('sequelize');
const huesped = require('../models').Huespedes;

module.exports={

    List(_,res){
              return huesped.findAll({})
              .then(huesped => res.status(200).send(huesped))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return huesped.findAll({
                            where: {
                               nombres: req.params.nombres
                            }
              })
              .then(huesped => res.status(200).send(huesped))
              .catch(error => res.status(400).send(error))
},

}