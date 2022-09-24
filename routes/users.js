var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res){
  res.send('Hola usuario!');
});

function HolaMaria(req,res,next)
{
  res.send('Hola usuario!');
  next();
}

module.exports = router;
