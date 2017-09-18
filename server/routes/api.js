var express = require('express');
var router = express.Router();
let request = require('request');
let stubhub = require('../config')

/* GET home page. */

let options = {
  url: 'https://api.stubhub.com/search/catalog/events/v3?status=active%20|contingent&name=dodgers&start=0&rows=20&geoExpansion=false&sort=eventDateLocal%20asc&radius=200&city=Los%20Angeles',
  headers: {
    Authorization: 'Bearer '+ stubhub.App_Token
  }
}
router.get('/', function(req, res, next) {
  request(options, function(error, response, body) {
    if (!error) {
      res.send(body);
    } else if (err) {
      console.log(err);
    }
  });
});

module.exports = router;


