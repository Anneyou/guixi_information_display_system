let express = require('express')
var app = express();
var request = require('request')
let db = require('../db/index');
let authorize = require('../authorize/index');
const jwt = require('jsonwebtoken');

const token = jwt.sign({
  'namespace_id': db.namespace_id
}, authorize.appsecret)

app.get("/", function(req, res, next) {
  request({
      url: `${authorize.requestBaseUrl}/oauth/token`,
      method: 'POST',
      json: {
        client_id: authorize.clientID,
        client_secret: authorize.clientSecret,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: authorize.redirectUrl
      }
  }, function(err, response, body) {
      if (!err && response.statusCode == 200) {
        request({
          url: `${authorize.requestBaseUrl}/api/v1/user?access_token=${body.access_token}`,
          method: 'get',
        }, (error, subResponse, subBody) => {
          if (!error && subResponse.statusCode == 200) {
            let user = JSON.parse(subBody)
            request({
              url: `${authorize.requestBaseUrl}/api/v4/users/${user.id}/organizations`,
              method: 'get',
              headers: {
                'Authorization': `${authorize.appid}:${token}`
              }
            }, (e, r, b) => {
              if (!e && r.statusCode == 200) {
                console.log(b)
                res.status(200).send(b);
                if(r.data) {
                  localStorage.setItem('userId', r.data.id)
                }
              }
            })
          }
        })
      } else {
        console.log(err, res.statusCode)
      }
  });
});

module.exports = app
