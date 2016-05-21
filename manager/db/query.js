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

// get all products
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

// get all inventory
function getInventory(req, res, next) {
    db.any('select * from inventory')
     .then(function (data) {
         res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'all inventory data'
            });
     }).catch(function (err) {
         return next(err);
     });
}

// get all donors
function getDonors(req, res, next) {
    db.any('select * from donor')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'all donors data'
                })
        }).catch(function(err) {
            return next(err);
        });
}

// get all Employees
function getEmployees(req, res, next) {
    db.any('select * from employee')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'all employee data'
                })
        }).catch(function(err) {
            return next(err);
        })
}

// get all locations
function getLocations(req, res, next) {
    db.any('select * from location')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'all location data'
                })
        }).catch(function(err) {
            return next(err);
        });
}

// get all transactions
function getTransactions(req, res, next) {
    db.any('select * from transaction')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'all transaction data'
                })
        }).catch(function (err) {
            return next(err);
        });
}

// get all transaction_item data
function getTransItems(req, res, next) {
    db.any('select * from transaction_item')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'all transaction data'
                })
        }).catch(function (err) {
            return next(err);
        });
}

// Specific search queries

// :center/:product/:company/:year
function searchInventory(req, res, next) {
    debugger;
    var center = req.params.center,
        product = req.params.product,
        company = req.params.company,
        year = req.params.year;
    if(center !== 'null' && product !== 'null' && company !== 'null' && year !== 'null') {
        var stmtStr = 'select * from inventory where center_id = $1 AND product_name = $2 AND company_name = $3 AND extract(year from created_on) = $4';
        var paramArr = [center, product, company, year];
        getData(stmtStr, paramArr, function (data) {
            if(data) {
                res.status(200)
                    .json({
                        status: 'success',
                        data: data,
                        message: 'inventory data by center, product, company, year'
                    });
            }
        });
    } else if(center !== 'null' && product !== 'null' && company !== 'null') {
        var stmtStr = 'select * from inventory where center_id = $1 AND product_name = $2 AND company_name = $3';
        var paramArr = [center, product, company];
        getData(stmtStr, paramArr, function (data) {
            if(data) {
                res.status(200)
                    .json({
                        status: 'success',
                        data: data,
                        message: 'inventory data by center, product, company'
                    });
            }
        });
    }else if(year !== 'null' && product !== 'null' && company !== 'null') {
        var stmtStr = 'select * from inventory where extract(year from created_on) = $1 AND product_name = $2 AND company_name = $3';
        var paramArr = [year, product, company];
        getData(stmtStr, paramArr, function (data) {
            if(data) {
                res.status(200)
                    .json({
                        status: 'success',
                        data: data,
                        message: 'inventory data by center, product, company'
                    });
            }
        });
    } else if(center !== 'null' && product !== 'null') {
        var stmtStr = 'select * from inventory where center_id = $1 AND product_name = $2';
        var paramArr = [center, product];
        getData(stmtStr, paramArr, function (data) {
            if(data) {
                res.status(200)
                    .json({
                        status: 'success',
                        data: data,
                        message: 'inventory data by center, product'
                    });
            }
        });
    }else if(center !== 'null' && company !== 'null') {
        var stmtStr = 'select * from inventory where company_name = $1 AND center_id = $2';
        var paramArr = [company, center];
        getData(stmtStr, paramArr, function (data) {
            if(data) {
                res.status(200)
                    .json({
                        status: 'success',
                        data: data,
                        message: 'inventory data by center, company'
                    });
            }
        });
    } else if(product !== 'null' && company !== 'null') {
        var stmtStr = 'select * from inventory where company_name = $1 AND product_name = $2';
        var paramArr = [company, product];
        getData(stmtStr, paramArr, function (data) {
            if(data) {
                res.status(200)
                    .json({
                        status: 'success',
                        data: data,
                        message: 'inventory data by product, company'
                    });
            }
        });
    } else if(year !== 'null' && company !== 'null') {
        var stmtStr = 'select * from inventory where company_name = $1 AND extract(year from created_on) = $2';
        var paramArr = [company, year];
        getData(stmtStr, paramArr, function (data) {
            if(data) {
                res.status(200)
                    .json({
                        status: 'success',
                        data: data,
                        message: 'inventory data by center, company'
                    });
            }
        });
    } else if(center !== 'null') {
        var stmtStr = 'select * from inventory where center_id = $1';
        var paramStr = center;
        getData(stmtStr, paramStr, function (data) {
            if(data) {
                res.status(200)
                    .json({
                        status: 'success',
                        data: data,
                        message: 'inventory data by center'
                    });
            }
        });
    } else if(product !== 'null') {
        var stmtStr = 'select * from inventory where product_name = $1';
        var paramStr = product;
        getData(stmtStr, paramStr, function (data) {
            if(data) {
                res.status(200)
                    .json({
                        status: 'success',
                        data: data,
                        message: 'inventory data by product'
                    });
            }
        });
    } else if(company !== 'null') {
        var stmtStr = 'select * from inventory where company_name = $1';
        var paramStr = company;
        getData(stmtStr, paramStr, function (data) {
            if(data) {
                res.status(200)
                    .json({
                        status: 'success',
                        data: data,
                        message: 'inventory data by company'
                    });
            }
        });
    }
}

// generic function to get query data
function getData(stmtStr, param, callback) {
    db.any(stmtStr, param)
        .then(function (data) {
            callback(data);
        }).catch(function (err) {
            callback(err);
        });
}


module.exports = {
    getProducts: getProducts,
    getInventory: getInventory,
    getDonors: getDonors,
    getEmployees: getEmployees,
    getLocations: getLocations,
    getTransactions: getTransactions,
    getTransItems: getTransItems,
    
    searchInventory: searchInventory
}