var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const habitacion = require('../models').Habitaciones;


/* GET habitaciones listing. */
router.get('/ListaHabitaciones', function (req,res)
{
  return habitacion.findAll({})
  .then(habitacion => res.status(200).send(habitacion)).catch(error => res.status(400).send(error))
});


router.get('/Habitacion/:id', function (req,res)
{
  return habitacion.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(habitacion => res.status(200).send(habitacion)).catch(error => res.status(400).send(error))
});

router.get('/HabitacionBody', function (req,res)
{
  return habitacion.findAll({
    where: {
      id: req.body.id
    }
  })
  .then(habitacion => res.status(200).send(habitacion)).catch(error => res.status(400).send(error))
});


//--------------------
//Consultas utilizando eager loading

const reservas = require('../models').Reservas;
const huespedes = require('../models').Huespedes;

router.get('/Habitaciones/huspedes', function (req,res)
{
  return habitacion.findAll({
    include: [{model: reservas, require:true,
    include: huespedes}]
  })
  .then(habitacion => res.status(200).send(habitacion))
  .catch(error => res.status(400).send(error))
});


router.get('/Habitaciones/huspedes1', function (req,res)
{
  return habitacion.findAll({
    include: [{model: reservas, require:true}]
  })
  .then(habitacion => res.status(200).send(habitacion))
  .catch(error => res.status(400).send(error))
});


module.exports = router;
