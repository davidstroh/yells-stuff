var express = require('express');
var app = express();
//module.exports = router = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//module.exports = request = require('request');

//var yellsBot1 = require('./routes/yellsbot1');

var port = process.env.PORT || 5000;

app.get('/', function(req, res){
  res.json( {'title': 'heya'} );
});

//app.use('/bot', router);


app.listen(port);
//console.log(botConfig);

console.log('Magic happens on port ' + port);
