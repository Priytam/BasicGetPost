var express  = require('express');
var app      = express();
var bodyParser = require('body-parser');
var route = require('./server/route/route');


app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(__dirname + '/client'));
route(app);
app.listen(process.env.PORT || 3000);
console.log("App listening on port 3000");
