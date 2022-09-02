const Sequelize = require('sequelize');
const reserva = require('../models').Reservas;

module.exports={

    List(_,res){
              return reserva.findAll({})
              .then(reserva => res.status(200).send(reserva))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return reserva.findAll({
                            where: {
                               id: req.params.id
                            }
              })
              .then(reserva => res.status(200).send(reserva))
              .catch(error => res.status(400).send(error))
},

}