// query.js

var promise = require('bluebird');

var options = {
  // Initialization options
  promiseLib: promise
};

var cn = {
    host: 'localhost', // server name or IP address; 
    port: 5432,
    database: 'cfc',
    user: 'postgres',
    password: '99341'
};

var dbCon = require('pg-promise')(options);

var db = dbCon(cn);

function getProducts(req, res, next) {
    db.any('select * from product')
     .then(function(data) {
         res.status(200).json({
             status: 'success',
             data: data,
             message: 'all products data'
         });
     }).catch(function(err) {
         return next(err);
     });
}

module.exports = {
    getProducts: getProducts
}