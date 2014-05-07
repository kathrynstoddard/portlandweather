var fs 		= require('fs'),
	https 	= require('https'),
	http 	= require('http'),
	express	= require('express'),
	path	= require('path'),
	moment	= require('moment'),
	request	= require('request'),
	app 	= express();

var latLong = "45.5330,-122.6894";  
var apiKey  = "d2a6fbba414f1077111054196173e812";
var url     = 'https://api.forecast.io/forecast';

url += '/' + apiKey + '/' + latLong;

app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

request(url, function(err, apiResponse, body) {

	var data = JSON.parse(body);
	currently(data);

	// httpFunction(data);

});

function currently (data) {
	var currentWeather = data.currently;
	// console.log(currentWeather);
}

// function httpFunction (url) {
// 	https.get(url, function (resp) {
// 		var body = '';

// 		resp.on('data', function (chunk) {
// 			body += chunk;
// 		});

// 		resp.on('error', function (err){
// 			console.error(err);
// 		});

// 		resp.on('end', function () {
// 			body;
// 		});
// 	});

// }

app.get('/data', function(req, res) {
	// res.json(currently);
});

app.get('/', function(req, res){
  res.sendfile('./index.html');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});