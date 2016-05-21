// create.js

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

function createInventory(req, res, next) {
    // var stmtStr = 'insert into inventory(id, product_name, description, model, center_id, company_name, emp_resp, procurement_type, recipient_id, status, created_on)' +
	//     +'values(${id}, ${product_name}, ${description}, ${model}, ${center_id}, ${company_name}, ${emp_resp}, ${procurement_type}, ${recipient_id}, ${status}, "2016-05-19 10:23:54")';
    var stmtStr = 'insert into inventory(id, product_name, description, model, center_id, company_name, emp_resp, procurement_type, recipient_id, status, created_on) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, current_date)';
    var id = req.body.id,
        product_name = req.body.product_name,
        description = req.body.description,
        model = req.body.model,
        center_id = req.body.center_id,
        company_name = req.body.company_name,
        emp_resp = req.body.emp_resp,
        procurement_type = req.body.procurement_type,
        recipient_id = req.body.recipient_id,
        status = req.body.status;
        
    db.none(stmtStr, [id, product_name, description, model, center_id, company_name, emp_resp, procurement_type, recipient_id, status])
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'insert one data'
                });
        }).catch(function(err) {
            return next(err);
        })
}

module.exports = {
    createInventory: createInventory
}