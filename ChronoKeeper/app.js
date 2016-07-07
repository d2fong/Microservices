var express = require('express'),
	moment = require('moment'),
	timestampConverter = require('./timestampConverter.js');
var app = express();

app.set('view engine', 'ejs');

// The default route optionally accepts a timestamp parameter
// as input
//
app.get('/:timestamp?', function(req, res) {

	var timestamp = req.params.timestamp;

	if (typeof(timestamp) === 'undefined') {
		res.render('default');
	} else {
		var cleaned = timestamp.replace("%20", " ");
		var respData = timestampConverter.processQuery(cleaned);
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(respData));
	}
});


app.get('*', function(req, res) {
	res.send('Invalid Route.')
})

var server = app.listen(8080, function() {
	console.log('Listening on port 8080')
})