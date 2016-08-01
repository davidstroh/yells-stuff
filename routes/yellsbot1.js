var botConfig = { token:'3107c520384201344ec26763b4a81e13',
                  group:'23303302',
                  name:'yells stuff',
                  url:'https://localhost:3000/api/rec' };
/*var yellsBot = bot(botConfig);
yellsBot.on('botMessage', function(bot, message) {console.log(message.name + " said " + message.text);} );
yellsBot.message("Oh! It's the military community!");*/
//app.use('/yellsstuff', router);

router.get('/yells', function(req, res, next){
  res.json( {'title': 'heya'} );
  console.log( {'title': 'heya'} );
  next();
});

router.get('/yells/members', function(req, res, next){

  var options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/get/groups',
	  method: 'GET',
	  form: {'bot_id': 'a4966a5b83637f95d4d474867b', 'group': '23303302'}
  };

  body = {
    "bot_id": "eb391451ee33af0432fbc6e0f7",
    "group": "23303302"
  };

  request(options, function (error, response, body){
    if (!error && response.statusCode == 200) {
      console.log("the request happen");
    }
    else {
      console.log('rejecting bad status code ');
    }
  });
});

/*router.post('/yell', function(req, res, next){
  var senderType = req.body.sender_type,
    text = req.body.text,
    senderName = req.body.name;
    console.log(req.body);
});*/


console.log(botConfig);
