let express = require('express')
var app = express();
const { Pool } = require('pg');
let db = require('../db/index');

const pool = new Pool({
    connectionString: db.conStr
});
let form = `${db.prefix}_form_${db.namespace_id}_${db.home_form_id}`
app.get("/", function(req, res, next) {
    pool.connect(function(err, client, done) {
        if (err) {
            console.log("not able to get connection " + err);
            res.status(400).send(err);
        }
        let data = req.query;
        let queryString = Object.keys(req.query).map(function (key) { return `${key}='${req.query[key]}'` }).join(' and ')
        let query = `SELECT distinct unit FROM ${form} where ${queryString}`
        let values = []
        client.query(query, values, function(err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            data.result = []
            result.rows.forEach( (row) => { data.result.push(Number(row.unit)) })
            data.result.sort( (a,b) => { return a-b; })
            res.status(200).send(data);
        });
    });
});

module.exports = app
