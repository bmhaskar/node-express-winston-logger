var express = require('express'),
	winston = require('winston'),
    expressWinston = require('express-winston');
    

var app = express();

  app.use(expressWinston.logger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        }),
         new winston.transports.File({ 
         	filename: './logs/somefile.log' ,
         	maxsize: 2048
         })
      ],
      meta: false, // optional: control whether you want to log the meta data about the request (default to true)
      msg: "{{JSON.stringify(req.query,null,2)}}" // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    }));

app.get('/', function(req, res){
   res.status(200).end();
  
});

var server = app.listen(3080, function() {
    console.log('Listening on port %d', server.address().port);
});
