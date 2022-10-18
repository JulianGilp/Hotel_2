var express = require('express');
var router = express.Router();

const HuespedesController = require('../Controllers/HuespedesController');
const HabitacionesController = require('../Controllers/HabitacionesController');
const ReservasController = require('../Controllers/ReservasController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/huespedes/',HuespedesController.ListarHuspedes);
router.get('/api/huespedes/nombres/:nombres',HuespedesController.ListAt);

router.get('/api/habitaciones/',HabitacionesController.List);
router.get('/api/habitaciones/id/:id',HabitacionesController.ListAt);
//Ruta utilizando URL
router.post('/api/CreateHabitacion/precio_por_noche/:precio_por_noche/piso/:piso/max_personas/:max_personas/tiene_cama_bebe/:tiene_cama_bebe/tiene_ducha/:tiene_ducha/tiene_bano/:tiene_bano/tiene_balcon/:tiene_balcon',HabitacionesController.CreateHabitacion);
//Ruta 


router.get('/api/reservas/',ReservasController.List);
router.get('/api/reservas/id/:id',ReservasController.ListAt);


//Ruta con el join de Habitaciones y Reservas 
router.get('/HabitacionReservas',HabitacionesController.ListarHabitacionReserva);

module.exports = router;


