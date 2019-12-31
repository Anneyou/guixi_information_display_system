let express = require('express')
var app = express();
const { Pool } = require('pg');
let db = require('../db/index');
let authorize = require('../authorize/index');

const pool = new Pool({
    connectionString: db.conStr
});

let form = `${db.prefix}_form_${db.namespace_id}_${db.enterprise_form_id}`
app.get("/", function(req, res, next) {
    pool.connect(function(err, client, done) {
        if (err) {
            console.log("not able to get connection " + err);
            res.status(400).send(err);
        }
        let data = req.query;
        let queryString = Object.keys(req.query).map(function (key) { return `${key}='${req.query[key]}'` }).join(' = ')
        let query = `SELECT * FROM ${form} where ${queryString}`
        let values = []
        client.query(query, values, function(err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            data.result = result.rows
            data.update_url = `${authorize.requestBaseUrl}/namespaces/${db.namespace_id}/yet_another_workflow/flows/${db.update_entrprise_flow_id}/journeys/new`
            data.query_url= db.company_query_url
            data.result[0].form_id = db.enterprise_form_id
            if(result.rows[0]) {
              data.response_url = `${authorize.requestBaseUrl}/namespaces/${db.namespace_id}/forms/${db.enterprise_form_id}/responses/${result.rows[0].response_id}`
            } else {
              data.response_url = ''
            }
            res.status(200).send(data);
        });
    });
});

module.exports = app
