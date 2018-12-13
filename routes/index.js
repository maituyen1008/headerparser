var express = require('express');
var router = express.Router();

/* GET home page. */
var express = require('express');

var router = express.Router();



/* GET home page. */

router.get('/', function(req, res, next) {

  var ip = req.headers['x-forwarded-for'] ||

     req.connection.remoteAddress ||

     req.socket.remoteAddress ||

     req.connection.socket.remoteAddres;

  var info = {

     "ip-address": ip,

     "language": req.headers["accept-language"].split(',')[0],

     "software": req.headers['user-agent'].split(') ')[0].split(' (')[1]

  };

  res.json(info);

});


module.exports = router;

