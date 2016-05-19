var express = require('express');
var router = express.Router();

var query = require('../manager/db/query');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'cfc application' });
});


// All api stuff
router.get('/api/products', query.getProducts);


module.exports = router;
