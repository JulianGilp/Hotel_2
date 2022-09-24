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
CreateHabitacion(req, res){
     return habitacion.create({
          precio_por_noche: req.params.precio_por_noche,
          piso: req.params.piso,
          max_personas: req.params.max_personas,
          tiene_cama_bebe: req.params.tiene_cama_bebe,
          tiene_ducha: req.params.tiene_ducha,
          tiene_bano: req.params.tiene_bano,
          tiene_balcon: req.params.tiene_balcon
     }).then(usuario => res.status(200).send(usuario))
     .catch(error => res.status(400).send(error))
},

}