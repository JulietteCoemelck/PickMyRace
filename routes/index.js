var express = require('express');
var router = express.Router();
var courseModel = require('../models/courses');

/* GET home page. */
router.get('/', function(req, res, next) {

 

  res.render('index', { title: 'Express' });
});

/* POST circuits */
router.post('/search', async function (req, res, next) {
  const game = req.body.game;
  const number = req.body.number;

  // Recherche aléatoire en fonction des paramètres front //
  const aggregate = await courseModel.aggregate(
    [ {$match: {console: game}}]
  ).sample(Number(number))

  res.json({aggregate:aggregate});
});



module.exports = router;
