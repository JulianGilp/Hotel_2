var express = require('express');
var router = express.Router();

const HuespedesController = require('../Controllers/HuespedesController');
const HabitacionesController = require('../Controllers/HabitacionesController');
const ReservasController = require('../Controllers/ReservasController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/huespedes/',HuespedesController.List);
router.get('/api/huespedes/nombres/:nombres',HuespedesController.ListAt);

router.get('/api/habitaciones/',HabitacionesController.List);
router.get('/api/habitaciones/id/:id',HabitacionesController.ListAt);

router.get('/api/reservas/',ReservasController.List);
router.get('/api/reservas/id/:id',ReservasController.ListAt);

module.exports = router;


