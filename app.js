var express = require('express');
var app = express();
module.exports = router = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

module.exports = request = require('request');

var yellsBot1 = require('./routes/yellsbot1');


//module.exports = bot = require('fancy-groupme-bot');

//module.exports = bot = require('./bots/yellsbot1');

var port = 5000 || process.env.PORT;

app.use('/bot', router);


app.listen(port);
//console.log(botConfig);

console.log('Magic happens on port ' + port);
