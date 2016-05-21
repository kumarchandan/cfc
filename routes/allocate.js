var express = require('express');
var router = express.Router();

var create = require('../manager/db/create');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('allocate');
});


router.post('/create', create.createInventory);
module.exports = router;