var express = require('express');
var router = express.Router();

var query = require('../manager/db/query');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('masterdata');
});


router.get('/api/products', query.getProducts);
module.exports = router;