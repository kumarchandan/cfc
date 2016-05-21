var express = require('express');
var router = express.Router();

var query = require('../manager/db/query');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'cfc application' });
});


// db -all queries
router.get('/api/products', query.getProducts);
router.get('/api/inventory', query.getInventory);
router.get('/api/donors', query.getDonors);
router.get('/api/employees', query.getEmployees);
router.get('/api/locations', query.getLocations);
router.get('/api/transactions', query.getTransactions);
router.get('/api/items', query.getTransItems);

// db - specific queries
router.get('/query/inventory/:center/:product/:company/:year', query.searchInventory);


module.exports = router;
