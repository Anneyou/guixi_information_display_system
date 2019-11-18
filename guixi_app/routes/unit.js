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
        let query = `SELECT floor, room, status, id FROM ${form} where ${queryString} `
        console.log(query)
        let values = []
        client.query(query, values, function(err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            let arr = result.rows
            var map = {},
            dest = [];
            for(var i = 0; i < arr.length; i++){
              var ai = arr[i];
              if(!map[ai.floor]){
                dest.push({
                    floor: ai.floor,
                    data: [ai]
                });
                map[ai.floor] = ai;
              }else{
                for(var j = 0; j < dest.length; j++){
                  var dj = dest[j];
                  if(dj.floor == ai.floor){
                      dj.data.push(ai);
                      break;
                  }
                }
              }
            }
            data.floors = dest
            res.status(200).send(data);
        });
    });
});

module.exports = app
