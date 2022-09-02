const Sequelize = require('sequelize');
const habitacion = require('../models').Habitaciones;

module.exports={

    List(_,res){
              return habitacion.findAll({})
              .then(habitacion => res.status(200).send(habitacion))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return habitacion.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(habitacion => res.status(200).send(habitacion))
              .catch(error => res.status(400).send(error))
},

}